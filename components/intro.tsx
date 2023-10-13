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





export default function Intro() {
  return (
    <motion.section
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 1.0 }}
      className=' pb-10 md:mx-0 grid grid-cols-1  justify-center bg-opacity-30 pt-20 md:pt-40  rounded-lg  font-gothic   '>
      
      <div className='  '>

      
          
      <h1 className=' mt-[50px] md:mt-0   text-5xl   font-semibold  text-slate-700  text-opacity-80 md:text-5xl lg:text-7xl lg:w-full '>
       
        <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Software',
              1000,
              'Web',
              1000
            
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-700'
            repeat={Infinity}
            />

          <span> <br/> Developer  <br/> for cohesive <br/> Design  Dev <br/> synergy </span>


        </h1> 
        
        <p className=" md:text-center py-10  ">I am a second year Software Development Student at Sait. I enjoy building websites. My focus is the MERN stack.     </p>
        
        
                 
      </div>
      <div className='md:py-2 md:border-b-2 border-slate-700 hidden '></div>

     
      <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1.0 }}
          className=' text-center'>

           <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 7.5 }}
              className='pt-2 flex px-10 justify-center gap-4 '>
                
               <div className="grid grid-cols-2">
               

                    <button className='px-2  md:py-3 md:px-5 border-2 border-green-700 shadow-lg bg-slate-50 bg-opacity-40 backdrop-blur-md font-light text-slate-700 text-sm md:text-xl rounded-full '>
                      Resume
                      </button>
                      <button className='mr-2   py-2 px-3 md:py-3 md:px-5 shadow-lg bg-gradient-to-b from-cyan-500 to-green-700  backdrop-blur-md font-light text-slate-100 text-md md:text-xl rounded-full '>
                      Contact 
                      </button>

               </div>
                 

                    <div className=' order-first drop-shadow-lg flex justify-center p-5  '> 
                            <a href='https://www.linkedin.com/in/jeromecorpuz/'><AiOutlineLinkedin size={20}/></a>
                            <a href='https://www.linkedin.com/in/jeromecorpuz/'><FaGithubAlt size={20}/></a>
                            
                        
                </div>
                  
          
              
              
 
               
               
               
               
                   
                   
                   
                                        
               
          </motion.div>                  

      </motion.div>
    
    
     
  
      
      
               
      
    

              
    </motion.section>
  )
}