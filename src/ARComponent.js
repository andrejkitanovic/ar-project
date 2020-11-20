import React from "react";


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
