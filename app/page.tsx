import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectionDivider";


export default function Home() {
  return (
    <main className="shadow-lg p-2 bg-blue-500 bg-opacity-30 backdrop-blur-sm font-Montserrat sm:px-30 md:px-20 lg:px-50 xl:px-60">
      
      <Intro/>
      <SectionDivider/>
      <Skills />
      <About/>
      <Projects/>
    </main>
  )
}
