/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls, Environment, useGLTF } from '@react-three/drei'

const Robot = React.memo(function Wizard(props) {
    // Use React.memo for performance optimization
    const model = useGLTF("/models/Warrior_Robot_2.glb");
    const { nodes, materials, scene } = model;
    console.log(model)
    const modelRef = useRef();

    useFrame((state) => {
        modelRef.current.position.y =
            -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
    });

    return (
        <>
            <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
                <group>
                    <primitive object={scene} />
                </group>
                <OrbitControls autoRotate />
                <Stats />
            </Canvas>
            {/* <span id="info">The {title} is selected.</span> */}
        </>
    );
});

export default Robot;
useGLTF.preload("/models/Warrior_Robot_2.glb");