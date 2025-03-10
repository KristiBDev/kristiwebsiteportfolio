import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ComputerModel } from "./ComputerModel";
import { useRef, useState } from "react";

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
  return <primitive object={scene} scale={0.003} />;
};

// Orbiting 3D Models with Unique Motion
const OrbitingObject = ({ index }) => {
  const objectRef = useRef();
  const [speed] = useState(0.08 + Math.random() * 0.3); // Randomized speed
  const [radius] = useState(1.2 + Math.random() * 1); // Unique orbit radius
  const [offset] = useState(Math.random() * Math.PI * 2); // Random starting position
  const [verticalOffset] = useState(index % 2 === 0 ? 0.3 : -0.3); // Some move higher/lower

  useFrame(({ clock }) => {
    if (objectRef.current) {
      const t = clock.getElapsedTime() * speed + offset;
      
      // Dynamic movement changes over time
      const dynamicRadius = radius + Math.sin(clock.getElapsedTime() * (0.3 + index * 0.1)) * 0.4;
      const verticalMovement = Math.sin(t * (1.5 + index * 0.2)) * (0.5 + verticalOffset);

      objectRef.current.position.set(
        Math.cos(t) * dynamicRadius,
        verticalMovement + 1.5, // Moves models higher
        Math.sin(t) * dynamicRadius
      );

      objectRef.current.rotation.y += 0.005;
      objectRef.current.rotation.z += 0.005;
      objectRef.current.rotation.x += 0.005;
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
    <Canvas camera={{ position: [0, 2, 5], fov: 75 }} style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 5, 5]} intensity={1.2} />

      {/* Computer Model */}
      <ComputerModel scale={10} rotation={[0, 2, 0]} />

      {/* Camera Controls */}
      <OrbitControls enableZoom={true} minDistance={4} maxDistance={10} target={[0, 0, 0]} />
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
