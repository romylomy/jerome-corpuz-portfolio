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
    <motion.section
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 1.0 }}
      className=' py-40 md:py-20 lg:py-40 xl:py-40 flex align-center  shadow-none md:shadow-xl lg:shadow-xl md:px-40 lg:px-40  md:rounded-full lg:rounded-full xl:lg:rounded-full'>
      
      <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1.0 }}
          className='grid place-items grid-cols-2 rounded-full  md:grid-cols-2 lg:grid-cols-2  p-5 lg:p-12 xl:p-12 shadow-xl  '>

           <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 1.5 }}
              className='drop-shadow-lg'>
                <div className='py-2 grid grid-cols-1 gap-1' >
                  <p className='text-4xl font-bold text-gray-500  '>Jerome Corpuz 
                  </p>

                  <p className='lg:text-xl  font-light text-gray-600'> Software developer</p>

                </div>

                <div className='lg:pt-3'>

                    <p className='text-xs  text-green-700  md:text-xl lg:text-3xl xl:text-5xl '>
                        Mediator for seamless Design-Dev synergy: bridging Creativy and code
                    </p>

                    <button className='drop-shadow-lg my-2 px-5 py-2 lg:px-9 lg:py-3 lg:text-lg font-light border-white border-opacity-40 bg-green-700 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 hover:bg-green-800'>Collaborate</button>
                    
                    <div className='drop-shadow-lg flex'> 
                      <a href='https://www.linkedin.com/in/jeromecorpuz/'><AiOutlineLinkedin size={50}/></a>
                      <a href='https://www.linkedin.com/in/jeromecorpuz/'><FaGithubAlt size={50}/></a>
                      <div></div>
                    </div>

                </div>                                  
               


          </motion.div>              
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .5 }}
            className=' '>
                <div className='rotate-90 shadow-lg rounded-full w-full '>
                    <Lottie animationData={animationData}/>
                </div>

          </motion.div>
                               

      </motion.div>
              
    </motion.section>
  )
}
