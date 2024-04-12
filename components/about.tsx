"use client";

import React from "react";
import { aboutMeData } from "@/lib/data";
import AboutCard from "./aboutCard";
import {motion} from "framer-motion"; 

export default function about() {
  

  return (
    <motion.section id="about" className=" sticky lg:flex lg:justify-center scroll-mt-28 mb-28 "
          initial={{
            opacity:0,
            }}
            whileInView={{
                opacity:1,
            }}
            transition={{
                duration:1
            }}>
      
      <h1 className=" mb-8 font-semibold text-center text-5xl text-slate-700 md:text-5xl xl:text-7xl">
        About Me</h1>
      <div className="px-5 pb-10">
        {aboutMeData.map((project, index) => (
          <React.Fragment key={index}>
            <AboutCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}