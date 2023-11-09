"use client";

import Lottie from'lottie-react'; 
import SynergyAnimation from '@/public/SynergyAnimation.json';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithubAlt } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import animationData from '@/app/animationData.json' 
import animation from '@/app/animation.json' 
import { TypeAnimation } from 'react-type-animation';
import SectionDivider from "@/components/sectionDivider";






export default function Intro() {
  return (
    <motion.section
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 1.0 }}
      className=' pb-10 md:mx-0 grid grid-cols-1  justify-center bg-opacity-30 pt-20 md:pt-40  rounded-lg  font-gothic mx-full  '>
      
      <div className='  '>
      <div className=' lg:visible md:flex r md:justify-center md:items-start'>
          

          <div>
            <h1 className=' mt-[50px]  font-semibold text-5xl  md:text-7xl   text-slate-700  text-opacity-80 lg:w-full md:mt-0  '>
              
              <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Software',
                    1000,
                    'Web',
                    1000,
                    'MERN',
                    1000,
                    'SQL',
                    1000
                  
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1em', display: 'inline-block' }}
                  className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-700'
                  repeat={Infinity}
                  />

                <span> <br/> Developer  <br /> for cohesive <br /> Design  Dev <br className="lg:hidden"/> synergy </span>


            </h1> 
            
            <p className="  py-10 lg:text-lg lg:w-1/2 ">I am a second year Software Development Student at Sait. I enjoy building websites. My focus is the MERN stack.     </p>

      <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1.0 }}
          className=' text-center'>

           <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 7.5 }}
              className='pt-2 flex  justify-center md:justify-start gap-4 '>
                
               <div className="grid grid-cols-2">
               

                    <button className='px-2 border-2 border-green-700 shadow-lg bg-slate-50 bg-opacity-40 backdrop-blur-md font-light text-slate-700 text-sm md:text-xl rounded-full'>
                      Resume
                      </button>
                      <button className='ml-2  px-2 shadow-lg bg-gradient-to-b from-cyan-500 to-green-700  backdrop-blur-md font-light text-slate-100 text-md md:text-xl rounded-full '>
                      Contact 
                      </button>

               </div>
                 

                    <div className=' order-first drop-shadow-lg flex justify-center p-5  '> 
                            <a href='https://www.linkedin.com/in/jeromecorpuz/'><AiOutlineLinkedin size={30}/></a>
                            <a href='https://github.com/romylomy'><FaGithubAlt size={30}/></a>
                            
                        
                </div>
                  
        
          </motion.div>                  

      </motion.div>

          </div>
         

        </div>

        <div className='md:py-2 md:border-b-2 border-slate-700 hidden '></div>

      
      </div>
          
    </motion.section>
  )
}