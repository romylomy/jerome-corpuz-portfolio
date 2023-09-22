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
    <section className='p-30 flex  align-center justify-center  ml-0 '>
            <div className='pr-40 pl-20 pt-40 md:px-80 lg:px-70'>
                
                
                <div className='relative'>
                       <div>
                          <div className='grid grid-col-1 lg:grid-cols-2'>
                               
                              
                                <div className=''>
                                  <motion.p
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                    transition={{ duration: 0.5 }}
                                    className=' text-name w-1/2 text-md text-gray-600 font-light md:text-md'>Jerome Corpuz
                                  </motion.p>

            
                                  
                                  <motion.div
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                    transition={{ duration: 1.5 }}
                                    className='pt-5'>

                                        <p className='text-lg text-gray-600'>Software developer</p>

                                        <p className=' w-3/4 text-small  text-green-700  '>
                                            Mediator for seamless Design-Dev synergy: bridging Creativy and code
                                        </p>
                                                                              
                                
                                      <button className='mt-5 mb-5 pl-5 pr-5 pt-2 pb-2 border-white border-opacity-40 bg-green-700 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 hover:bg-yellow-400'>Collaborate</button>

                                      <div className='flex items-center '>
                                          <AiOutlineLinkedin  />
                                          <FaGithubAlt/>
                                      </div>


                                   </motion.div>
                          

                          
                                </div >
                                <div className=' shadow-md rounded-full lg:pl-30'>
                                  <div className=' absolute bg-slate-100 bg-opacity-30 top-1/2 left-3/4 top rotate-90 shadow-md rounded-full w-full md:w-full lg:static lg:w-full'>
                                      <Lottie animationData={animationData}/>
                                  </div>

                                </div>
                               
                               

                          </div>

                          
                        
                          
                        </div>
          
                </div>
            </div>

           


                
            
           

    </section>
  )
}
