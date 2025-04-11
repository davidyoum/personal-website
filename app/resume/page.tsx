import NavigationBar from "../components/navigationbar";
import Footer from "../components/footer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ResumeCard from "../components/resume-card";
import EducationCard from "../components/education-card";
export default function Resume() {
    return (
      <div className="w-full">
        <NavigationBar name="resume" />
        <div className="w-full font-tinos md:w-2/3 mx-auto p-5">
          <h1 className="text-6xl mb-6">Resume</h1>

          <div className="text-gray-700 text-center mt-10 text-xl">
            Hi my name is David. I'm a student at Penn State University studying Computer Science minoring in Mathematics. 
            Based out of Northern NJ and Tampa, FL, I am a full stack developer with experience and looking to expand my knowledge on the subject.
          </div>

          <h1 className="text-6xl font-tinos mt-6 mb-6">Education</h1>

          <div className="font-instrument">
            <EducationCard school="Penn State University" degree="Bachelor of Science in Computer Science, Minor in Mathematics" graduation="Expected Graduation: May 2026" />
            <EducationCard school="Stevens Institute of Technology" degree="Pre-college Computer Science Program" graduation="Jul 2021 - Aug 2021" />
          </div>

          <h1 className="text-6xl font-tinos mt-6 mb-6">Skills</h1>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-lg mb-4">Programming Languages:</h1>

              <div className="flex flex-row gap-3 flex-wrap">
                <Badge>Python</Badge>
                <Badge>C++</Badge>
                <Badge>C</Badge>
                <Badge>Java</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>HTML/CSS</Badge>
                <Badge>OCaml</Badge>
              </div>
            </div>

            <div>
              <h1 className="text-lg mb-4">Libraries & Frameworks:</h1>

              <div className="flex flex-row gap-3 flex-wrap">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Vue.js</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Bootstrap</Badge>
                <Badge>Flask</Badge>
                <Badge>Discord.py</Badge>
                <Badge>Selenium</Badge>
              </div>
            </div>

            <div>
              <h1 className="text-lg mb-4">My Tool Bag:</h1>

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

          <h1 className="text-6xl font-tinos mt-6 mb-6">Experiences</h1>

          <div className="grid sm:grid-cols-2 gap-6 w-full max-w-4xl grid-cols-1">
            <ResumeCard
              title="Full-stack SWE"
              subtitle={{ time: "March 2025-Present", company: "CTFGuide" }}
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGs0PU9JNvNFGLIaZKM5teTSx1R6z0BrDEW8mA"
            />

            <ResumeCard
              title="Software Engineer"
              subtitle={{ time: "Jan 2025-Present", company: "Penn State ACM" }}
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG07YSokaih2aqWcPIlp79XQvLH6MfVC5TYwA8"
            />

            <ResumeCard
              title="Full-stack SWE Intern"
              subtitle={{ time: "May 2024-August 2024", company: "Thorlabs" }}
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG5ZZ3PliYJHnG0pieFSm29BdVyNAfLuOQvWaZ"
            />
          </div>

          <h1 className="text-6xl font-tinos mt-6 mb-6">Projects</h1>

          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl sm:grid-cols-2">
            <ResumeCard
              subtitle={{ time: "May 2024-Present", company: "Tally Sports" }}
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG5zuYAjhiYJHnG0pieFSm29BdVyNAfLuOQvWa"
            />
          </div>

          <div className="text-gray-400 text-center text-xl mt-24 text-md">
            Get in touch <a className="text-blue-500 hover:text-blue-300" href="mailto:davidyoum@yahoo.com">here</a>
          </div>
        </div>

        <Footer />
      </div>
    );
  }