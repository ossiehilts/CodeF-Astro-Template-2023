import * as THREE from "three";

let camera, scene, renderer;

export function initAnimation() {
  // Create a scene
  scene = new THREE.Scene();

  // Create a camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create a renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const canvasContainer = document.getElementById("canvas-container");
  canvasContainer.appendChild(renderer.domElement);

  // Handle window resizing
  window.addEventListener("resize", onWindowResize, false);

  // Add wireframed websites
  addWireframedWebsites();
}

function addWireframedWebsites() {
  // Wireframe material
  const material = new THREE.MeshBasicMaterial({ wireframe: true });

  // Website geometry
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  // Website 1
  const website1 = new THREE.Mesh(geometry, material);
  website1.position.x = -2;
  scene.add(website1);

  // Website 2
  const website2 = new THREE.Mesh(geometry, material);
  website2.position.x = 0;
  scene.add(website2);

