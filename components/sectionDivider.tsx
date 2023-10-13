"use client"
import React from 'react'
import { motion } from 'framer-motion'
import animationData from '@/app/animationData.json' 
import Lottie from "lottie-react"

export default function SectionDivider() {
  return (
    <motion.div
    initial={{ y: -400, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: .5 }}
    className='  py-0 align-center sm:px-40 md:px-50 lg:px-80 xl:px-100'>
   
      <Lottie className="opacity-70  " animationData={animationData}/>
  
        

  </motion.div> 
  )
}
