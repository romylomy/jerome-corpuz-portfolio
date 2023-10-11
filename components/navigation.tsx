

import React from 'react'
import { LinkType } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link'


export default function Navigation({name, hash}:LinkType) {



  return (
    <motion.li
    className="h-3/4 flex items-center justify-center relative"
    key={hash}
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    >

      <Link className= "flex items-center justify-center px-3 py-3 hover:text-violet-950 transition dark:text-gray-500 dark:hover:text-gray-300" href={hash}>{name}</Link>

    </motion.li>
  )
}