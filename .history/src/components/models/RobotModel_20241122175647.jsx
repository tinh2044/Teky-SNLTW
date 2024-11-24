/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Robot = React.memo(function Wizard(props) {
    // Use React.memo for performance optimization
    const model = useGLTF("/models/Warrior_Robot_2.glb");
    const { nodes, materials } = model;
    console.log(model)
    const modelRef = useRef();

    useFrame((state) => {
        modelRef.current.position.y =
            -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
    });

    return (
        <group
            {...props}
            dispose={null}
            ref={modelRef}
            position={[0, -1.5, 0]}
            scale={[0.06, 0.06, 0.06]}
            rotation={[0.25, 0, 0]}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Evil_Hathattty_mesh_Evil_HatBLN_Hat_0.geometry}
                material={materials.Evil_HatBLN_Hat}
                position={[-1.057, 0, 0]}
                rotation={[0, 0.224, 0]}
                scale={0.832}
            />
        </group>
    );
});

export default Wizard;
useGLTF.preload("/models/Warrior_Robot_2.glb");
