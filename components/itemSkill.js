import React from 'react'
import {motion} from "framer-motion"

export default function ItemSkill({name, index}) {
  const FadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5 * index,
      },
    }),
  }
  return (
    <motion.div
      className="shadow-lg rounded-lg border-2 border-slate-700 text-slate-700 bg-slate-500 bg-opacity-70"
      key={index}
      variants={FadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
    }}
      >
      
        <div className="py-1 px-5">
            <p className="text-xl lg:text-2xl">{name}</p>
        </div>
     
    </motion.div>
  )
}