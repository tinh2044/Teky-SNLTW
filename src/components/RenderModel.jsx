"use client";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useState, Suspense } from "react";
import { OrbitControls, Environment, } from "@react-three/drei";



const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className="absolute -z-10 hidden md:block"
      style={{ height: '100vh', cursor: "pointer" }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} intensity={1} castShadow />

      <Suspense fallback={null}>
        {children}
      </Suspense>

      {/* <OrbitControls /> */}
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default RenderModel;
