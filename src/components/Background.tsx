import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeJSAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer;

    const init = () => {
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
      renderer.setClearColor(0xffffff, 0);
      const canvasContainer = canvasRef.current;
      canvasContainer.appendChild(renderer.domElement);

      // Handle window resizing
      window.addEventListener("resize", onWindowResize, false);

      // Add wireframed websites
      addWireframedWebsites();
    };

    const addWireframedWebsites = () => {
      // Wireframe material
      const material = new THREE.MeshBasicMaterial({ wireframe: true });

      // Website 1
      const website1 = new THREE.Mesh(createGeometry(), material);
      website1.position.x = -2;
      scene.add(website1);

      // Website 2
      const website2 = new THREE.Mesh(createGeometry(), material);
      website2.position.x = 0;
      scene.add(website2);

      // Website 3
      const website3 = new THREE.Mesh(createGeometry(), material);
      website3.position.x = 2;
      scene.add(website3);

      function createGeometry() {
        const width = Math.random() * 2;
        const height = Math.random() * 2;
        const depth = Math.random() * 2;

        const geometry = new THREE.BoxGeometry(width, height, depth);

        return geometry;
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate websites
      scene.children.forEach((website, i) => {
        const rand = ((i + 58 * Math.random()) / 10000) * 2;
        website.rotation.x += rand;
        website.rotation.y += rand;
      });

      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div>
      <div
        style={{ opacity: 1 }}
        className="lg:fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-pink-900 via-gray-900 to-gray-900"
        ref={canvasRef}
        id="canvas-container"
      />
    </div>
  );
};

export default ThreeJSAnimation;
