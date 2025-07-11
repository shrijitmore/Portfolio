import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'

const PURPLE = "#A020F0"; // Example purple shade
const ORIGINAL = "#00674b"; // Your original color

const HeroLights = () => {
  const [isPurple, setIsPurple] = useState(false);
  const rectLightRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPurple(prev => !prev);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (rectLightRef.current) {
      rectLightRef.current.lookAt(0, 0, 0)
    }
  }, [])

  return (
    <>
      <spotLight position={[-2, 5, 6]} angle={0.12} intensity={100} penumbra={.2} color={isPurple ? '#fff' : "#FFB823"}/>
      <spotLight position={[2, 6, 5]} angle={0.35} intensity={40} penumbra={.5} color={isPurple ? PURPLE : ORIGINAL}/>
      <spotLight
        position={[-2.5, 0.5, 2]}
        angle={0.49}
        intensity={60}
        penumbra={.5}
        color={isPurple ? PURPLE : ORIGINAL}
      />

      <rectAreaLight
        ref={rectLightRef}
        position={[0, 5, 0]}
        width={5}
        height={5}
        color={isPurple ? PURPLE : ORIGINAL}
        intensity={8}
      />
    </>
  )
}

export default HeroLights