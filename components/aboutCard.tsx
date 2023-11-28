"use client";

import { useRef } from "react";
import { aboutMeData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof aboutMeData)[number];

export default function AboutCard({
  title,
  description,
  imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mx-auto mb-3 sm:mb-8 last:mb-0"
    >
      <section className="border-2  bg-gray-100 max-w-[42rem]  border-black rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10  sm:pt-10 sm:max-w-[80%] flex flex-col h-full sm:group-even:ml-[10rem]">
         <div className="flex">
            <h3 className="text-2xl font-semibold">{title}</h3>
            

         </div>
        
          <p className="  mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
         
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="hidden p-5 sm:rounded-full  sm:absolute sm:block top-8 -right-40 w-[20.25rem] sm:rounded-t-lg shadow-2xl
        transition 
       

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}