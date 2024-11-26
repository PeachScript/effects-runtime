import type { Renderer } from '@galacean/effects';
import { RendererComponent, Geometry, Material, glContext, GLSLVersion, Texture, FilterMode, RenderTextureFormat } from '@galacean/effects';

export class DistortEffect extends RendererComponent {
  geometry: Geometry;

  vertex = `precision highp float;
  
  attribute vec2 aPos;
  attribute vec2 aUV;
  
  varying vec2 uv;
  varying vec2 screenUv;
  
  uniform mat4 effects_ObjectToWorld;
  uniform mat4 effects_MatrixVP;
  
  void main() {
      vec4 svPos = effects_MatrixVP * effects_ObjectToWorld * vec4(aPos,0.0, 1.0);
      vec3 ndc = svPos.xyz / svPos.w;
      screenUv = (ndc.xy + vec2(1.0))/2.;
    
      uv = aUV;
      gl_Position = svPos;
  }
    `;

  fragment = `precision highp float;
  
  varying vec2 uv;
  varying vec2 screenUv;
  
  uniform sampler2D _MainTex;
  uniform sampler2D _SpriteSheet;
  
  uniform int _FrameIndex;
  uniform int _FrameColumn;
  uniform int _FrameRow;
  
  uniform float _DistortIntensity;
  
  void main() {
  
      // 计算当前帧在图集中属于哪个行和列
      int column = _FrameIndex % _FrameColumn;
      int row = _FrameIndex / _FrameColumn;
  
      vec2 frameSize = vec2(1.0 / float(_FrameColumn), 1.0 / float(_FrameRow));
  
      // 计算帧的偏移（归一化坐标）
      vec2 frameOffset = vec2(column, row) * frameSize;
  
      // 最终纹理坐标 = 原始坐标 + 当前帧偏移
      vec2 spriteUV = uv * frameSize + frameOffset;
  
      vec4 spriteSheet = texture2D(_SpriteSheet, spriteUV);
  
      float distortAlpha = spriteSheet.a;
  
      vec4 mainTex = texture2D(_MainTex, screenUv + vec2(distortAlpha * _DistortIntensity));
  
      gl_FragColor = vec4(mainTex.rgb, 1.0);
  }
    `;

  blitVert = `precision highp float;
  
  attribute vec2 aPos;
  varying vec2 uv;
  
  void main(){
      gl_Position = vec4(aPos,0.,1.0);
      uv = (aPos + vec2(1.0))/2.;
  }
    `;

  blitFrag = `precision highp float;
  
  varying vec2 uv;
  uniform sampler2D _MainTex;
  
  void main() {
      vec4 mainTex = texture2D(_MainTex, uv);
      gl_FragColor = vec4(mainTex.rgb, 1.0);
  }
    `;

  frameIndex = 0;

  distoryIntensity = 0.1;

  blitMaterial: Material;
  override async onAwake (): Promise<void> {
    this.geometry = Geometry.create(this.engine, {
      mode: glContext.TRIANGLE_STRIP,
      attributes: {
        aPos: {
          type: glContext.FLOAT,
          size: 2,
          data: new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
        },
        aUV: {
          type: glContext.FLOAT,
          size: 2,
          data: new Float32Array([0, 1, 0, 0, 1, 1, 1, 0]),
        },
      },
      drawCount: 4,
    });

    this.material = Material.create(this.engine, {
      shader: {
        vertex: this.vertex,
        fragment: this.fragment,
        glslVersion: GLSLVersion.GLSL1,
      },
    });

    this.blitMaterial = Material.create(this.engine, {
      shader: {
        vertex: this.blitVert,
        fragment: this.blitFrag,
        glslVersion: GLSLVersion.GLSL1,
      },
    });
    this.priority = 9999;

    this.material.setInt('_FrameColumn', 4);
    this.material.setInt('_FrameRow', 5);

    const spriteTexture = await Texture.fromImage('https://mdn.alipayobjects.com/huamei_gejjqs/afts/img/A*FPfqRoQf2uEAAAAAAAAAAAAADryuAQ/fmt.webp', this.engine);

    this.material.setTexture('_SpriteSheet', spriteTexture);
  }

  override onUpdate (dt: number): void {
    this.frameIndex = (this.frameIndex + 1) % 20;

    this.material.setInt('_FrameIndex', this.frameIndex);
    this.material.setFloat('_DistortIntensity', this.distoryIntensity);
  }

  override render (renderer: Renderer) {

    const screenRT = renderer.getFramebuffer();

    const blitRT = renderer.getTemporaryRT('BlitRT', renderer.getWidth(), renderer.getHeight(), 0, FilterMode.Linear, RenderTextureFormat.RGBA32);

    renderer.setFramebuffer(blitRT);

    this.blitMaterial.mainTexture = screenRT!.getColorTextures()[0];
    if (renderer.renderingData.currentFrame.globalUniforms) {
      renderer.setGlobalMatrix('effects_ObjectToWorld', this.transform.getWorldMatrix());
    }
    renderer.drawGeometry(this.geometry, this.blitMaterial);

    this.material.mainTexture = blitRT!.getColorTextures()[0];
    renderer.setFramebuffer(screenRT);

    renderer.drawGeometry(this.geometry, this.material);
  }
}