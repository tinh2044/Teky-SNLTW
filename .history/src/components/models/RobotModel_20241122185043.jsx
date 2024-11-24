/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { Canvas } from '@react-three/fiber'
import {
    ContactShadows,
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, } from "@react-three/fiber";
import { ThreeElement } from "three-elements"

export default function Robot(props) {
    const { nodes, materials } = useGLTF('/models/Warrior_Robot_2.glb')
    return (
        // <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_0.geometry}
            material={nodes.mesh_0.material}
            scale={[2, 2, 2]}
        />
        // </group>
    )
}

export function RobotCanvas() {
    return (
        <div className="h-[100vh]">
            <Canvas
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <color attach="background" args={["#eee"]} />
                <Environment preset="studio" />
                <PerspectiveCamera makeDefault position={[2, 3.9, 4.1]} />
                <OrbitControls />
                {/* <Slippers position={[0, 0.1, 0]} /> */}
                <Robot />
                <ContactShadows />
            </Canvas>
        </div>
    );
};



useGLTF.preload('/models/Warrior_Robot_2.glb')
