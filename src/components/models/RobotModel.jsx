/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef, useState, Suspense } from "react";
import { useGLTF, OrbitControls, Environment, } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'


const InteractiveModel = ({ modelPath }) => {
    const model = useGLTF("/models/Warrior_Robot_2.glb");

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
            modelRef.current.rotation.y += 0.007; // Xoay mô hình tự động
            modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15; // Di chuyển lên xuống
        }
    });

    return (
        <group

            ref={modelRef}
            onPointerOver={handleHover}
            onPointerOut={handleHover}
            onClick={handleClick}
            rotation={[0, clicked ? Math.PI : 0, 0]}
        >
            <mesh
                position={[0, 1.5, 0]}
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                scale={[1.5, 1.5, 1.5]}
                material-color={hovered ? 'orange' : 'white'}
            />
        </group>
    );
};

const RobotModel = ({ modelPath }) => {
    return (
        <Canvas
            className="w-10 h-10 absolute -z-10"
            style={{ height: '100vh', cursor: "pointer" }}
            camera={{ position: [0, 0, 5], fov: 50 }}
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} intensity={1} castShadow />

            <Suspense fallback={null}>
                <InteractiveModel modelPath={modelPath} />
            </Suspense>

            <OrbitControls />  {/* Cho phép điều khiển mô hình với chuột */}
            <Environment preset="sunset" />  {/* Cung cấp môi trường chiếu sáng */}
        </Canvas>
    );
};

export default RobotModel;
useGLTF.preload('/models/Warrior_Robot_2.glb')
