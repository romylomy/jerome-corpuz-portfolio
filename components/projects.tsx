"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <h1 className=" mb-8 font-semibold text-center text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-700 md:text-5xl xl:text-7xl">
        My projects</h1>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}