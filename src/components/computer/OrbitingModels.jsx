import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";

// Paths to your 3D models (stored in /public/models)
const models = [
  "/threejs.glb",
  "/python.glb",
  "/react_logo.glb",
  "/html_logo.glb",
  "/github_logo.glb",
  "/js_logo.glb"
];


// Component to Load and Display a 3D Model
const ModelComponent = ({ modelPath, scale }) => {
  const { scene } = useGLTF(modelPath);
  let modelScale = 0.009; // default scale
  
  // Specific model scaling
  if (modelPath.includes('github')) {
    modelScale = 0.09;
  } else if (modelPath.includes('js_logo')) {
    modelScale = 0.8; // increased JS scale (0.006 * 5)
  } else if (modelPath.includes('html_logo')) {
    modelScale = 0.0009;
  } else if (modelPath.includes('react_logo')) {
    modelScale = 0.05;
  } else if (modelPath.includes('threejs')) {
    modelScale = 0.003;
  } 

  return (
    <Suspense fallback={null}>
      <primitive object={scene} scale={modelScale} />
    </Suspense>
  );
};

// Orbiting 3D Models with Unique Motion
const OrbitingObject = ({ index, scale = 1 }) => {
  const objectRef = useRef();

  const speed = 0.7;
  // Adjust radius based on model type
  const isJs = models[index].includes('js_logo');
  const isVertical = index === 2 || index === 4; // 2 logos will orbit vertically
  const baseRadius = isJs ? 0.8 : 1.2;
  const radius = (baseRadius + (index % 3) * 0.6) * scale;
  
  const offset = (index * Math.PI) / 3;
  const verticalOffset = index % 2 === 0 ? 0.2 : -0.2;

  useFrame(({ clock }) => {
    if (objectRef.current) {
      const t = clock.getElapsedTime() * speed + offset;
      
      // Vertical orbit for selected models
      if (isVertical) {
        const x = 2 + Math.sin(t * 0.5) * radius; 
        const z = 3.5 + Math.cos(t * 0.5) * (radius * 0.3); 
        const y = (1.2 + Math.sin(t * 1.5) * 0.8 + verticalOffset) * scale;
        objectRef.current.position.set(x, y, z);
      } else {
        // Regular horizontal orbit for other models
        const x = 2 + Math.cos(t) * radius;
        const z = 3.5 + Math.sin(t) * (radius * 0.3); 
        const baseHeight = isJs ? 0.8 : 1.2;
        const y = (baseHeight + Math.sin(t * 1.2) * 0.2 + verticalOffset) * scale;
        objectRef.current.position.set(x, y, z);
      }
      
      objectRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={objectRef}>
      <ModelComponent modelPath={models[index]} scale={0.6 * scale} />
    </group>
  );
};

// Canvas for Orbiting 3D Logos
const OrbitingModels = ({ scale = 1, style = {} }) => {
  return (
    <Canvas 
      camera={{ position: [0, 2, 8], fov: 75 }}
      style={{ 
        position: "absolute", 
        top: -50, 
        left: 150,
        zIndex: 3, // Higher than computer model
        pointerEvents: "none", // Allow interaction with computer model
        ...style 
      }}
    >
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.7} />
      
      {/* Main directional lights */}
      <directionalLight position={[5, 10, 8]} intensity={5} />
      <directionalLight position={[-5, 10, 8]} intensity={0.8} />
      
      {/* Fill lights for sides and front */}
      <pointLight position={[-3, 0, 4]} intensity={4} />
      <pointLight position={[3, 0, 4]} intensity={4} />
      <pointLight position={[0, -3, 4]} intensity={0.3} />
      
      {/* Front rim lighting */}
      <spotLight 
        position={[0, 5, 10]} 
        angle={0.5} 
        intensity={6} 
        penumbra={1}
        distance={20}
      />
      
      {/* Bottom fill light */}
      <pointLight position={[0, -2, 4]} intensity={0.3} />

      {[...Array(6)].map((_, i) => (
        <OrbitingObject key={i} index={i} scale={scale} />
      ))}
    </Canvas>
  );
};

export default OrbitingModels; 