uniform vec3 colorC;
uniform vec3 colorD;

varying vec3 vUv;

void main() {
  gl_FragColor = vec4(mix(colorC, colorD, vUv.z), 1.0);
}
