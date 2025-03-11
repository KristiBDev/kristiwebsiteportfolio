import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ComputerModel } from "./ComputerModel";
import OrbitingModels from "./OrbitingModels";
import { useState, useEffect } from "react";

// Canvas for the Computer Model
const ComputerModelCanvas = ({ scale = 10, cameraPosition = [0, 2, 5], isMobile = false }) => {
  return (
    <Canvas 
      camera={{ position: cameraPosition, fov: 60 }} 
      style={{ 
        position: "absolute", 
        top: isMobile ? 50 : 150,
        left: isMobile ? "50%" : 200,
        transform: isMobile ? "translateX(-50%)" : "none",
        zIndex: 2 
      }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 5, 5]} intensity={1.2} />
      <ComputerModel scale={scale} rotation={[0, 2, 0]} />
      <OrbitControls enableZoom={false} minDistance={4} maxDistance={10} target={[0, 0, 0]} />
    </Canvas>
  );
};

// Main Component with Responsive Design
const ComputerModelContainer = () => {
  const [computerScale, setComputerScale] = useState(10);
  const [orbitingScale, setOrbitingScale] = useState(1);
  const [showOrbiting, setShowOrbiting] = useState(true);
  const [cameraPosition, setCameraPosition] = useState([0, 2, 5]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      
      // Match hero.css media queries
      if (width <= 768) {
        setComputerScale(6);
        setShowOrbiting(false);
        setCameraPosition([0, 2, 8]); // Zoom out more for mobile
      } else if (width <= 1024) {
        setComputerScale(8);
        setShowOrbiting(false);
        setCameraPosition([0, 2, 7]); // Zoom out for tablet
      } else if (width <= 1280) {
        setComputerScale(9);
        setOrbitingScale(0.8);
        setShowOrbiting(true);
        setCameraPosition([0, 2, 6]); // Slightly zoom out for smaller desktop
      } else if (width <= 1536) {
        setComputerScale(10);
        setOrbitingScale(0.9);
        setShowOrbiting(true);
        setCameraPosition([0, 2, 5]); // Default camera position
      } else {
        setComputerScale(10);
        setOrbitingScale(1);
        setShowOrbiting(true);
        setCameraPosition([0, 2, 5]); // Default camera position
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{ 
      width: "100vw", 
      height: "100vh", 
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: isMobile ? "flex-start" : "center"
    }}>
      {showOrbiting && <OrbitingModels scale={orbitingScale} />}
      <ComputerModelCanvas 
        scale={computerScale} 
        cameraPosition={cameraPosition} 
        isMobile={isMobile}
      />
    </section>
  );
};

export default ComputerModelContainer;
