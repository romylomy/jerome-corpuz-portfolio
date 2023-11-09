import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectionDivider";
import LogoSmall from "@/components/logoSmall";


export default function Home() {
  return (
    <main className=" p-5 bg-blue-500 bg-opacity-30 backdrop-blur-sm font-Montserrat sm:px-30 md:px-10 lg:px-50 xl:px-60">
      
      <Intro/>
      <LogoSmall/>
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Skills />
    </main>
  )
}
