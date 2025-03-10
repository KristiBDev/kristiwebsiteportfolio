import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ComputerModel } from "./ComputerModel";
import { useRef, useState } from "react";
import { Suspense } from "react";



// Paths to your 3D models (stored in /public/models)
const models = [
  "/threejs.glb",
  "/python.glb",
  "/html_logo.glb",
  "/html_logo.glb"
];
// Component to Load and Display a 3D Model


const ModelComponent = ({ modelPath, scale }) => {
  const { scene } = useGLTF(modelPath);
  return (
    <Suspense fallback={null}> {/* Prevents rendering before model loads */}
      <primitive object={scene} scale={0.003} />
    </Suspense>
  );
};

// Orbiting 3D Models with Unique Motion
const OrbitingObject = ({ index }) => {
  const objectRef = useRef();

  // Define a fixed speed for all objects
  const speed = 0.2; // Constant speed
  const radius = 1.5 + index * 0.5; // Evenly spaced orbits
  const offset = (index * Math.PI) / 2; // Spread out initial positions
  const verticalOffset = index % 2 === 0 ? 0.3 : -0.3; // Some go slightly higher/lower

  useFrame(({ clock }) => {
    if (objectRef.current) {
      const t = clock.getElapsedTime() * speed + offset;

      // Circular motion around the center (X-Z plane)
      const x = Math.cos(t) * radius;
      const z = Math.sin(t) * radius;

      // Smooth up/down motion
      const y = 1.5 + Math.sin(t * 1.2) * 0.3 + verticalOffset;

      objectRef.current.position.set(x, y, z);
      objectRef.current.rotation.y += 0.01; // Slight rotation for natural look
    }
  });

  return (
    <group ref={objectRef}>
      <ModelComponent modelPath={models[index]} scale={0.6} />
    </group>
  );
};


// Canvas for the Computer Model
const ComputerModelCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }} style={{ position: "absolute", top: 250, left: 200, zIndex: 2 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 5, 5]} intensity={1.2} />

      {/* Computer Model */}
      <ComputerModel scale={10} rotation={[0, 2, 0]} />

      {/* Camera Controls */}
      <OrbitControls enableZoom={false} minDistance={4} maxDistance={10} target={[0, 0, 0]} />
    </Canvas>
  );
};

// Canvas for Orbiting 3D Logos
const OrbitingObjectsCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 75 }} style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
      {/* 🌟 Ambient Lighting - Softens shadows */}
      <ambientLight intensity={0.5} />

      {/* 💡 Directional Light - Adds shadows and depth */}
      <directionalLight position={[5, 10, 5]} intensity={1.5} />

      {/* 🔆 Point Lights - Adds localized lighting to orbiting models */}
      <pointLight position={[-5, 5, 5]} intensity={1} />
      <pointLight position={[5, -5, 5]} intensity={1} />
      
      {/* 🌞 Optional Spotlight (Use if you want a strong highlight on models) */}
      <spotLight position={[0, 10, 10]} angle={0.3} intensity={1.2} penumbra={0.5} />

      {/* Orbiting 3D Models */}
      {[...Array(4)].map((_, i) => (
        <OrbitingObject key={i} index={i} />
      ))}
    </Canvas>
  );
};

// Main Component
const ComputerModelContainer = () => {
  return (
    <section style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <OrbitingObjectsCanvas />
      <ComputerModelCanvas />
    </section>
  );
};


export default ComputerModelContainer;
