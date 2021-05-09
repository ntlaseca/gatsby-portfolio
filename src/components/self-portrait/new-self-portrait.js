import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Stage, OrbitControls } from "@react-three/drei"
import Model from "./models/model"

import { Container } from "./new-self-portrait.css"
import { accent } from "constants/theme"

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[10, 10, 0]}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhongMaterial
        attach="material"
        color={accent}
      />
    </mesh>
  )
}

export default function NewSelfPortrait(props) {
  const ref = useRef()

  return (
    <Container>
      <Canvas 
        gl={{ preserveDrawingBuffer: true }} 
        dpr={[1, 1.5]} 
        camera={{ position: [0, 0, 10], fov: 36 }}
      >
        <ambientLight intensity={0.25} />
        <Suspense fallback={<Loading />}>
          <Stage
            controls={ref}
            contactShadow={false}
            shadows={false}
            adjustCamera
            intensity={0.8}
          >
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls
          ref={ref}
          autoRotate={true}
          enableZoom={false}
        />
      </Canvas>
    </Container>
  )
}
