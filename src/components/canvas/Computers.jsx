import { Suspense, useEffect, useState } from "react";
// empty canvas allowing us to place something on it
import { Canvas } from "@react-three/fiber";
// adding controls that help us use the 3D tooling
// use GLTF allows us to import 3D models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  // instantiating the gltf file
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // we use a mesh when implementing 3D models
  return (
    <mesh>
      {/* the light allows us to see */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* loader from react while scene is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* add the scene control  */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
