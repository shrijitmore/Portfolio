import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { OrbitControls } from '@react-three/drei'
import { Room } from './Room'
import HeroLights from './HeroLights'

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
        <group
        scale={isMobile ? 0.7 : 1}
        position={[1.2, -3.1, 0]}
        rotation={[0.2, -Math.PI/4, 0]}
        
        >
            <Room />
        </group>
    </Canvas>
  )
}

export default ModelExperience