/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { Canvas } from '@react-three/fiber'
import {
    ContactShadows,
    Environment,
    PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls } from 'three-stdlib'
extend({ OrbitControls, TransformControls })
export default function Robot(props) {
    const { nodes, materials } = useGLTF('/models/Warrior_Robot_2.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                {...props}
                castShadow
                receiveShadow
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                scale={[2, 2, 2]}
            />
        </group>
    )
}
function Model(props) {
    const { scene } = useGLTF("/models/Warrior_Robot_2.glb");
    return <primitive object={scene} {...props} />
}

export function RobotCanvas() {
    return (
        <>
            <color attach="background" args={["#101010"]} />
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={"sunset"}>
                    <Model scale={0.01} />
                </Stage>
            </PresentationControls>
        </>
    );
};



useGLTF.preload('/models/Warrior_Robot_2.glb')
