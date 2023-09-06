"use client";

import Lottie from'lottie-react'; 
import SynergyAnimation from '@/public/SynergyAnimation.json';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithubAlt } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';


export default function Intro() {
  return (
    <section className='pt-28'>
            <div className='w-9/10'>
               <div className='w-3/4 lg:flex items-center justify-center'>
                  <div className='bg-blue-50 pl-2 pb-2 w-1/2  border-white border-opacity-40 rounded-md bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'>
                        <h1 className='text-custom'>Jerome Corpuz </h1>
                        <h2>Software developer</h2>
                        <p>
                            Mediator for seamless Design-Dev synergy: bridging Creativy and code
                        </p>
                        <button>Collaborate</button>
                        <div className='flex'>
                            <AiOutlineLinkedin  />
                            <FaGithubAlt  />
                        </div>

                  </div>
        
               </div>
            </div>

    </section>
  )
}
