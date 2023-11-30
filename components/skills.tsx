'use client'
import React from 'react';
import { dataSkills } from '@/lib/data';
import ItemSkill from './itemSkill';
import { motion } from 'framer-motion';

export default function Skills() {
  const FadeInAnimationVariants = {
    initial: {
      opacity: 0,
      
    },
    animate: (index: number) => ({
      opacity: 1,
      
      transition: {
        delay: 0.5 * index,
      },
    }),
  };

  return (
    <motion.section id="skills" className="relative pb-40 p-5 lg:px-50 scroll-mt-20 "
      initial={{
        opacity:0,
      }}
        whileInView={{
          opacity:1,
      }}
        transition={{
          duration:1
      }}
    >
        <div className="bg-blue-700 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-slate-300 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <h1 className="text-center text-5xl font-semibold bg-clip-text text-slate-700 md:text-5xl xl:text-7xl">Skill Set</h1>
      <div className="py-3 px-2 lg:p-10">
        <div className='grid grid-cols-1'>
          {Object.keys(dataSkills).map((category) => (
            <div className='rounded-lg  p-5 lg:mb-10' key={category}>
              <div className='mb-5  rounded-lg bg-opacity-50'>
                <h2 className='font-lora  text-slate-700 font-ubuntu font-semibold text-2xl lg:text-5xl '>{category}</h2>
              </div>
              <ul className='pl-4 flex flex-wrap  gap-1 xl:gap-3 '>
                {dataSkills[category as keyof typeof dataSkills].map((skill, index) => {
                  console.log(index); // Log the index after each iteration
                  return (
                    <motion.li
                      className="  "
                      key={index} // Assign a unique key to the motion element
                      variants={FadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                    >
                      <ItemSkill index={index} {...skill} />
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}