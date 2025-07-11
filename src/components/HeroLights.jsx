import React from 'react'

const HeroLights = () => {
  return (
    <>
    <spotLight position={[2, 5, 6]} angle={0.12} intensity={100} penumbra={.2} color={"#ff0000"}/>
    <spotLight position={[4, 5, 4]} angle={0.35} intensity={40} penumbra={.5} color={"#D0F0C0"}/>
    <spotLight position={[-3, 5, 4]} angle={0.49} intensity={60} penumbra={.5} color={"#4FFFB0"}/>
    </>
  )
}

export default HeroLights