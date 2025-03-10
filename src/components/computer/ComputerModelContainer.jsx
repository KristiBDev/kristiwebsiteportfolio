import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ComputerModel } from "./ComputerModel";

const ComputerModelContainer = () => {
  return (
    <section style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 1, 4], fov: 50 }} // Adjusted to be front-facing
      >
        {/* Lighting */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 20, 2]} intensity={1} />

        {/* Computer Model - Adjusted Rotation for Front-Facing */}
        <ComputerModel scale={8} rotation={[0, 2, 0]} />

        {/* Camera Controls */}
        <OrbitControls 
          enableZoom={true} // Allow zooming
          minDistance={5} // Prevent too much zoom-in
          maxDistance={12} // Prevent zooming out too much
          //enableRotate={false} // Lock rotation so it always faces front
          target={[0, 0, 0]} // Keep model centered
        />
      </Canvas>
    </section>
  );
};

export default ComputerModelContainer;
