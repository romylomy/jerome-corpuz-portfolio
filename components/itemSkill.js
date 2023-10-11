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
      className="shadow-lg rounded-lg text-slate-700 bg-emerald-600  bg-opacity-70"
      key={index} // Assign a unique key to the motion element
      variants={FadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
    }}
      >
      
        <div className="py-1 p-4">
            <h2 className=" text-sm lg:text-2xl">{name}</h2>
        </div>
     
    </motion.div>
  )
}
