"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import {motion} from "framer-motion"; 

export default function Projects() {
  

  return (
    <motion.section id="projects" className="sm:flex sm:justify-center scroll-mt-28 mb-28"
    initial={{
      opacity:0,
      }}
      whileInView={{
          opacity:1,
      }}
      transition={{
          duration:1
      }}>
      <h1 className=" mb-8 font-semibold text-center text-5xl bg-clip-text text-slate-700 md:text-5xl xl:text-7xl">
        Projects</h1>
      <div className="font-[10px] px-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}