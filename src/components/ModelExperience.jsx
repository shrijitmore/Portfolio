import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { OrbitControls } from '@react-three/drei'
import { Room } from './Room'
import HeroLights from './HeroLights'

function RotatingRoom({ isMobile }) {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    // Smooth oscillating rotation around Y axis
    groupRef.current.rotation.y = -Math.PI / 4 + Math.sin(t) * 0.3
    // Optionally, you can add a subtle X rotation:
    // groupRef.current.rotation.x = 0.2 + Math.sin(t * 0.5) * 0.05
  })

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 0.7 : 1}
      position={[1.2, -3.1, 0]}
      rotation={[0.2, -Math.PI / 4, 0]}
    >
      <Room />
    </group>
  )
}

const ModelExperience = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ maxWidth: 1024 })

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <OrbitControls
        enabled={!isMobile}
        enablePan={false}
        enableZoom={!isMobile && !isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />
      <RotatingRoom isMobile={isMobile} />
    </Canvas>
  )
}

export default ModelExperience