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
  mobileUrl
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "start start"],
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
      <section className=" relative bg-slate-50 sm:bg-none max-w-[42rem]  border-black rounded-lg overflow-hidden sm:pr-8  sm:h-[20rem] transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="bg-blue-700 bg-opacity-40 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-slate-300 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <div className="p-4 sm:pl-10  sm:pt-10 sm:max-w-[80%] flex flex-col h-full sm:group-even:ml-[10rem]">
          <div className="">
            <div className="flex">
              <h3 className="text-2xl font-semibold">{title}</h3>
              
              <Image
                  src={mobileUrl}
                  alt="Project I worked on"
                 
                  height={5}
                  width={5}
                  className="sm:hidden   top-8 -right-50 w-[20.25rem] 
                  transition 
                  group-even:right-[initial] group-even:-left-40"
              />
              

            </div>
            
              <p className=" text-[14px] sm:text-lg mt-2 leading-relaxed  rounded-lg text-gray-700 dark:text-white/70">
                {description}
              </p>


            </div>
         
         
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