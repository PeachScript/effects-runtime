import type { Texture2DSourceOptionsVideo } from '@galacean/effects';
import { Asset, Player, Texture, TextureSourceType, generateGUID, glContext, loadVideo, spec } from '@galacean/effects';
import '@galacean/effects-plugin-multimedia';
import { checkAutoplayPermission, VideoComponent } from '@galacean/effects-plugin-multimedia';

const json = {
  playerVersion: {
    web: '2.0.4',
    native: '0.0.1.202311221223',
  },
  images: [
    {
      url: 'https://mdn.alipayobjects.com/mars/afts/img/A*A-EoQ6SHJBgAAAAAAAAAAAAADlB4AQ/original',
      webp: 'https://mdn.alipayobjects.com/mars/afts/img/A*y0ihQrDikLUAAAAAAAAAAAAADlB4AQ/original',
      id: 'e3b1624a497b4c94bdfc9d4224434a95',
      renderLevel: 'B+',
    },
  ],
  fonts: [],
  version: '3.0',
  shapes: [],
  plugins: ['video'],
  videos: [
    {
      url: 'https://gw.alipayobjects.com/v/huamei_s9rwo4/afts/video/A*pud9Q7-6P7QAAAAAAAAAAAAADiqKAQ',
      id: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      renderLevel: 'B+',
    },
  ],
  type: 'ge',
  compositions: [
    {
      id: '5',
      name: 'comp1',
      duration: 10,
      startTime: 0,
      endBehavior: 4,
      previewSize: [750, 1624],
      items: [
        {
          id: '14b3d069cbad4cbd81d0a8731cc4aba7',
        },
        {
          id: '8b526e86ce154031a76f9176e7224f89',
        },
      ],
      camera: {
        fov: 60,
        far: 40,
        near: 0.1,
        clipMode: 1,
        position: [0, 0, 8],
        rotation: [0, 0, 0],
      },
      sceneBindings: [
        {
          key: {
            id: '75f0686d9d8341bf90a1711610e1d2fd',
          },
          value: {
            id: '14b3d069cbad4cbd81d0a8731cc4aba7',
          },
        },
        {
          key: {
            id: 'cb6a906e43204b198ecdd323b6a4965e',
          },
          value: {
            id: '8b526e86ce154031a76f9176e7224f89',
          },
        },
      ],
      timelineAsset: {
        id: 'b2cf025ce3b44b5f97759b4679e9598e',
      },
    },
  ],
  components: [
    {
      id: 'e45437d799364b7cad14b2222669d604',
      item: {
        id: '14b3d069cbad4cbd81d0a8731cc4aba7',
      },
      dataType: 'VideoComponent',
      options: {
        startColor: [1, 1, 1, 1],
        video: {
          id: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        },
      },
      renderer: {
        renderMode: 1,
        texture: {
          id: 'b582d21fdd524c4684f1c057b220ddd0',
        },
      },
      splits: [[0, 0, 1, 1, 0]],
    },
    {
      id: '295331279c0f472983f949b08cf3838a',
      item: {
        id: '8b526e86ce154031a76f9176e7224f89',
      },
      dataType: 'ParticleSystem',
      shape: {
        type: 1,
        radius: 1,
        arc: 360,
        arcMode: 0,
        alignSpeedDirection: false,
        shape: 'Sphere',
      },
      renderer: {
        renderMode: 1,
        anchor: [0, 0],
      },
      emission: {
        rateOverTime: [0, 5],
      },
      options: {
        maxCount: 10,
        startLifetime: [0, 1.2],
        startDelay: [0, 0],
        particleFollowParent: false,
        start3DSize: false,
        startRotationZ: [0, 0],
        startColor: [8, [1, 1, 1, 1]],
        startSize: [0, 0.2],
        sizeAspect: [0, 1],
      },
      positionOverLifetime: {
        startSpeed: [0, 1],
        gravity: [0, 0, 0],
        gravityOverLifetime: [0, 1],
      },
    },
  ],
  geometries: [],
  materials: [],
  items: [
    {
      id: '14b3d069cbad4cbd81d0a8731cc4aba7',
      name: 'video',
      duration: 5,
      type: '1',
      visible: true,
      endBehavior: 5,
      delay: 0,
      renderLevel: 'B+',
      components: [
        {
          id: 'e45437d799364b7cad14b2222669d604',
        },
      ],
      transform: {
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        eulerHint: {
          x: 0,
          y: 0,
          z: 0,
        },
        anchor: {
          x: 0,
          y: 0,
        },
        size: {
          x: 3.1475,
          y: 3.1475,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
      },
      dataType: 'VFXItemData',
    },
    {
      id: '8b526e86ce154031a76f9176e7224f89',
      name: 'particle_2',
      duration: 5,
      type: '2',
      visible: true,
      endBehavior: 4,
      delay: 0,
      renderLevel: 'B+',
      content: {
        dataType: 'ParticleSystem',
        shape: {
          type: 1,
          radius: 1,
          arc: 360,
          arcMode: 0,
          alignSpeedDirection: false,
          shape: 'Sphere',
        },
        renderer: {
          renderMode: 1,
          anchor: [0, 0],
        },
        emission: {
          rateOverTime: [0, 5],
        },
        options: {
          maxCount: 10,
          startLifetime: [0, 1.2],
          startDelay: [0, 0],
          particleFollowParent: false,
          start3DSize: false,
          startRotationZ: [0, 0],
          startColor: [8, [1, 1, 1, 1]],
          startSize: [0, 0.2],
          sizeAspect: [0, 1],
        },
        positionOverLifetime: {
          startSpeed: [0, 1],
          gravity: [0, 0, 0],
          gravityOverLifetime: [0, 1],
        },
      },
      components: [
        {
          id: '295331279c0f472983f949b08cf3838a',
        },
      ],
      transform: {
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        eulerHint: {
          x: 0,
          y: 0,
          z: 0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
      },
      dataType: 'VFXItemData',
    },
  ],
  shaders: [],
  bins: [],
  textures: [
    {
      id: 'b582d21fdd524c4684f1c057b220ddd0',
      source: {
        id: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      },
      flipY: true,
    },
  ],
  animations: [],
  miscs: [
    {
      id: 'b2cf025ce3b44b5f97759b4679e9598e',
      dataType: 'TimelineAsset',
      tracks: [
        {
          id: '75f0686d9d8341bf90a1711610e1d2fd',
        },
        {
          id: 'cb6a906e43204b198ecdd323b6a4965e',
        },
      ],
    },
    {
      id: 'f1c1e1d9460848fdb035116d63bc2f3f',
      dataType: 'ActivationPlayableAsset',
    },
    {
      id: 'c94c61ae3c384ba396261f4f93c5b4fb',
      dataType: 'TransformPlayableAsset',
      positionOverLifetime: {
        path: [
          22,
          [
            [
              [4, [0, -1]],
              [4, [0.992, 0]],
            ],
            [
              [-3.52496405201993, 0, 0],
              [0, 0, 0],
            ],
            [
              [-2.34997603467995, 0, 0],
              [-1.17498801733998, 0, 0],
            ],
          ],
        ],
      },
    },
    {
      id: '75ae320c918345e994898d378cbc4b5a',
      dataType: 'SpriteColorPlayableAsset',
      startColor: [1, 1, 1, 1],
    },
    {
      id: '11111878de5e49e198c062f29f3c6c38',
      dataType: 'ActivationTrack',
      children: [],
      clips: [
        {
          start: 0,
          duration: 5,
          endBehavior: 5,
          asset: {
            id: 'f1c1e1d9460848fdb035116d63bc2f3f',
          },
        },
      ],
    },
    {
      id: '5ff36d3c30964b83b3ba8f4819f45d93',
      dataType: 'TransformTrack',
      children: [],
      clips: [
        {
          start: 0,
          duration: 5,
          endBehavior: 5,
          asset: {
            id: 'c94c61ae3c384ba396261f4f93c5b4fb',
          },
        },
      ],
    },
    {
      id: '7695800886c846308d5436acade4c8df',
      dataType: 'SpriteColorTrack',
      children: [],
      clips: [
        {
          start: 0,
          duration: 5,
          endBehavior: 5,
          asset: {
            id: '75ae320c918345e994898d378cbc4b5a',
          },
        },
      ],
    },
    {
      id: '75f0686d9d8341bf90a1711610e1d2fd',
      dataType: 'ObjectBindingTrack',
      children: [
        {
          id: '11111878de5e49e198c062f29f3c6c38',
        },
        {
          id: '5ff36d3c30964b83b3ba8f4819f45d93',
        },
        {
          id: '7695800886c846308d5436acade4c8df',
        },
      ],
      clips: [],
    },
    {
      id: 'e5a205def3dd43d6b5ab1984962e3a90',
      dataType: 'ActivationPlayableAsset',
    },
    {
      id: '3f9afeb4198043af90c2c8579f111901',
      dataType: 'ActivationTrack',
      children: [],
      clips: [
        {
          start: 0,
          duration: 5,
          endBehavior: 4,
          asset: {
            id: 'e5a205def3dd43d6b5ab1984962e3a90',
          },
        },
      ],
    },
    {
      id: 'cb6a906e43204b198ecdd323b6a4965e',
      dataType: 'ObjectBindingTrack',
      children: [
        {
          id: '3f9afeb4198043af90c2c8579f111901',
        },
      ],
      clips: [],
    },
  ],
  compositionId: '5',
};
let player: Player;
const container = document.getElementById('J-container');
const addButton = document.getElementById('J-add');
const updateButton = document.getElementById('J-update');
const inputEle = document.getElementById('J-input') as HTMLInputElement;

player = new Player({
  container,
  fps: 130,
});
const asset = new Asset(player.renderer.engine);
const video = await loadVideo('https://gw.alipayobjects.com/v/huamei_s9rwo4/afts/video/A*pud9Q7-6P7QAAAAAAAAAAAAADiqKAQ');
const videoTexture = Texture.create(player.renderer.engine, {
  sourceType: TextureSourceType.video,
  video,
  id: generateGUID(),
  flipY: true,
  magFilter: glContext.LINEAR,
  minFilter: glContext.LINEAR,
});

asset.data = video;

videoTexture.initialize();
// const videoTexture = await Texture.fromVideo('https://gw.alipayobjects.com/v/huamei_s9rwo4/afts/video/A*pud9Q7-6P7QAAAAAAAAAAAAADiqKAQ', player.renderer.engine);
videoTexture.source.source = asset;


const json1 = {
  playerVersion: {
    web: '2.0.6',
    native: '0.0.1.202311221223',
  },
  images: [
    {
      id: '5c4ab15cb6c9480183c71e8b20dae121',
      template: {
        width: 391,
        height: 131,
        background: {
          name: 'a',
          url: 'https://mdn.alipayobjects.com/mars/afts/img/A*K63aS5OLxTMAAAAAAAAAAAAADlB4AQ/original',
          type: 'image',
        },
      },
      url: 'https://mdn.alipayobjects.com/mars/afts/img/A*dCuMQJHrA3cAAAAAAAAAAAAADlB4AQ/original',
      webp: 'https://mdn.alipayobjects.com/mars/afts/img/A*dOsPTLe-8X8AAAAAAAAAAAAADlB4AQ/original',
      renderLevel: 'B+',
    },
    {
      url: 'https://mdn.alipayobjects.com/mars/afts/img/A*wm00SLUcrrwAAAAAAAAAAAAADlB4AQ/original',
      webp: 'https://mdn.alipayobjects.com/mars/afts/img/A*mwqXSKD7joUAAAAAAAAAAAAADlB4AQ/original',
      id: '43ce539ded864fff949c5c10922da895',
      renderLevel: 'B+',
    },
  ],
  fonts: [],
  version: '3.0',
  shapes: [
    {
      p: [
        10,
        [
          [
            -1.00229885057471, 0.00953268348623837, -1.0010775862069, -0.30284188646789, -1.00352011494253,
            0.321907253440367,
          ],
          [
            -0.711673850574713, 1.00030461582569, -0.877729885057471, 0.969484661697248, -0.604867097701149,
            0.996022075688073,
          ],
          [
            0.716558908045977, 0.995789134174312, 0.473311781609196, 0.991560349770642, 0.934357040229885,
            0.911446387614679,
          ],
          [
            1.01149425287356, 0.0141198394495414, 1.01149425287356, 0.214119839449541, 0.988451867816092,
            -0.301802608944954,
          ],
          [
            0.676311063218391, -1.00707783830275, 0.959662356321839, -0.927752293577982, 0.346120689655173,
            -1.00856508027523,
          ],
          [
            -0.703591954022989, -1.00299240252294, -0.452801724137931, -1.00136181192661, -0.909069683908046,
            -0.956224913990826,
          ],
        ],
      ],
      s: [
        11,
        [
          [0, 0.125, 0.25, 0.5, 0.625, 0.6875, 0.75, 0.8125, 0.875, 1],
          [0, 1],
          [0, 0.125, 0.1875, 0.25, 0.3125, 0.375, 0.5, 0.75, 1],
          [0, 0.25, 0.5, 0.625, 0.6875, 0.75, 0.8125, 0.875, 0.9375, 1],
          [0, 1],
          [0, 0.125, 0.1875, 0.25, 0.3125, 0.375, 0.5, 0.75, 1],
        ],
      ],
    },
  ],
  plugins: ['video'],
  type: 'ge',
  compositions: [
    {
      id: '8',
      name: '扫光',
      duration: 5,
      startTime: 0,
      endBehavior: 2,
      previewSize: [750, 1334],
      items: [
        {
          id: '855d462074754f3e8a56e909d5789463',
        },
        {
          id: '38979e0d07d84f709c3c2fbe64bd6ede',
        },
      ],
      camera: {
        fov: 60,
        far: 20,
        near: 0.1,
        clipMode: 0,
        position: [0, 0, 8],
        rotation: [0, 0, 0],
      },
      sceneBindings: [
        {
          key: {
            id: '50f0370bbc60441aa7a35ef2fbe52b94',
          },
          value: {
            id: '855d462074754f3e8a56e909d5789463',
          },
        },
        {
          key: {
            id: '7cd19256b80f43dc851ca4b5876948cd',
          },
          value: {
            id: '38979e0d07d84f709c3c2fbe64bd6ede',
          },
        },
      ],
      timelineAsset: {
        id: '6b4eb0029008465398bbcb98d1d235ff',
      },
    },
  ],
  videos: [
    {
      url: 'https://gw.alipayobjects.com/v/huamei_s9rwo4/afts/video/A*pud9Q7-6P7QAAAAAAAAAAAAADiqKAQ',
      id: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      renderLevel: 'B+',
    },
  ],
  components: [
    {
      id: '2e24ce3ea28e450d88f48a654318f83f',
      item: {
        id: '855d462074754f3e8a56e909d5789463',
      },
      dataType: 'VideoComponent',
      options: {
        startColor: [1, 1, 1, 1],
        video:asset,
      },
      renderer: {
        renderMode: 1,
        shape: 0,
        // texture: {
        //   id: '10b2fd9311934f31b6594fe5ebf9aae4',
        // },
        texture: videoTexture,
      },
    },
    {
      id: 'aa2c69b6cea1465eaa72d52bf5e78a49',
      item: {
        id: '38979e0d07d84f709c3c2fbe64bd6ede',
      },
      dataType: 'SpriteComponent',
      options: {
        startColor: [1, 1, 1, 0.3],
      },
      renderer: {
        renderMode: 1,
        maskMode: 2,
        texture: {
          id: '8310ac79410140cdbccb458f3fbef839',
        },
        blending: 5,
      },
      splits: [
        [0.126953125, 0.0009765625, 0.1220703125, 0.5849609375, 0],
        [0.0009765625, 0.0009765625, 0.1220703125, 0.5849609375, 0],
        [0.2529296875, 0.0009765625, 0.1220703125, 0.5849609375, 0],
        [0.0009765625, 0.58984375, 0.1220703125, 0.5849609375, 1],
      ],
    },
  ],
  geometries: [],
  materials: [],
  items: [
    {
      id: '855d462074754f3e8a56e909d5789463',
      name: 'video1',
      duration: 5,
      type: '1',
      visible: true,
      endBehavior: 4,
      delay: 0,
      renderLevel: 'B+',
      components: [
        {
          id: '2e24ce3ea28e450d88f48a654318f83f',
        },
      ],
      transform: {
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        eulerHint: {
          x: 0,
          y: 0,
          z: 0,
        },
        anchor: {
          x: 0,
          y: 0,
        },
        size: {
          x: 2.6799,
          y: 0.8979,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
      },
      dataType: 'VFXItemData',
    },
    {
      id: '38979e0d07d84f709c3c2fbe64bd6ede',
      name: 'video',
      duration: 3,
      type: '1',
      visible: true,
      endBehavior: 5,
      delay: 0,
      renderLevel: 'B+',
      components: [
        {
          id: 'aa2c69b6cea1465eaa72d52bf5e78a49',
        },
      ],
      transform: {
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        eulerHint: {
          x: 0,
          y: 0,
          z: 30,
        },
        anchor: {
          x: 0,
          y: 0,
        },
        size: {
          x: 1.2,
          y: 5.7504,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
      },
      dataType: 'VFXItemData',
    },
  ],
  shaders: [],
  bins: [],
  textures: [
    {
      id: '10b2fd9311934f31b6594fe5ebf9aae4',
      source: {
        id: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      },
      flipY: true,
    },
    // {
    //   id: '10b2fd9311934f31b6594fe5ebf9aae4',
    //   source: {
    //     id: '5c4ab15cb6c9480183c71e8b20dae121',
    //   },
    //   flipY: true,
    // },
    {
      id: '8310ac79410140cdbccb458f3fbef839',
      source: {
        id: '43ce539ded864fff949c5c10922da895',
      },
      flipY: true,
    },
  ],
  animations: [],
  miscs: [
    {
      id: '6b4eb0029008465398bbcb98d1d235ff',
      dataType: 'TimelineAsset',
      tracks: [
        {
          id: '50f0370bbc60441aa7a35ef2fbe52b94',
        },
        {
          id: '7cd19256b80f43dc851ca4b5876948cd',
        },
      ],
    },
    {
      id: 'bcb170b2b9b1465aa1dc706a5d9cd5da',
      dataType: 'ActivationPlayableAsset',
    },
    {
      id: 'd1b8e48e6e9b4cc1b2667a0e8ca76ec7',
      dataType: 'TransformPlayableAsset',
      positionOverLifetime: {},
    },
    {
      id: '9ad4c6abb4bf4546b7ca75d1a00b8d2d',
      dataType: 'SpriteColorPlayableAsset',
      startColor: [1, 1, 1, 1],
    },
    {
      id: '74a742a8a9864193ae95593c00dc8ada',
      dataType: 'ActivationTrack',
      children: [],
      clips: [
        {
          start: 0,
          duration: 5,
          endBehavior: 4,
          asset: {
            id: 'bcb170b2b9b1465aa1dc706a5d9cd5da',
          },
        },
      ],
    },
    {
      id: 'd293182607a04ca88a55c44d0103fdd4',
      dataType: 'TransformTrack',
      children: [],
      clips: [
        {
          start: 0,
          duration: 5,
          endBehavior: 4,
          asset: {
            id: 'd1b8e48e6e9b4cc1b2667a0e8ca76ec7',
          },
        },
      ],
    },
    {
      id: '62bde312047b4dd9ad45c5f32f4ec2e3',
      dataType: 'SpriteColorTrack',
      children: [],
      clips: [
        {
          start: 0,
          duration: 4,
          endBehavior: 4,
          asset: {
            id: '9ad4c6abb4bf4546b7ca75d1a00b8d2d',
          },
        },
      ],
    },
    {
      id: '50f0370bbc60441aa7a35ef2fbe52b94',
      dataType: 'ObjectBindingTrack',
      children: [
        {
          id: '74a742a8a9864193ae95593c00dc8ada',
        },
        {
          id: 'd293182607a04ca88a55c44d0103fdd4',
        },
        {
          id: '62bde312047b4dd9ad45c5f32f4ec2e3',
        },
      ],
      clips: [],
    },
    {
      id: '805c7ca89a714735862304766be8f13c',
      dataType: 'ActivationPlayableAsset',
    },
    {
      id: '873ffc83a12e4cbbae97f5a7576b8448',
      dataType: 'TransformPlayableAsset',
      positionOverLifetime: {
        path: [
          22,
          [
            [
              [3, [0, 0.11, 0.333333333333333, 1.1157]],
              [2, [0.666666666666667, 1.00593333333333, 1, 1]],
            ],
            [
              [-1.87611186611667, 0.00110603499844775, 0],
              [2.10561412829454, -0.0696802049021965, 0],
            ],
            [
              [-1.87611186611667, 0.00110603499844775, 0],
              [2.10561412829454, -0.0696802049021965, 0],
            ],
          ],
        ],
      },
    },
    {
      id: 'b1068f2563ab4b08804f462b0bc1897e',
      dataType: 'SpriteColorPlayableAsset',
      startColor: [1, 1, 1, 0.3],
    },
    {
      id: '6631aaf0d6b1442a9648647968c5bd98',
      dataType: 'ActivationTrack',
      children: [],
      clips: [
        {
          start: 0,
          duration: 3,
          endBehavior: 5,
          asset: {
            id: '805c7ca89a714735862304766be8f13c',
          },
        },
      ],
    },
    {
      id: 'a19e52a2580b4fceb595b308ca7f840c',
      dataType: 'TransformTrack',
      children: [],
      clips: [
        {
          start: 0,
          duration: 3,
          endBehavior: 5,
          asset: {
            id: '873ffc83a12e4cbbae97f5a7576b8448',
          },
        },
      ],
    },
    {
      id: 'ffe87c560e344fcb8550e35fd9fdf0f2',
      dataType: 'SpriteColorTrack',
      children: [],
      clips: [
        {
          start: 0,
          duration: 3,
          endBehavior: 5,
          asset: {
            id: 'b1068f2563ab4b08804f462b0bc1897e',
          },
        },
      ],
    },
    {
      id: '7cd19256b80f43dc851ca4b5876948cd',
      dataType: 'ObjectBindingTrack',
      children: [
        {
          id: '6631aaf0d6b1442a9648647968c5bd98',
        },
        {
          id: 'a19e52a2580b4fceb595b308ca7f840c',
        },
        {
          id: 'ffe87c560e344fcb8550e35fd9fdf0f2',
        },
      ],
      clips: [],
    },
  ],
  compositionId: '8',
};


(async () => {
  try {

    await checkAutoplayPermission();

    await player.loadScene(json1, { renderLevel: spec.RenderLevel.B });
  } catch (e) {
    console.error('biz', e);
  }
})();

addButton?.addEventListener('click', async () => {
  const value = inputEle.value;

  if (value) {
    const item = player.getCompositionByName('comp1')?.getItemByName('video');
    const texture = await Texture.fromVideo(value, player.renderer.engine);

    if (!item) {
      return;
    }

    const videoComponent = item.addComponent(VideoComponent);

    item.composition?.textures.push(texture);
    videoComponent.item = item;
    videoComponent.fromData({
      options: {
        video: {
          //@ts-expect-error
          data: (texture.source as Texture2DSourceOptionsVideo).video,
        },
      },
      renderer: {
        mask: 0,
        texture,
      },
    });
  }
});

updateButton?.addEventListener('click', async () => {
  const value = inputEle.value;

  if (value) {
    const videoComponent = player.getCompositionByName('comp1')?.getItemByName('video')?.getComponent(VideoComponent);

    if (videoComponent) {
      const texture = await Texture.fromVideo(value, player.renderer.engine);

      videoComponent.setTexture(texture);
    }
  }
});
