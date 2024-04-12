"use client";

import React from "react";
import { articleData } from "@/lib/data";
import Journal from "./journal";
import {motion} from "framer-motion"; 

export default function Journals() {
  

  return (
    <motion.section id="articles" className="sm:flex sm:justify-center scroll-mt-28 mb-28"
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
        Articles</h1>
      <div className="font-[10px] px-8">
        {articleData.map((article, index) => (
          <React.Fragment key={index}>
            <Journal {...article} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}