import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Journals from "@/components/journals";
import SectionDivider from "@/components/sectionDivider";
import Contact from "@/components/contact";

import LogoSmall from "@/components/logoSmall";
import { useState, createContext, useContext } from "react";


export default function Home() {
  
   

  return (
    <main className=" p-5 bg-gray-100 bg-opacity-30 backdrop-blur-sm font-Montserrat sm:px-30 md:px-10 lg:px-50 xl:px-60">
      
        <Intro/>
        <SectionDivider/>
        <Projects/>
        <SectionDivider/>
        <Journals/> 
        <SectionDivider/>
        <Skills />
        <Contact/>
    
    </main>
  )
}
