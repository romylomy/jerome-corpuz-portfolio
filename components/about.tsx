"use client";

import React from "react";
import { aboutMeData } from "@/lib/data";
import AboutCard from "./aboutCard";

export default function about() {
  

  return (
    <section id="about" className="scroll-mt-28 mb-28 m-auto">
      <h1 className=" mb-8 font-semibold text-center text-5xl text-slate-700 md:text-5xl xl:text-7xl">
        About Me</h1>
      <div>
        {aboutMeData.map((project, index) => (
          <React.Fragment key={index}>
            <AboutCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}