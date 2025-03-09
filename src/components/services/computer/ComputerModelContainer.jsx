import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ComputerModel } from "./ComputerModel";

const ComputerModelContainer = () => {
  return (
    <section style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 0, -1], fov: 50 }} // Closer camera
      >
        {/* Lighting */}
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        {/* Computer Model */}
        <ComputerModel scale={10} /> {/* Adjust scale if needed */}

        {/* Camera Controls */}
        <OrbitControls 
          enableZoom={true} // Allow zooming
          minDistance={10} // Prevent too much zoom-in
          maxDistance={15} // Prevent zooming out too much
          target={[0, 0, 0]} // Center model
        />
      </Canvas>
    </section>
  );
};

export default ComputerModelContainer;
