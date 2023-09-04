"use client";

import Lottie from'lottie-react'; 
import SynergyAnimation from '@/public/SynergyAnimation.json';
import React from 'react';
import { motion } from 'framer-motion';


export default function Intro() {
  return (
    <section>
       <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.6, duration: 0.5 }}
            style={{ width: '100px', height: '100px' }} // Set appropriate dimensions
        >
            <Lottie animationData={SynergyAnimation} loop autoplay />
        </motion.div>

    </section>
  )
}
