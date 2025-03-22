import NavigationBar from "../components/navigationbar";
import Footer from "../components/footer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ResumeCard from "../components/resume-card";

export default function Resume() {
    return (
      <div className="mx-auto">
        <NavigationBar />
        <div className="flex flex-col max-w-[900px] p-5 mx-auto mt-12">
          <div className="text-5xl font-instrument text-center sm:text-4xl xs:text-3xl">
            Resume
          </div>

          <div className="text-gray-400 font-instrument text-center mt-8 mb-6 text-xl px-4">
          Hi my name is David. I'm a student at Penn State University studying Computer Science minoring in Mathematics. 
          Based out of Sparta, New Jersey, I am a full stack developer with experience and looking to expand my knowledge on the subject.
          </div>

          <div className="text-3xl font-bold font-instrument mt-8 mb-6">
            Education
          </div>

          <div className="font-instrument mb-6">
            <div className="font-bold text-lg">
            Penn State University - University Park, PA
            </div>
            <div className="text-gray-400 text-md">
            Bachelor of Science in Computer Science, Minor in Mathematics
            <br />
            Expected Graduation: May 2026
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="mt-4 max-w-[400px]">
              <div className="text-3xl font-bold font-instrument mb-4">
                My Skills:
              </div>

              <div className="flex flex-row gap-3 flex-wrap">
                <Badge>Python</Badge>
                <Badge>C++</Badge>
                <Badge>C</Badge>
                <Badge>Java</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>HTML/CSS</Badge>
                <Badge>OCaml</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Vue.js</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Bootstrap</Badge>
                <Badge>Flask</Badge>
                <Badge>Discord.py</Badge>
                <Badge>Selenium</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MySQL</Badge>
                <Badge>JSON</Badge>
                
              </div>
            </div>

            <div className="mt-4 max-w-[400px]">
              <div className="text-3xl font-bold font-instrument mb-4">
                My Tool Bag:
              </div>

              <div className="flex flex-row gap-3 flex-wrap">
                <Badge>Git</Badge>
                <Badge>GitHub</Badge>
                <Badge>Adobe Photoshop</Badge>
                <Badge>Adobe Premiere Pro</Badge>
                <Badge>Figma</Badge>
                <Badge>Microsoft Office</Badge>
                <Badge>VS Code</Badge>
                <Badge>Azure</Badge>
              </div>
            </div>
          </div>

          <div className="text-3xl font-bold font-instrument mt-8 mb-6">
            My Experiences
          </div>

          <div className="grid sm:grid-cols-2 gap-6 w-full max-w-4xl grid-cols-1">
            <ResumeCard
              title="Software Engineer"
              subtitle={{ time: "Jan 2025-Present", company: "Penn State ACM" }}
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG07YSokaih2aqWcPIlp79XQvLH6MfVC5TYwA8"
            />

            <ResumeCard
              title="Web Development Intern"
              subtitle={{ time: "May 2024-August 2024", company: "Thorlabs" }}
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG5ZZ3PliYJHnG0pieFSm29BdVyNAfLuOQvWaZ"
            />
          </div>

          <div className="text-3xl font-bold font-instrument mt-8 mb-6">
            My Projects
          </div>

          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl sm:grid-cols-2">
            <ResumeCard
              subtitle={{ time: "May 2024-Present", company: "Tally Sports" }}
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG5zuYAjhiYJHnG0pieFSm29BdVyNAfLuOQvWa"
            />
          </div>
            
          <div className="mx-auto">
            <Image 
              className="rounded-md mt-8" 
              src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGoaF4XLppojHYeGwdqPkglNJaDrxyCuA6cfh0" 
              alt="About" 
              width={300} 
              height={300} 
            />
          </div>
        </div>

        <Footer />
      </div>

    );
  }