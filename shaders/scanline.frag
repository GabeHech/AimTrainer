#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_texture;
uniform float u_time;
varying vec2 v_texCoords;

void main() {
    vec4 color = texture2D(u_texture, v_texCoords);

    float scanline = sin(v_texCoords.y * 800.0 + u_time * 5.0) * 0.04;

    color.rgb -= scanline;

    gl_FragColor = color;
}
