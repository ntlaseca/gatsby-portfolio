import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Stage, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"
import Model from "./models/model"

import { Container } from "./self-portrait.css"
import { accent } from "constants/theme"

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color={accent}
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

const variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
}

export default function SelfPortrait(props) {
  const ref = useRef()

  return (
    <Container as={motion.div} initial="hidden" animate="visible" variants={variants}>
      <Canvas 
        gl={{ preserveDrawingBuffer: true }} 
        dpr={[1, 1.5]} 
        camera={{ position: [0, 0, 10], fov: 36 }}
      >
        <ambientLight intensity={0.25} />
        <Suspense fallback={<Loading />}>
          <Stage
            adjustCamera
            controls={ref}
            contactShadow={false}
            shadows={false}
            intensity={0.75}
            preset={"rembrandt"}
          >
            <Model {...props} />
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
