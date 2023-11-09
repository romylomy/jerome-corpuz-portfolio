"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { links } from "@/lib/data";
import Navigation from './navigation';
import { useState } from 'react';
import{ Bars3Icon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

export default function Header() {
    const [navbarOpen, setnavbarOpen ] = useState(false)

    function toggleOff(){
      setnavbarOpen(false)
    }
    

    
  return (
    <header className='z-[999] relative'>
          <motion.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          ></motion.div>
          <div className='mobile-menu block fixed right-[2rem]  top-[1.7rem] py-0 sm:hidden '>
            {
              !navbarOpen ? (
                <button onClick={()=> setnavbarOpen(true)} className=' z-[999] flex items-center px-3 order rounded border-slate-700 text-slate-100  bg-slate-700 hover:text-white hover:border-white '>
                  <Bars3Icon className='h-6 w-6'/>
                </button>
              ) : (
                <MenuOverlay toggleOff={toggleOff}/> 
              )
            }

          </div>
         
        <nav className=" flex fixed  left-1/2 -translate-x-1/2  top-[1.7rem] h-[initial] py-0">
              
            <ul className=" menu hidden sm:flex sm:w-[22rem] sm:items-center sm:justify-center sm:gap-y-1 sm:text-[0.9rem] sm:font-medium sm:text-gray-500 sm:w-[initial]  sm::gap-5">
              {
                links.map((link)=>(
                   <Navigation {...link} key={link.hash} />
                  )  
                )}
           </ul>
        </nav>
    </header>
  )
}