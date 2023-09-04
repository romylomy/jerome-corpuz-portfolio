
import React from 'react'
import Lottie from'lottie-react'; 
import SynergyAnimation from '@/public/SynergyAnimation.json';


export default function Animation() {
  return (
  
    <Lottie loop={true} animationData={SynergyAnimation}></Lottie>

        
  )
}
