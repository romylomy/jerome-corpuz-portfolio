'use client'

import React from 'react'
import {motion} from "framer-motion"

export default function About() {
  return (
    <motion.section
    
    className=" mt-10 mt-scroll-20   mb-28  text-center leading-8 scroll-mt-60  "
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
    <h1 className='font-semibold  pt-15 text-4xl lg:text-7xl pb-5 md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-700'>About me</h1>
    <p className="mb- lg:text-xl lg:px-10  " >
    After my study in,{" "}
      <span className="font-medium">Health Science</span>, I decided to pursue my
      curiosity to learn object oriented programming.  I am a second year student enrolled in <span className="font-medium">Software development</span> at <span className="font-medium">Southern Alberta Institute of Technology</span> . I aspire to carve a career path in{" "}
      <span className="font-medium">full-stack web development</span>,{" "} blending my analytical skills from Health Science background with creativity and problem-solving abilities that programming offers.
      <span className="italic">My favorite part of programming</span> is the
      problem-solving aspect, entrepreneurial ventures one can partake, and the communal discourse within the tech community.  My core framework
      is{" "}
      <span className="font-medium">
        React, Next.js
      </span>
      . I am also familiar with <span className="font-medium">
        PL/SQL, C#, TypeScript
      </span> and <span className="font-medium">
        Prisma
      </span>  while currently learning  <span className="font-medium">
        Java, Node.js, and MongoDB
      </span>. I am currently looking for a{" "}
      <span className="font-medium">co-op position</span> in 
      <span className="font-medium"> IT roles</span>
    </p>

   
  </motion.section>
  )
}
