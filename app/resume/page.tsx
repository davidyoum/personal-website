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

          <h1 className="text-6xl font-tinos mt-6 mb-6">Education</h1>

          <div className="font-instrument">
            <EducationCard school="Penn State University" degree="B.S. in Computer Science, Minor in Mathematics" graduation="Aug 2022 - May 2026" />
            <EducationCard school="Stevens Institute of Technology" degree="Pre-college Computer Science Program - Intermediate" graduation="Jul 2021 - Aug 2021" />
          </div>

          <h1 className="text-6xl font-tinos mt-6 mb-6">Experiences</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 md:justify-between w-full">
            
            <ExperienceCard
              title="Software Engineer"
              company="Lockheed Martin Space"
              time="August 2026-Present"
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGWoo8k9dubSwaIiZyGOeFEhPV94ozWNL758Jk"
              link="https://www.lockheedmartin.com/en-us/who-we-are/business-areas/space.html"
            />

            <ExperienceCard
              title="Grader for CMPSC 221"
              company="Penn State University"
              time="August 2025-Present"
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGMhWyIUq1hHtRVKvpfCAJ5QlgGiYIPsxjczeD"
              link="https://www.eecs.psu.edu/departments/EECS-Departments-Computer-Science-Engineering3.aspx"
            />

            <ExperienceCard
              title="Founder"
              company="Tally Sports"
              time="April 2025-Present"
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGpz0Xr7SJQHADaZj3Ru04TEV1ytGMw7lC5mNh"
              link=""
            />
            
            <ExperienceCard
              title="Full-stack SWE Intern"
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
              title="Full-stack SWE Intern"
              company="Thorlabs"
              time="May 2024-August 2024"
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG5ZZ3PliYJHnG0pieFSm29BdVyNAfLuOQvWaZ"
              link="https://www.thorlabs.com"
            />
          </div>

          {/* <h1 className="text-6xl font-tinos mt-6 mb-6">Projects</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 md:justify-between w-full">
            <ExperienceCard
              title="A Pickup Sports Webapp"
              company="Tally Sports"
              time="May 2024-Present"
              image="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG5zuYAjhiYJHnG0pieFSm29BdVyNAfLuOQvWa"
            />
          </div> */}

          <div className="text-black text-center text-xl mt-24 text-md">
            Get in touch <a className="text-blue-500 hover:text-blue-300" href="mailto:davidyoum@yahoo.com">here</a>
          </div>
        
          <Footer />
        </div>
      </div>
    );
  }