import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { accent } from "constants/theme"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/tlaseca.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Head.geometry} material={nodes.Head.material}>
        <meshStandardMaterial color={accent} />
      </mesh>
      <mesh
        geometry={nodes.Hair.geometry}
        material={nodes.Hair.material}
        position={[-0.18, 2.76, -1.78]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={accent} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/tlaseca.glb")
