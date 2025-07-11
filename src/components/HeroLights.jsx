import React, { useState, useEffect } from 'react'

const PURPLE = "#A020F0"; // Example purple shade
const ORIGINAL = "#4FFFB0"; // Your original color

const HeroLights = () => {
  const [isPurple, setIsPurple] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPurple(prev => !prev);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <spotLight position={[-2, 5, 6]} angle={0.12} intensity={100} penumbra={.2} color={"#FFB823"}/>
      <spotLight position={[2, 6, 5]} angle={0.35} intensity={40} penumbra={.5} color={isPurple ? PURPLE : ORIGINAL}/>
      <spotLight
        position={[-2.5, 0.5, 2]}
        angle={0.49}
        intensity={60}
        penumbra={.5}
        color={isPurple ? PURPLE : ORIGINAL}
      />
    </>
  )
}

export default HeroLights