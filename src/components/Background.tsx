import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer;

    const init = () => {
      // Create a scene
      scene = new THREE.Scene();

      // Create a camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Create a renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      const canvasContainer = canvasRef.current;
      canvasContainer.appendChild(renderer.domElement);

      // Handle window resizing
      window.addEventListener('resize', onWindowResize, false);

      // Add wireframed websites
      addWireframedWebsites();
    };

    const addWireframedWebsites = () => {
      // Wireframe material
      const material = new THREE.MeshBasicMaterial({ wireframe: true });

      // Website geometry
      const geometry = new THREE.BoxGeometry(Math.random() * 2, Math.random() * 2, Math.random() * 2);

      // Website 1
      const website1 = new THREE.Mesh(geometry, material);
      website1.position.x = -2;
      scene.add(website1);

      // Website 2
      const website2 = new THREE.Mesh(geometry, material);
      website2.position.x = 0;
      scene.add(website2);

      // Website 3
      const website3 = new THREE.Mesh(geometry, material);
      website3.position.x = 2;
      scene.add(website3);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate websites
      scene.children.forEach((website) => {
        website.rotation.x += 0.01;
        website.rotation.y += 0.01;
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
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div style={{ opacity: 0.9 }} className="fixed top-0 bottom-0 left-0 right-0" ref={canvasRef} id="canvas-container" />;
};

export default ThreeJSAnimation;
