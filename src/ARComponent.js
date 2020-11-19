import React from "react";
import { OrbitControls, Box } from "drei";
// import { Canvas } from "react-three-fiber";
import { ARCanvas } from "@react-three/xr";


export default function AR() {
  return (
    <ARCanvas>
      {/* Scene lighting */}
      <ambientLight />
      <spotLight />

      {/* Controll camera with mouse */}
      <OrbitControls />

      {/* Some geometry */}
      <Box>
        <meshStandardMaterial color="#e23" />
      </Box>
    </ARCanvas>
  );
}
