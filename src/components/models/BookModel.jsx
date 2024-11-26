/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const BookModel = React.memo(function BookModel(props) {
  const model = useGLTF("/models/book_v2.glb");

  const [hovered, setHovered] = useState(false);  // State để theo dõi hover
  const [clicked, setClicked] = useState(false);  // State để theo dõi click
  const modelRef = useRef();
  const [isInteracting, setIsInteracting] = useState(false);


  const { nodes, materials } = model;

  const handleHover = (event) => {
    setHovered(event.type === 'pointerover');
    setIsInteracting(event.type === 'pointerover');
  };

  // Xoay mô hình khi click
  const handleClick = () => {
    setClicked(!clicked);
    setIsInteracting(true);
  };
  useFrame((state) => {
    if (!isInteracting) {
      modelRef.current.rotation.y += 0.007;
    }
  });
  return (
    <group
      {...props}
      ref={modelRef}
      onPointerOver={handleHover}
      onPointerOut={handleHover}
      onClick={handleClick}
      rotation={[0, clicked ? Math.PI : 0, 0]}
      dispose={null}
      scale={[1, 1, 1]}
      position={[0, 4, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[0, -3.867, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
      />
    </group>
  );
});

export default BookModel;
useGLTF.preload("/models/book_v2.glb");
