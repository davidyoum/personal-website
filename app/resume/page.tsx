import NavigationBar from "../components/navigationbar";
import Footer from "../components/footer";
import ExperienceCard from "../components/resume-experience-card";
import EducationCard from "../components/education-card";

export default function Resume() {
    return (
      <div className="w-full">
        <NavigationBar name="resume" />
        <div className="w-full font-tinos md:w-2/3 mx-auto p-5">
          <h1 className="text-6xl mb-6">Resume</h1>

          <div className="text-gray-700 text-center mt-10 text-xl">
            Hi my name is David. I'm a student at Penn State University studying Computer Science minoring in Mathematics. 
            I could relocate to New York Metropolitan Area or Tampa, FL. I am a full stack developer with experience and looking to expand my knowledge on the subject.
          </div>

          <h1 className="text-6xl font-tinos mt-6 mb-6">Education</h1>

          <div className="font-instrument">
            <EducationCard school="Penn State University" degree="B.S. in Computer Science, Minor in Mathematics" graduation="Aug 2022 - May 2026" />
            <EducationCard school="Stevens Institute of Technology" degree="Pre-college Computer Science Program - Intermediate" graduation="Jul 2021 - Aug 2021" />
            <EducationCard school="Sparta High School" degree="High School Diploma" graduation="Aug 2018 - May 2022" />
          </div>

          <h1 className="text-6xl font-tinos mt-6 mb-6">Experiences</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 md:justify-between w-full">
            <ExperienceCard
              title="Incoming Full-stack SWE Intern"
              company="Thorlabs"
              time="May 2025-August 2025"
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG5ZZ3PliYJHnG0pieFSm29BdVyNAfLuOQvWaZ"
              link="https://www.thorlabs.com"
            />

            <ExperienceCard
              title="Full-stack SWE"
              company="CTFGuide"
              time="March 2025-Present"
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGiF7rjPbkqwfp208a3czseQhtCrvH4P7ALudN"
              link="https://ctfguide.com"
            />

            <ExperienceCard
              title="SWE & Graphic Designer"
              company="Penn State ACM"
              time="Jan 2025-Present"
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGKNK5L8Mnv36ejLY0d5yZaWQfHlJKSOIq1cp2"
              link="https://acm.psu.edu/"
            />

            <ExperienceCard
              title="Full-stack SWE Intern"
              company="Thorlabs"
              time="May 2024-August 2024"
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG5ZZ3PliYJHnG0pieFSm29BdVyNAfLuOQvWaZ"
              link="https://www.thorlabs.com"
            />
          </div>

          <h1 className="text-6xl font-tinos mt-6 mb-6">Projects</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 md:justify-between w-full">
            <ExperienceCard
              title="A Pickup Sports Webapp"
              company="Tally Sports"
              time="May 2024-Present"
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG5zuYAjhiYJHnG0pieFSm29BdVyNAfLuOQvWa"
            />
          </div>

          <div className="text-black text-center text-xl mt-24 text-md">
            Get in touch <a className="text-blue-500 hover:text-blue-300" href="mailto:davidyoum@yahoo.com">here</a>
          </div>
        
          <Footer />
        </div>
      </div>
    );
  }