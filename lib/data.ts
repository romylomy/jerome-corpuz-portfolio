import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcommentImg.png";


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