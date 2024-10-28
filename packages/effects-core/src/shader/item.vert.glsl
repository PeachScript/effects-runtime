precision highp float;

attribute vec2 atlasOffset;//x y
attribute vec3 aPos;//x y
attribute vec2 maskAtlasOffset;

varying vec2 vMaskTexCoord;
varying vec2 vTexCoord;
varying vec3 vParams;// texIndex mulAplha
varying vec4 vColor;

uniform vec2 _Size;
uniform vec4 _Color;
uniform vec4 _TexParams;//transparentOcclusion blending renderMode
uniform vec4 _TexOffset;// x y sx sy
uniform vec4 _MaskOffset;
uniform mat4 effects_MatrixVP;
uniform mat4 effects_MatrixInvV;
uniform mat4 effects_ObjectToWorld;


#ifdef ENV_EDITOR
uniform vec4 uEditorTransform;
#endif

void main() {
  vec4 texParams = _TexParams;
  vTexCoord = vec2(atlasOffset.xy * _TexOffset.zw + _TexOffset.xy);
  // 4: 贴图大小 / 2 3：被遮挡元素大小
//  vMaskTexCoord.x = ( maskAtlasOffset.x  - 0.5 ) / 2. * _Size.x + 0.5;
//  vMaskTexCoord.y = ( maskAtlasOffset.y - .5) / 2. * _Size.y + 0.5;
//  vMaskTexCoord = vTexCoord;
  vColor = _Color;
  vParams = vec3(0.0, texParams.y, texParams.x);
  vec4 pos = vec4(aPos.xy * _Size, aPos.z, 1.0);
  vec4 aPos = effects_MatrixVP * effects_ObjectToWorld * pos;
  gl_Position = effects_MatrixVP * effects_ObjectToWorld * pos;
#ifdef ENV_EDITOR
  gl_Position = vec4(gl_Position.xy * uEditorTransform.xy + uEditorTransform.zw * gl_Position.w, gl_Position.zw);
#endif
}
