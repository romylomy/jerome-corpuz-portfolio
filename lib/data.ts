import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcommentImg.png";
import Future from "@/public/Future.png";
import Past from "@/public/Past.png";
import Present from "@/public/Present.png";
import MobileFuture from "@/public/MobileFuture.svg";
import MobilePast from "@/public/MobilePast.svg";
import MobilePresent from "@/public/MobilePresent.svg";

export type LinkType ={
  name: string
  hash: string
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
 
  {
    name: "Contact",
    hash: "#contact",
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
    imageUrl: corpcommentImg,
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