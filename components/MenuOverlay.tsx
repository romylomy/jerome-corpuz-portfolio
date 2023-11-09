"use client"
import React from 'react'
import Link from 'next/link'
import { links } from "@/lib/data";
import {XMarkIcon} from "@heroicons/react/24/solid"
import { motion } from 'framer-motion';


type MenuOverlayProps = {
  toggleOff: () => void;
};


export default function MenuOverlay({toggleOff}:MenuOverlayProps) {
  return (
    <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: .3 }}
      exit={{ opacity:0 }}
      className="fixed w-full h-screen right-0 top-0 backdrop-blur-lg bg-slate-700 bg-opacity-50 " >
         
        <div className="bg-white absolute right-0 top-0 w-1/2 h-screen p-12  text-gray-700g" >
          <div className='mobile-menu block fixed right-[2rem]  top-[1.7rem] pt-0  '>
                  <button onClick={toggleOff} className='  flex items-center px-3 order rounded text-slate-100  bg-slate-700 hover:text-white hover:border-white '>
                    <XMarkIcon  className=' h-6 w-6'/>
                  </button>
          </div>
            <div className='pt-10 grid grid-cols-1 gap-2 text-xl '>
                    {
                        links.map((link, index) =>(
                            <Link key={index} onClick={toggleOff} href={link.hash}> {link.name} </Link>   
                        ))
                    }

            </div>
            
        </div>

            
    </motion.div>
   
  )
}
