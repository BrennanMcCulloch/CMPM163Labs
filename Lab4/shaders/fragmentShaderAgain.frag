uniform sampler2D texture1;
varying vec2 vUv;

void main() {
  float x = mod(vUv[0] * 2.0, 1.0);
  float y = mod(vUv[1] * 2.0, 1.0);

  gl_FragColor = texture2D(texture1, vec2(x, y));
}
