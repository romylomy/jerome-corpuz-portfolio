import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcommentImg.png";
import Future from "@/public/Future.png";
import Past from "@/public/Past.png";
import Present from "@/public/Present.png";

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

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const dataSkills = {
  Language: [
    { name: "CSS" },
    { name: "HTML" },
    { name: "Javascript" },
    { name: "TypeScript" },
    { name: "C#" },
    { name: "java" },
    { name: "PL/SQL" },
  ],
  Framework: [
    { name: "Framer Motion" },
    { name: "React/Next.js" },
    { name: "Tailwind" },
    { name: "Prisma" },

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
      "Your MealMate is a user-friendly web application that simplifies meal planning and grocery shopping. It empowers users to create, organize, and manage their shopping lists while also providing meal ideas based on the ingredients they have.",
    tags: ["React", "Next.js", "Firebase", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  
] as const;

export const aboutMeData = [
  {
    title: "Past",
    description:
      "After my study in, Health Science, I decided to pursue my curiosity to learn object oriented programming.I am a second year student enrolled in Software development at Southern Alberta Institute of Technology.",
    imageUrl: Past,
  },
  {
    title: "Present",
    description:
      "I am a second year student enrolled in Software development at Southern Alberta Institute of Technology.My favorite part of programming is the problem-solving aspect, entrepreneurial ventures one can partake, and the communal discourse within the tech community. My core framework is React, Next.js. I am also familiar with PL/SQL, C#, TypeScript and Prisma while currently learning Java, Node.js, and MongoDB. I am currently looking for a co-op position in IT roles",
    imageUrl: Present,
  },
  {
    title: "Future",
    description:
      "I aspire to carve a career path in full-stack web development, blending my analytical skills from Health Science background with creativity and problem-solving abilities that programming offers. ",
    imageUrl: Future,
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