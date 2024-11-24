/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls, Environment, Html } from '@react-three/drei'
function Model({ url }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
}


export function Model(props) {
    const { nodes, materials } = useGLTF('/models/Warrior_Robot_2.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
        </group>
    )
}

useGLTF.preload('/models/Warrior_Robot_2.glb')
