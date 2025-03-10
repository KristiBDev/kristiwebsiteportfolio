import { Canvas } from "@react-three/fiber";
import { MeshDiscardMaterial, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { MeshDistanceMaterial } from "three";
import { ComputerModel } from "./computer/ComputerModel";

const Test3d = () => {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas>
        {/* Essential light to see the object */}
        <ambientLight intensity={0.5} />

        {/* Box */}
        <mesh>
          <ComputerModel/>
          <ambientLight intensity={2}/>
          <directionalLight position={[1,2,3]}/>
          <OrbitControls/>
        </mesh>
      </Canvas>
    </section>
  );
};

export default Test3d;
