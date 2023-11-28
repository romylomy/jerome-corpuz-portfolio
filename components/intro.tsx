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
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";





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
                    'Jerome Corpuz,',
                    2000,
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
                  className=' bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'
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
              className='pt-2 text-sm flex  sm:justify-center md:justify-start gap-2 sm:gap-4 '>
            
                <Link
                  href="#contact"
                  className="group  bg-slate-700 text-white py-[5px] px-[10px] sm:px-7 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                  >
                  Contact{" "}
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <a
                  className="group opacity-70 border-2 border-slate-700 bg-slate-50 py-[2px] px-[10px] sm:px-7 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                  href="/JeromeCorpuzResume.pdf"
                  download
                  >
                  Resume
                  <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
                <a className="shadow-lg bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href='https://www.linkedin.com/in/jeromecorpuz/'>
                    <AiOutlineLinkedin size={30}/>
                </a>
                            
                <a className="shadow-lg bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href='https://github.com/romylomy'>
                    <FaGithubAlt size={30}/>
                </a>
                            
                        
                  
        
          </motion.div>                  

      </motion.div>

          </div>
         

        </div>

        <div className='md:py-2 md:border-b-2 border-slate-700 hidden '></div>

      
      </div>
          
    </motion.section>
  )
}