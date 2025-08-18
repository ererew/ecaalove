import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

// controls
const controls = new OrbitControls(camera, renderer.domElement);

// texture loader
const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load("images/foto1.jpg");
const texture2 = textureLoader.load("images/foto2.jpg");
const texture3 = textureLoader.load("images/foto3.jpg");

// geometry (3 foto)
const geometry = new THREE.PlaneGeometry(2, 3);

// material pakai texture
const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
const material3 = new THREE.MeshBasicMaterial({ map: texture3 });

// mesh
const mesh1 = new THREE.Mesh(geometry, material1);
const mesh2 = new THREE.Mesh(geometry, material2);
const mesh3 = new THREE.Mesh(geometry, material3);

// posisi
mesh1.position.x = -3;
mesh2.position.x = 0;
mesh3.position.x = 3;

// add ke scene
scene.add(mesh1, mesh2, mesh3);

// animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
