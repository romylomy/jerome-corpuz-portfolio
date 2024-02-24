import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcommentImg.png";
import Evergrowth from "@/public/Evergrowth.png";

import Future from "@/public/Future.png";
import Past from "@/public/Past.png";
import Present from "@/public/Present.png";
import MobileFuture from "@/public/MobileFuture.svg";
import MobilePast from "@/public/MobilePast.svg";
import MobilePresent from "@/public/MobilePresent.svg";
import magazineHeader from "@/public/magazineHeader.png"

export type LinkType ={
  name: string
  hash: string
}

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
 
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;


export const dataSkills = {
  Language: [
    { name: "CSS" },
    { name: "HTML" },
    { name: "Javascript" },
    { name: "TypeScript" },
    { name: "C#" },
    { name: "Java" },
    { name: "PL/SQL" },
  ],
  Framework: [
    
    { name: "React/Next.js" },
    { name: "Tailwind" },
    { name: "Zod" },
    { name: "Prisma" },
    { name: "Framer Motion" },

  ],
  Design: [
    { name: "UML" },
    { name: "ERD" },
    { name: "Figma" },
  ],
};

export const projectsData = [
  {
    title: "MealMingle",
    description:
      "Users can create, organize, and manage their shopping lists while also providing meal ideas based on the ingredients they have.",
    tags: ["React", "Next.js", "Firebase", "Tailwind"],
    imageUrl:corpcommentImg,
    link:'https://cprg306-assignments-vy9h.vercel.app/week10'
  },
  {
    title: "Evergrowth Consulting Website Redesign",
    description:
      "An on going personal project to redesign old business website",
    tags: ["Figma", "Next.js", "Shadcn"],
    imageUrl:Evergrowth ,
    link:'https://www.figma.com/file/VGtTsri1bUpa3AIYkSN7lK/Evergrowth-Consulting?type=design&node-id=0%3A1&mode=design&t=c9B9J8sPf0xY0aAS-1'
  },
  {
    title: "Ocean Acidification Magazine",
    description:
      "Dive into my graphic portfolio, 'Goal 14: Life Below Water', where I explore the profound impact of ocean acidification on marine ecosystems and global livelihoods",
    tags: ["Canva", "Graphics"],
    imageUrl:magazineHeader,
    link:'/graphics'
  },
  
  
  
] as const;

export const aboutMeData = [
  
  {
    title: "Present",
    description:
      "As a software student my favorite part of programming is the problem-solving aspect, entrepreneurial ventures one can partake, and the communal discourse within the tech community. My core framework is React, Next.js. I am experience in PL/SQL, C#, TypeScript and Prisma while currently learning Java, Node.js, and Firebase. ",
    imageUrl: Present,
    mobileUrl: MobilePresent
  },
  {
    title: "Future",
    description:
      "I aspire to carve a career path in full-stack web development, blending my analytical skills from Health Science background with creativity and problem-solving abilities that programming offers. I am currently looking for a co-op position in IT roles ",
    imageUrl: Future,
    mobileUrl: MobileFuture
  },
  {
    title: "Past",
    description:
      "I have studied health science for two years. I find interest in using my knowledge in statics, experimental research, and design principles for extrapolating data using programming",
    imageUrl: Past,
    mobileUrl:MobilePast
  },
  
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Zustand",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;