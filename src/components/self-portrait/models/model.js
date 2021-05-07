import React, { useRef } from "react"
import { extend, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"

extend({ OrbitControls })

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()
  const controls = useRef()
  useFrame((state) => controls.current.update())
  return <OrbitControls ref={controls} args={[camera, domElement]} />
}

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tlaseca.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Head.geometry}
        material={nodes.Head.material}
        position={[0, 0.44, -1.74]}
      />
      <mesh
        geometry={nodes.Hair.geometry}
        material={nodes.Hair.material}
        position={[-0.17, 2.76, -1.77]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload("/tlaseca.glb")
