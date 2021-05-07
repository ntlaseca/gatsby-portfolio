import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Model from "./models/model"

import styled from "styled-components"
import { Stage } from "@react-three/drei"

const Container =  styled.div`
  grid-column: span 4;
  position: fixed;
  width: calc(33.333% - 4.8rem);
  height: 60%;
`

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[10, 10, 0]}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color="white"
      />
    </mesh>
  )
}

export default function NewSelfPortrait(props) {
  return (
    <Container>
      <Canvas gl={{ preserveDrawingBuffer: true }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 40 }}>
        <ambientLight intensity={0.25} />
        <Suspense fallback={<Loading />}>
          <Stage>
            <Model />
          </Stage>
        </Suspense>
      </Canvas>
    </Container>
  )
}
