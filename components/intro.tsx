"use client";

import Lottie from'lottie-react'; 
import SynergyAnimation from '@/public/SynergyAnimation.json';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithubAlt } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import animationData from '@/app/animationData.json' 
import animation from '@/app/animation.json' 




export default function Intro() {
  return (
    <motion.section
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 1.0 }}
      className=' grid grid-cols-1 bg-opacity-30 pt-40  rounded-lg  font-gothic   '>
      
      <div className='text-center rounded-lg  '>
        <h1 className=' text-5xl   font-semibold  text-slate-700  text-opacity-80 md:text-5xl lg:text-7xl lg:w-full '>
          Software developer <br/> for cohesive <br/> Design  Dev <br/> synergy
        </h1>
        
        
                 
      </div>
      <div className='py-2 border-b-2 border-slate-700 sm:hidden '></div>

     
      <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1.0 }}
          className='  text-center'>

           <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 7.5 }}
              className='pt-2 grid grids-cols-2 justify-center align-center px-10 md:justify-center gap-4 '>
                
                <button className='py-3 px-5 shadow-lg bg-green-600 backdrop-blur-md bg-opacity-50 font-light text-slate-100 text-xl rounded-full '>
                  Collaborate
                  </button>

                <button className='py-3 px-5 shadow-lg bg-slate-50 backdrop-blur-md bg-opacity-30 font-light text-slate-700 text-xl rounded-full '>
                  Download CV 
                  </button> 
 
               
               
                <div className='drop-shadow-lg grid grid-cols-2  '> 
                            <a href='https://www.linkedin.com/in/jeromecorpuz/'><AiOutlineLinkedin size={50}/></a>
                            <a href='https://www.linkedin.com/in/jeromecorpuz/'><FaGithubAlt size={50}/></a>
                            
                        
                </div>
               
                   
                   
                   
                                        
               
          </motion.div>                  

      </motion.div>
     
      <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .5 }}
            className=' py-0 align-center sm:px-40 md:px-50 lg:px-80 xl:px-100'>
           
              <Lottie className="opacity-70  " animationData={animationData}/>
          
                

      </motion.div>
      
      
               
      
    

              
    </motion.section>
  )
}