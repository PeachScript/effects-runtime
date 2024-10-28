// @ts-nocheck
import { Player } from '@galacean/effects';
import '@galacean/effects-plugin-spine';

let json = {
  'playerVersion': {
    'web': '2.0.6',
    'native': '0.0.1.202311221223',
  },
  'images': [
    {
      'url': 'https://mdn.alipayobjects.com/mars/afts/img/A*0FbNTbL9G2kAAAAAAAAAAAAADlB4AQ/original',
      'webp': 'https://mdn.alipayobjects.com/mars/afts/img/A*ajAIS5yVB2sAAAAAAAAAAAAADlB4AQ/original',
      'id': '36d18e6d52674bef9cbfdc52efa1b842',
      'renderLevel': 'B+',
    },
  ],
  'fonts': [],
  'version': '3.0',
  'shapes': [],
  'plugins': [],
  'type': 'ge',
  'compositions': [
    {
      'id': '33',
      'name': '按钮',
      'duration': 6.033333333333333,
      'startTime': 0,
      'endBehavior': 2,
      'previewSize': [
        750,
        1624,
      ],
      'items': [
        {
          'id': '38431afe8cc54706b3c42c9345b83e90',
        },
        {
          'id': '6c008c0399474e5db94e01b45026d8cf',
        },
      ],
      'camera': {
        'fov': 60,
        'far': 20,
        'near': 0.1,
        'clipMode': 1,
        'position': [
          0,
          0,
          8,
        ],
        'rotation': [
          0,
          0,
          0,
        ],
      },
      'sceneBindings': [
        {
          'key': {
            'id': '0c1d479a0ba948e387730e66abb927a3',
          },
          'value': {
            'id': '38431afe8cc54706b3c42c9345b83e90',
          },
        },
        {
          'key': {
            'id': '4aeec55c0e044db49c83c781d4885cb7',
          },
          'value': {
            'id': '6c008c0399474e5db94e01b45026d8cf',
          },
        },
      ],
      'timelineAsset': {
        'id': '8c3e81a186b84be6868f7a7de0f7b36a',
      },
    },
  ],
  'components': [
    {
      'id': 'b3e7ede9be104d459fec86af3607640f',
      'item': {
        'id': '38431afe8cc54706b3c42c9345b83e90',
      },
      'dataType': 'SpriteComponent',
      'options': {
        'startColor': [
          1,
          1,
          1,
          1,
        ],
      },
      'renderer': {
        'renderMode': 1,
        'texture': {
          'id': 'b20b77153d9e4fcf9c314f70bba46cb6',
        },
        'maskMode': 0,
      },
      'splits': [
        [
          0,
          0.59375,
          0.390625,
          0.25390625,
          1,
        ],
      ],
    },
    {
      'id': '5dd0e92e9f694bac9def58408f69827a',
      'item': {
        'id': '6c008c0399474e5db94e01b45026d8cf',
      },
      'dataType': 'SpriteComponent',
      'options': {
        'startColor': [
          1,
          1,
          1,
          1,
        ],
      },
      'renderer': {
        'renderMode': 1,
        'texture': {
          'id': 'b20b77153d9e4fcf9c314f70bba46cb6',
        },
      },
      'splits': [
        [
          0,
          0,
          0.65625,
          0.58984375,
          0,
        ],
      ],
    },
  ],
  'geometries': [],
  'materials': [],
  'items': [
    {
      'id': '38431afe8cc54706b3c42c9345b83e90',
      'name': '圈.png',
      'duration': 10,
      'type': '1',
      'visible': true,
      'endBehavior': 5,
      'delay': 0,
      'renderLevel': 'B+',
      'components': [
        {
          'id': 'b3e7ede9be104d459fec86af3607640f',
        },
      ],
      'transform': {
        'position': {
          'x': 0,
          'y': 0,
          'z': 0,
        },
        'eulerHint': {
          'x': 0,
          'y': 0,
          'z': 0,
        },
        'anchor': {
          'x': 0,
          'y': 0,
        },
        'size': {
          'x': 1,
          'y': 1,
        },
        'scale': {
          'x': 1,
          'y': 1,
          'z': 1,
        },
      },
      'dataType': 'VFXItemData',
    },
    {
      'id': '6c008c0399474e5db94e01b45026d8cf',
      'name': '按钮框.png',
      'duration': 6.0333,
      'type': '1',
      'visible': true,
      'endBehavior': 4,
      'delay': 0,
      'renderLevel': 'B+',
      'components': [
        {
          'id': '5dd0e92e9f694bac9def58408f69827a',
        },
      ],
      'transform': {
        'position': {
          'x': 0,
          'y': 0,
          'z': 0,
        },
        'eulerHint': {
          'x': 0,
          'y': 0,
          'z': 0,
        },
        'anchor': {
          'x': 0,
          'y': 0,
        },
        'size': {
          'x': 1,
          'y': 1,
        },
        'scale': {
          'x': 1,
          'y': 1,
          'z': 1,
        },
      },
      'dataType': 'VFXItemData',
    },
  ],
  'shaders': [],
  'bins': [],
  'textures': [
    {
      'id': 'b20b77153d9e4fcf9c314f70bba46cb6',
      'source': {
        'id': '36d18e6d52674bef9cbfdc52efa1b842',
      },
      'flipY': true,
    },
  ],
  'animations': [],
  'miscs': [
    {
      'id': '8c3e81a186b84be6868f7a7de0f7b36a',
      'dataType': 'TimelineAsset',
      'tracks': [
        {
          'id': '0c1d479a0ba948e387730e66abb927a3',
        },
        {
          'id': '4aeec55c0e044db49c83c781d4885cb7',
        },
      ],
    },
    {
      'id': '2e2a887fee14465dad29088d3c68307a',
      'dataType': 'ActivationPlayableAsset',
    },
    {
      'id': '24b0135995904e8ba9325549895ab484',
      'dataType': 'TransformPlayableAsset',
      'positionOverLifetime': {},
      'rotationOverLifetime': {
        'z': [
          21,
          [
            [
              3,
              [
                0,
                0,
                0.2403314917127072,
                157.49999945068367,
              ],
            ],
            [
              2,
              [
                0.24696132596685083,
                161.1000037078852,
                0.5,
                360,
              ],
            ],
          ],
        ],
        'asRotation': true,
      },
    },
    {
      'id': '56113a68635a4049b6aad32b763db203',
      'dataType': 'SpriteColorPlayableAsset',
      'startColor': [
        1,
        1,
        1,
        1,
      ],
    },
    {
      'id': '3b4f55a49734430a8c02f8f663d8a81c',
      'dataType': 'ActivationTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 10,
          'endBehavior': 5,
          'asset': {
            'id': '2e2a887fee14465dad29088d3c68307a',
          },
        },
      ],
    },
    {
      'id': '9637dc36f30040f2ab283bc916f43ec6',
      'dataType': 'TransformTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 10,
          'endBehavior': 5,
          'asset': {
            'id': '24b0135995904e8ba9325549895ab484',
          },
        },
      ],
    },
    {
      'id': '42b0192ddb474bcaac2547552671b8e0',
      'dataType': 'SpriteColorTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 10,
          'endBehavior': 5,
          'asset': {
            'id': '56113a68635a4049b6aad32b763db203',
          },
        },
      ],
    },
    {
      'id': '0c1d479a0ba948e387730e66abb927a3',
      'dataType': 'ObjectBindingTrack',
      'children': [
        {
          'id': '3b4f55a49734430a8c02f8f663d8a81c',
        },
        {
          'id': '9637dc36f30040f2ab283bc916f43ec6',
        },
        {
          'id': '42b0192ddb474bcaac2547552671b8e0',
        },
      ],
      'clips': [],
    },
    {
      'id': '2c9c8e7b99cb496f87a93d0618371c52',
      'dataType': 'ActivationPlayableAsset',
    },
    {
      'id': '04abc279f20146faa26eebc09f7ed683',
      'dataType': 'TransformPlayableAsset',
      'positionOverLifetime': {},
    },
    {
      'id': '647325ea3c9f45fba3ef015160d225fc',
      'dataType': 'SpriteColorPlayableAsset',
      'startColor': [
        1,
        1,
        1,
        1,
      ],
    },
    {
      'id': '6219bce72afc4222b9314b5f84828995',
      'dataType': 'ActivationTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 6.033333333333333,
          'endBehavior': 4,
          'asset': {
            'id': '2c9c8e7b99cb496f87a93d0618371c52',
          },
        },
      ],
    },
    {
      'id': '9859ae3e840a4a43a3a61675c23dd0ed',
      'dataType': 'TransformTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 6.033333333333333,
          'endBehavior': 4,
          'asset': {
            'id': '04abc279f20146faa26eebc09f7ed683',
          },
        },
      ],
    },
    {
      'id': '3572a7f40e3645e98516f7f1d9514ffb',
      'dataType': 'SpriteColorTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 6.033333333333333,
          'endBehavior': 4,
          'asset': {
            'id': '647325ea3c9f45fba3ef015160d225fc',
          },
        },
      ],
    },
    {
      'id': '4aeec55c0e044db49c83c781d4885cb7',
      'dataType': 'ObjectBindingTrack',
      'children': [
        {
          'id': '6219bce72afc4222b9314b5f84828995',
        },
        {
          'id': '9859ae3e840a4a43a3a61675c23dd0ed',
        },
        {
          'id': '3572a7f40e3645e98516f7f1d9514ffb',
        },
      ],
      'clips': [],
    },
  ],
  'compositionId': '33',
};

// json = {
//   'playerVersion': {
//     'web': '2.0.6',
//     'native': '0.0.1.202311221223',
//   },
//   'images': [
//     {
//       'url': 'https://mdn.alipayobjects.com/mars/afts/img/A*zT6KRKMxcY0AAAAAAAAAAAAADlB4AQ/original',
//       'webp': 'https://mdn.alipayobjects.com/mars/afts/img/A*mN3iS6Iw9EkAAAAAAAAAAAAADlB4AQ/original',
//       'id': '73d412e5664b44d1b3ddeb736bf993ec',
//       'renderLevel': 'B+',
//     },
//     {
//       'url': 'https://mdn.alipayobjects.com/mars/afts/img/A*KlGqRo0XfGAAAAAAAAAAAAAADlB4AQ/original',
//       'webp': 'https://mdn.alipayobjects.com/mars/afts/img/A*w_ocT6fia3sAAAAAAAAAAAAADlB4AQ/original',
//       'id': '9059c018cb874abe816e72443e179193',
//       'renderLevel': 'B+',
//     },
//   ],
//   'fonts': [],
//   'version': '3.0',
//   'shapes': [],
//   'plugins': [],
//   'type': 'ge',
//   'compositions': [
//     {
//       'id': '37',
//       'name': '按钮 (1)',
//       'duration': 6.033333333333333,
//       'startTime': 0,
//       'endBehavior': 2,
//       'previewSize': [
//         750,
//         1624,
//       ],
//       'items': [
//         {
//           'id': '1c49d1bbf82e4f3c8c1af49a72fcf690',
//         },
//         {
//           'id': '1c723e7e62aa48aeb8422c90d04983fd',
//         },
//       ],
//       'camera': {
//         'fov': 60,
//         'far': 20,
//         'near': 0.1,
//         'clipMode': 1,
//         'position': [
//           0,
//           0,
//           8,
//         ],
//         'rotation': [
//           0,
//           0,
//           0,
//         ],
//       },
//       'sceneBindings': [
//         {
//           'key': {
//             'id': '1fafcb887c4f40308ed386e55ef2be28',
//           },
//           'value': {
//             'id': '1c49d1bbf82e4f3c8c1af49a72fcf690',
//           },
//         },
//         {
//           'key': {
//             'id': '4eb44be4234a4e6793b4181c4bc8fb6c',
//           },
//           'value': {
//             'id': '1c723e7e62aa48aeb8422c90d04983fd',
//           },
//         },
//       ],
//       'timelineAsset': {
//         'id': '47c65029bddb4d6cbef64d211181ff2f',
//       },
//     },
//   ],
//   'components': [
//     {
//       'id': 'd957b27f3ecd42b1bc4739b0644a33a6',
//       'item': {
//         'id': '1c49d1bbf82e4f3c8c1af49a72fcf690',
//       },
//       'dataType': 'SpriteComponent',
//       'options': {
//         'startColor': [
//           1,
//           1,
//           1,
//           1,
//         ],
//       },
//       'renderer': {
//         'renderMode': 1,
//         'texture': {
//           'id': '666b81ea70444f83b1c35af058a17253',
//         },
//         'maskMode': 0,
//       },
//       'splits': [
//         [
//           0,
//           0,
//           0.826171875,
//           0.791015625,
//           0,
//         ],
//       ],
//     },
//     {
//       'id': 'babed843b48341cda5940530fdd5db4a',
//       'item': {
//         'id': '1c723e7e62aa48aeb8422c90d04983fd',
//       },
//       'dataType': 'SpriteComponent',
//       'options': {
//         'startColor': [
//           0.9647058823529412,
//           0.4235294117647059,
//           0.4823529411764706,
//           0,
//         ],
//       },
//       'renderer': {
//         'renderMode': 1,
//         'texture': {
//           'id': '88640acdc81d459b8c874cd13d1cbff1',
//         },
//         'maskMode': 0,
//       },
//       'splits': [
//         [
//           0,
//           0,
//           0.65625,
//           0.58984375,
//           0,
//         ],
//       ],
//     },
//   ],
//   'geometries': [],
//   'materials': [],
//   'items': [
//     {
//       'id': '1c49d1bbf82e4f3c8c1af49a72fcf690',
//       'name': '圈',
//       'duration': 10,
//       'type': '1',
//       'visible': true,
//       'endBehavior': 5,
//       'delay': 0,
//       'renderLevel': 'B+',
//       'components': [
//         {
//           'id': 'd957b27f3ecd42b1bc4739b0644a33a6',
//         },
//       ],
//       'transform': {
//         'position': {
//           'x': 0,
//           'y': 0,
//           'z': 0,
//         },
//         'eulerHint': {
//           'x': 0,
//           'y': 0,
//           'z': 0,
//         },
//         'anchor': {
//           'x': 0,
//           'y': 0,
//         },
//         'size': {
//           'x': 5,
//           'y': 5,
//         },
//         'scale': {
//           'x': 1,
//           'y': 1,
//           'z': 1,
//         },
//       },
//       'dataType': 'VFXItemData',
//     },
//     {
//       'id': '1c723e7e62aa48aeb8422c90d04983fd',
//       'name': '框',
//       'duration': 10,
//       'type': '1',
//       'visible': true,
//       'endBehavior': 5,
//       'delay': 0,
//       'renderLevel': 'B+',
//       'components': [
//         {
//           'id': 'babed843b48341cda5940530fdd5db4a',
//         },
//       ],
//       'transform': {
//         'position': {
//           'x': 0,
//           'y': 3,
//           'z': 0,
//         },
//         'eulerHint': {
//           'x': 0,
//           'y': 0,
//           'z': 0,
//         },
//         'anchor': {
//           'x': 0,
//           'y': 0,
//         },
//         'size': {
//           'x': 2,
//           'y': 2,
//         },
//         'scale': {
//           'x': 1,
//           'y': 1,
//           'z': 1,
//         },
//       },
//       'dataType': 'VFXItemData',
//     },
//   ],
//   'shaders': [],
//   'bins': [],
//   'textures': [
//     {
//       'id': '666b81ea70444f83b1c35af058a17253',
//       'source': {
//         'id': '73d412e5664b44d1b3ddeb736bf993ec',
//       },
//       'flipY': true,
//     },
//     {
//       'id': '88640acdc81d459b8c874cd13d1cbff1',
//       'source': {
//         'id': '9059c018cb874abe816e72443e179193',
//       },
//       'flipY': true,
//     },
//   ],
//   'animations': [],
//   'miscs': [
//     {
//       'id': '47c65029bddb4d6cbef64d211181ff2f',
//       'dataType': 'TimelineAsset',
//       'tracks': [
//         {
//           'id': '1fafcb887c4f40308ed386e55ef2be28',
//         },
//         {
//           'id': '4eb44be4234a4e6793b4181c4bc8fb6c',
//         },
//       ],
//     },
//     {
//       'id': 'fd5f14685ba545fc926885ae4db9c8c7',
//       'dataType': 'ActivationPlayableAsset',
//     },
//     {
//       'id': '360e5213933b431c88ccd9c09f1019bd',
//       'dataType': 'TransformPlayableAsset',
//       'positionOverLifetime': {},
//     },
//     {
//       'id': 'a3ea80c103b5458290093db60d1c0f82',
//       'dataType': 'SpriteColorPlayableAsset',
//       'startColor': [
//         1,
//         1,
//         1,
//         1,
//       ],
//     },
//     {
//       'id': '1e9d54820c2d4797bb368d206289261e',
//       'dataType': 'ActivationTrack',
//       'children': [],
//       'clips': [
//         {
//           'start': 0,
//           'duration': 10,
//           'endBehavior': 5,
//           'asset': {
//             'id': 'fd5f14685ba545fc926885ae4db9c8c7',
//           },
//         },
//       ],
//     },
//     {
//       'id': '698e4b7c7f2841b4b8d6ac12ff90b16a',
//       'dataType': 'TransformTrack',
//       'children': [],
//       'clips': [
//         {
//           'start': 0,
//           'duration': 10,
//           'endBehavior': 5,
//           'asset': {
//             'id': '360e5213933b431c88ccd9c09f1019bd',
//           },
//         },
//       ],
//     },
//     {
//       'id': '6f97dd80896b441bb6a722b654f1fad9',
//       'dataType': 'SpriteColorTrack',
//       'children': [],
//       'clips': [
//         {
//           'start': 0,
//           'duration': 10,
//           'endBehavior': 5,
//           'asset': {
//             'id': 'a3ea80c103b5458290093db60d1c0f82',
//           },
//         },
//       ],
//     },
//     {
//       'id': '1fafcb887c4f40308ed386e55ef2be28',
//       'dataType': 'ObjectBindingTrack',
//       'children': [
//         {
//           'id': '1e9d54820c2d4797bb368d206289261e',
//         },
//         {
//           'id': '698e4b7c7f2841b4b8d6ac12ff90b16a',
//         },
//         {
//           'id': '6f97dd80896b441bb6a722b654f1fad9',
//         },
//       ],
//       'clips': [],
//     },
//     {
//       'id': '4e95adb154304faaa0f1a19788fec89c',
//       'dataType': 'ActivationPlayableAsset',
//     },
//     {
//       'id': 'd308f8f6582648e397e7fbcb60fe0ea0',
//       'dataType': 'TransformPlayableAsset',
//       'positionOverLifetime': {},
//     },
//     {
//       'id': '7332922404d0495f9ef94d85a16b6808',
//       'dataType': 'SpriteColorPlayableAsset',
//       'startColor': [
//         0.9647058823529412,
//         0.4235294117647059,
//         0.4823529411764706,
//         1,
//       ],
//     },
//     {
//       'id': '1dbb0292ef904d55aa93f708384a25be',
//       'dataType': 'ActivationTrack',
//       'children': [],
//       'clips': [
//         {
//           'start': 0,
//           'duration': 10,
//           'endBehavior': 5,
//           'asset': {
//             'id': '4e95adb154304faaa0f1a19788fec89c',
//           },
//         },
//       ],
//     },
//     {
//       'id': '1403efd6232448a8a1fad5970b8f07ef',
//       'dataType': 'TransformTrack',
//       'children': [],
//       'clips': [
//         {
//           'start': 0,
//           'duration': 10,
//           'endBehavior': 5,
//           'asset': {
//             'id': 'd308f8f6582648e397e7fbcb60fe0ea0',
//           },
//         },
//       ],
//     },
//     {
//       'id': '844f6c12a55241f3946b263a469ee027',
//       'dataType': 'SpriteColorTrack',
//       'children': [],
//       'clips': [
//         {
//           'start': 0,
//           'duration': 10,
//           'endBehavior': 5,
//           'asset': {
//             'id': '7332922404d0495f9ef94d85a16b6808',
//           },
//         },
//       ],
//     },
//     {
//       'id': '4eb44be4234a4e6793b4181c4bc8fb6c',
//       'dataType': 'ObjectBindingTrack',
//       'children': [
//         {
//           'id': '1dbb0292ef904d55aa93f708384a25be',
//         },
//         {
//           'id': '1403efd6232448a8a1fad5970b8f07ef',
//         },
//         {
//           'id': '844f6c12a55241f3946b263a469ee027',
//         },
//       ],
//       'clips': [],
//     },
//   ],
//   'compositionId': '37',
// };
json = {
  'playerVersion': {
    'web': '2.0.6',
    'native': '0.0.1.202311221223',
  },
  'images': [
    {
      'url': 'https://mdn.alipayobjects.com/mars/afts/img/A*8aHdS6YFL-oAAAAAAAAAAAAADlB4AQ/original',
      'webp': 'https://mdn.alipayobjects.com/mars/afts/img/A*qTk9QpmJdHAAAAAAAAAAAAAADlB4AQ/original',
      'id': 'f05bb71f32fc41b2a92f658cbc2d21c1',
      'renderLevel': 'B+',
    },
    {
      'url': 'https://mdn.alipayobjects.com/mars/afts/img/A*DdiUTJ8Zy48AAAAAAAAAAAAADlB4AQ/original',
      'webp': 'https://mdn.alipayobjects.com/mars/afts/img/A*TdeYSowzdZkAAAAAAAAAAAAADlB4AQ/original',
      'id': 'b89023a5b61d40dc96b7437caf37bdfe',
      'renderLevel': 'B+',
    },
  ],
  'fonts': [],
  'version': '3.0',
  'shapes': [],
  'plugins': [],
  'type': 'ge',
  'compositions': [
    {
      'id': '37',
      'name': '按钮 (1)',
      'duration': 6.033333333333333,
      'startTime': 0,
      'endBehavior': 2,
      'previewSize': [
        750,
        1624,
      ],
      'items': [
        {
          'id': '1c723e7e62aa48aeb8422c90d04983fd',
        },
        {
          'id': '1c49d1bbf82e4f3c8c1af49a72fcf690',
        },
      ],
      'camera': {
        'fov': 60,
        'far': 20,
        'near': 0.1,
        'clipMode': 1,
        'position': [
          0,
          0,
          8,
        ],
        'rotation': [
          0,
          0,
          0,
        ],
      },
      'sceneBindings': [
        {
          'key': {
            'id': 'd7324e3204ba4ab1a85548bbdd5e030f',
          },
          'value': {
            'id': '1c723e7e62aa48aeb8422c90d04983fd',
          },
        },
        {
          'key': {
            'id': 'c2542549075e43ce89d9f4f0f96887ce',
          },
          'value': {
            'id': '1c49d1bbf82e4f3c8c1af49a72fcf690',
          },
        },
      ],
      'timelineAsset': {
        'id': '25dfe3c2b4fb47a8a9283e70e07a3399',
      },
    },
  ],
  'components': [
    {
      'id': 'e3ba236674df408993f04b62f8e7a462',
      'item': {
        'id': '1c723e7e62aa48aeb8422c90d04983fd',
      },
      'dataType': 'SpriteComponent',
      'options': {
        'startColor': [
          1,
          1,
          1,
          1,
        ],
      },
      'renderer': {
        'renderMode': 1,
        'texture': {
          'id': '4bfae6053b5d4ad399577dbfcbfde684',
        },
        'maskMode': 1,
      },
      'splits': [
        [
          0,
          0,
          0.65625,
          0.58984375,
          0,
        ],
      ],
    },
    {
      'id': 'f1dda1b00dd6424db3dd0905aca41194',
      'item': {
        'id': '1c49d1bbf82e4f3c8c1af49a72fcf690',
      },
      'dataType': 'SpriteComponent',
      'options': {
        'startColor': [
          1,
          1,
          1,
          1,
        ],
      },
      'renderer': {
        'renderMode': 1,
        'texture': {
          'id': 'aefdfd0ec4e9452099a311ee00db7e3e',
        },
        'maskMode': 2,
      },
      'splits': [
        [
          0,
          0,
          0.826171875,
          0.791015625,
          0,
        ],
      ],
    },
  ],
  'geometries': [],
  'materials': [],
  'items': [
    {
      'id': '1c723e7e62aa48aeb8422c90d04983fd',
      'name': '框',
      'duration': 10,
      'type': '1',
      'visible': true,
      'endBehavior': 5,
      'delay': 0,
      'renderLevel': 'B+',
      'components': [
        {
          'id': 'e3ba236674df408993f04b62f8e7a462',
        },
      ],
      'transform': {
        'position': {
          'x': 0,
          'y': 3,
          'z': 0,
        },
        'eulerHint': {
          'x': 0,
          'y': 0,
          'z': 0,
        },
        'anchor': {
          'x': 0,
          'y': 0,
        },
        'size': {
          'x': 2.4522,
          'y': 2.4522,
        },
        'scale': {
          'x': 1,
          'y': 1,
          'z': 1,
        },
      },
      'dataType': 'VFXItemData',
    },
    {
      'id': '1c49d1bbf82e4f3c8c1af49a72fcf690',
      'name': '圈',
      'duration': 10,
      'type': '1',
      'visible': true,
      'endBehavior': 5,
      'delay': 0,
      'renderLevel': 'B+',
      'components': [
        {
          'id': 'f1dda1b00dd6424db3dd0905aca41194',
        },
      ],
      'transform': {
        'position': {
          'x': 0,
          'y': 0,
          'z': 0,
        },
        'eulerHint': {
          'x': 0,
          'y': 0,
          'z': 0,
        },
        'anchor': {
          'x': 0,
          'y': 0,
        },
        'size': {
          'x': 6.9982,
          'y': 6.9982,
        },
        'scale': {
          'x': 1,
          'y': 1,
          'z': 1,
        },
      },
      'dataType': 'VFXItemData',
    },
  ],
  'shaders': [],
  'bins': [],
  'textures': [
    {
      'id': '4bfae6053b5d4ad399577dbfcbfde684',
      'source': {
        'id': 'f05bb71f32fc41b2a92f658cbc2d21c1',
      },
      'flipY': true,
    },
    {
      'id': 'aefdfd0ec4e9452099a311ee00db7e3e',
      'source': {
        'id': 'b89023a5b61d40dc96b7437caf37bdfe',
      },
      'flipY': true,
    },
  ],
  'animations': [],
  'miscs': [
    {
      'id': '25dfe3c2b4fb47a8a9283e70e07a3399',
      'dataType': 'TimelineAsset',
      'tracks': [
        {
          'id': 'd7324e3204ba4ab1a85548bbdd5e030f',
        },
        {
          'id': 'c2542549075e43ce89d9f4f0f96887ce',
        },
      ],
    },
    {
      'id': '0457152d014144e2bba3b5d661de03ff',
      'dataType': 'ActivationPlayableAsset',
    },
    {
      'id': '5804c57dd0b248059c01c0e284fee8eb',
      'dataType': 'TransformPlayableAsset',
      'positionOverLifetime': {},
    },
    {
      'id': 'b75c8a5432544f0bb227dfce8cdede25',
      'dataType': 'SpriteColorPlayableAsset',
      'startColor': [
        1,
        1,
        1,
        1,
      ],
    },
    {
      'id': 'a0d71516ab264ddea672421339f23fb4',
      'dataType': 'ActivationTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 10,
          'endBehavior': 5,
          'asset': {
            'id': '0457152d014144e2bba3b5d661de03ff',
          },
        },
      ],
    },
    {
      'id': 'e0dae1d8974c48ac8ef68fcc4683c545',
      'dataType': 'TransformTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 10,
          'endBehavior': 5,
          'asset': {
            'id': '5804c57dd0b248059c01c0e284fee8eb',
          },
        },
      ],
    },
    {
      'id': 'f71460352ec7475aa631f8ab87093a4d',
      'dataType': 'SpriteColorTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 10,
          'endBehavior': 5,
          'asset': {
            'id': 'b75c8a5432544f0bb227dfce8cdede25',
          },
        },
      ],
    },
    {
      'id': 'd7324e3204ba4ab1a85548bbdd5e030f',
      'dataType': 'ObjectBindingTrack',
      'children': [
        {
          'id': 'a0d71516ab264ddea672421339f23fb4',
        },
        {
          'id': 'e0dae1d8974c48ac8ef68fcc4683c545',
        },
        {
          'id': 'f71460352ec7475aa631f8ab87093a4d',
        },
      ],
      'clips': [],
    },
    {
      'id': '5bee252f77264c4f80b2710dc1899115',
      'dataType': 'ActivationPlayableAsset',
    },
    {
      'id': 'abdc8c3a73e047ee9744e0f86da46376',
      'dataType': 'TransformPlayableAsset',
      'positionOverLifetime': {},
    },
    {
      'id': '0c1d2796fbcd44e8b60971ec878945e3',
      'dataType': 'SpriteColorPlayableAsset',
      'startColor': [
        1,
        1,
        1,
        1,
      ],
    },
    {
      'id': 'a14bc88c7f1940efafd9084fde7cfe04',
      'dataType': 'ActivationTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 10,
          'endBehavior': 5,
          'asset': {
            'id': '5bee252f77264c4f80b2710dc1899115',
          },
        },
      ],
    },
    {
      'id': 'fad38ec9a07d440496c70e18d40de518',
      'dataType': 'TransformTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 10,
          'endBehavior': 5,
          'asset': {
            'id': 'abdc8c3a73e047ee9744e0f86da46376',
          },
        },
      ],
    },
    {
      'id': '9e26e7e7ecbe454fa5d8c2a84aa04eac',
      'dataType': 'SpriteColorTrack',
      'children': [],
      'clips': [
        {
          'start': 0,
          'duration': 10,
          'endBehavior': 5,
          'asset': {
            'id': '0c1d2796fbcd44e8b60971ec878945e3',
          },
        },
      ],
    },
    {
      'id': 'c2542549075e43ce89d9f4f0f96887ce',
      'dataType': 'ObjectBindingTrack',
      'children': [
        {
          'id': 'a14bc88c7f1940efafd9084fde7cfe04',
        },
        {
          'id': 'fad38ec9a07d440496c70e18d40de518',
        },
        {
          'id': '9e26e7e7ecbe454fa5d8c2a84aa04eac',
        },
      ],
      'clips': [],
    },
  ],
  'compositionId': '37',
};
const container = document.getElementById('J-container');

(async () => {
  try {
    const player = new Player({
      container,
    });

    await player.loadScene(json);
  } catch (e) {
    console.error('biz', e);
  }
})();
