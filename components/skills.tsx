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
    <section id="skills" className="pb-40 p-5 lg:px-50 scroll-mt-20 ">
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
    </section>
  );
}