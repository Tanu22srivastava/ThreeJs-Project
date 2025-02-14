import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.9}  
      scale={10}     
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      {/* Main Light Source - Increase intensity for a lighter scene */}
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={1.2}  
        ambient={0.5}    
        position={[50, 50, -50]}
      />
      
      {/* Secondary Light Source */}
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.6} 
        ambient={0.7}   
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop