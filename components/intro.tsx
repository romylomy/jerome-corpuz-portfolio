"use client";

import Lottie from'lottie-react'; 
import SynergyAnimation from '@/public/SynergyAnimation.json';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithubAlt } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import animationData from '@/app/animationData.json' 


export default function Intro() {
  return (
    <section className=' flex items-center '>
            <div className='  p-10 w-1/2  rotate-90 '>
                <Lottie animationData={animationData}/> 
            </div>

            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.9 }}
              className='sm:w-1/2'>


                <div className='p-0 w-3/4 lg:flex items-center justify-center'>
                    <div className=' lg:pl-2 pb-2 '>
                          <h1 className='text-name'>Jerome Corpuz </h1>
                          <h2 className=' text-occupation'>Software developer</h2>
                          <p className=' w-1/2 text-slogan text-yellow-700'>
                              Mediator for seamless Design-Dev synergy: bridging Creativy and code
                          </p>
                          <button className='mt-5 mb-3 pl-5 pr-5 pt-2 pb-2 border-white border-opacity-40 bg-yellow-400 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'>Collaborate</button>

                          <div className='flex items-center'>
                              <AiOutlineLinkedin  />
                              <FaGithubAlt/>
                          </div>

                    </div>
          
                </div>
                
            </motion.div>
           

    </section>
  )
}
