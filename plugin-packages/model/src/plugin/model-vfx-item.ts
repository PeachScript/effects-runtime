import type {
  HitTestBoxParams,
  HitTestCustomParams,
  HitTestSphereParams,
  Composition,
  Ray,
  Engine,
} from '@galacean/effects';
import { HitTestType, VFXItem, spec, TimelineComponent } from '@galacean/effects';
import type {
  ModelItemBounding,
  ModelItemCamera,
  ModelItemLight,
  ModelItemMesh,
  ModelItemSkybox,
  ModelSkyboxOptions,
} from '../index';
import { PCamera, PLight, PSkybox } from '../runtime';
import { PMesh } from '../runtime';
import { Matrix4, Vector3 } from '../math';
import type { CompositionCache } from '../runtime/cache';
import { VFX_ITEM_TYPE_3D } from './const';
import { CheckerHelper, RayIntersectsBoxWithRotation } from '../utility';
import { ModelTreeVFXItem } from './model-tree-vfx-item';

export type ModelItem = PMesh | PCamera | PLight | PSkybox;
export type ModelItemOptions = ModelItemMesh | ModelItemCamera | ModelItemLight | ModelItemSkybox;

export class ModelVFXItem extends VFXItem<ModelItem> {
  options?: ModelItemOptions;
  bounding?: ModelItemBounding;
  timeline?: TimelineComponent;

  override get type () {
    return VFX_ITEM_TYPE_3D;
  }

  override set type (v) {
    // empty
  }

  override onConstructed (options: ModelItemOptions) {
    this.options = options;
    this.duration = options.duration;
    this.delay = options.delay ?? 0;
    const bounding = (options as ModelItemMesh).content.interaction;

    this.bounding = bounding && JSON.parse(JSON.stringify(bounding));

    if (options.type === spec.ItemType.camera || options.type === spec.ItemType.light) {
      //@ts-expect-error
      this.timeline = new TimelineComponent(options.content, this);
      this.timeline.getRenderData(0, true);
    }

    if (options.type === spec.ItemType.skybox) {
      // 从cache中创建天空盒
      this.overwriteSkyboxFromCache(options.content.options as spec.SkyboxOptions<'studio'>);
    }
  }

  override handleVisibleChanged (visible: boolean): void {
    if (this.content !== undefined) {
      this.content.onVisibleChanged(visible);
    }
  }

  override doCreateContent (composition: Composition) {
    switch (this.options?.type) {
      case 'mesh':{
        const meshOptions = this.options.content.options;

        CheckerHelper.assertModelMeshOptions(meshOptions as spec.ModelMeshOptions<any>);
        const engine = this.composition?.getEngine() as Engine;

        return new PMesh(engine, this.options as spec.ModelMeshItem<'studio'>, this);
      }
      case 'camera': {
        const cameraOptions = this.options.content.options;

        CheckerHelper.assertModelCameraOptions(cameraOptions as spec.ModelCameraOptions);
        const { width, height } = composition;

        return new PCamera(this.options as spec.ModelCameraItem, width, height, this);
      }
      case 'light':{
        const lightOptions = this.options.content.options;

        CheckerHelper.assertModelLightOptions(lightOptions as spec.ModelLightOptions);

        return new PLight(this.options as spec.ModelLightItem, this);
      }
      case 'skybox': {
        const skyboxOptions = this.options.content.options;

        CheckerHelper.assertModelSkyboxOptions(skyboxOptions as spec.SkyboxOptions<'studio'>);

        return new PSkybox(this.options as spec.ModelSkyboxItem<any>, this);
      }
      default: {
        // should never happen
        throw new Error(`Invalid model item type, options: ${this.options}`);
      }
    }
  }

  private overwriteSkyboxFromCache (options: ModelSkyboxOptions) {
    const cache = this.composition?.loaderData.cache as CompositionCache;
    const newOpts = cache.getSkyboxOptions();

    if (newOpts === undefined) { return; }

    if (
      options.specularImage !== undefined &&
      (
        options.diffuseImage !== undefined ||
        options.irradianceCoeffs !== undefined
      )
    ) {
      return;
    }

    options.diffuseImage = newOpts.diffuseImage;
    options.irradianceCoeffs = newOpts.irradianceCoeffs;
    options.specularImage = newOpts.specularImage;
    options.specularImageSize = newOpts.specularImageSize;
    options.specularMipCount = newOpts.specularMipCount;
  }

  computeBoundingBox (): ModelItemBounding | undefined {
    if (this._content === undefined) { return; }
    if (this._content instanceof PMesh) {
      const worldMatrix = Matrix4.fromArray(this.transform.getWorldMatrix());
      const bbox = this._content.computeBoundingBox(worldMatrix);
      const center = bbox.getCenter(new Vector3());
      const size = bbox.getSize(new Vector3());

      this.bounding = {
        behavior: this.bounding?.behavior,
        type: spec.ModelBoundingType.box,
        center: [center.x, center.y, center.z],
        size: [size.x, size.y, size.z],
      };

      return this.bounding;
    } else {
      return;
    }
  }

  updateTransform () {
    const itemContent = this._content;

    if (itemContent !== undefined) {
      const parentMat4 = new Matrix4();

      parentMat4.setData(this.transform.getWorldMatrix() as unknown as Float32Array);
      itemContent.matrix = parentMat4;
      if (itemContent instanceof PCamera && this.composition) {
        this.composition.camera.position = this.transform.position;
        // FIXME: 可能存在相机朝向相反的问题
        this.composition.camera.setQuat(this.transform.quat);
        this.composition.camera.near = itemContent.nearPlane;
        this.composition.camera.far = itemContent.farPlane;
        this.composition.camera.fov = itemContent.fovy;
      }
    }
  }

  updateTransformPosition (x: number, y: number, z: number): void {
    this.timeline?.updatePosition(x, y, z);
    this.transform.setPosition(x, y, z);
  }

  override onLifetimeBegin (composition: Composition, content: ModelItem) {
    if (this.content === undefined) {
      return;
    }

    if (this.content instanceof PMesh && this.parent instanceof ModelTreeVFXItem) {
      this.content.updateParentItem(this.parent);
    }

    this.content.onVisibleChanged(true);
  }

  override onItemUpdate (dt: number, lifetime: number) {
    const time = (this.timeInms - this.delayInms) * 0.001;

    this.timeline?.getRenderData(time, true);

    this.updateTransform();
  }

  override onItemRemoved (composition: Composition, content?: ModelItem) {
    if (this.content !== undefined) {
      this.content.onEntityRemoved();
      this.content.dispose();
    }
  }

  override getHitTestParams (force?: boolean): HitTestBoxParams | HitTestSphereParams | HitTestCustomParams | undefined {
    this.computeBoundingBox();
    const bounding = this.bounding;

    if (bounding && (force || Number.isInteger(bounding.behavior))) {
      const type = bounding.type;

      if (type === spec.ModelBoundingType.box) {
        if (this.content instanceof PMesh) {
          const mesh = this.content;
          const customHitTest: HitTestCustomParams = {
            behavior: bounding.behavior as number,
            type: HitTestType.custom,
            collect: function (ray: Ray, pointInCanvas: spec.vec2) {
              const origin = Vector3.fromArray(ray.center);
              const direction = Vector3.fromArray(ray.direction);
              const result = mesh.hitTesting(origin, direction);

              return result;
            },
          };

          return customHitTest;
        } else {
          const worldMatrixData = this.transform.getWorldMatrix();
          const customHitTest: HitTestCustomParams = {
            behavior: bounding.behavior as number,
            type: HitTestType.custom,
            collect: function (ray: Ray, pointInCanvas: spec.vec2) {
              const result = RayIntersectsBoxWithRotation(ray, worldMatrixData, bounding) as spec.vec3[];

              return result;
            },
          };

          return customHitTest;
        }
      } else if (type === spec.ModelBoundingType.sphere) {
        const pos = [0, 0, 0];

        this.transform.assignWorldTRS(pos);
        const center: spec.vec3 = bounding.center ? bounding.center.slice() as spec.vec3 : [0, 0, 0];

        center[0] += pos[0];
        center[1] += pos[1];
        center[2] += pos[2];

        return {
          type: type as unknown as HitTestType.sphere,
          behavior: bounding.behavior as number,
          radius: bounding.radius || 0,
          center,
        };
      }
    }
  }
}
