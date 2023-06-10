import { Suspense, useEffect, useState } from "react";
// empty canvas allowing us to place something on it
import { Canvas } from "@react-three/fiber";
// adding controls that help us use the 3D tooling
// use GLTF allows us to import 3D models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  return <div>Computers</div>;
};

export default Computers;
