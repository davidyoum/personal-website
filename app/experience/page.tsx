import NavigationBar from "@/app/components/navigationbar";
import ExperienceCard from "@/app/components/experience-card";
import Footer from "@/app/components/footer";
import projects from './projects.json';

type Projects = {
  color?: 'thorlabs-red' | 'pennstate-blue' | 'ctfguide-blue' | 'tally-sports-green' | 'discord-blue' | 'daska-blue';
  year: string;
  title: string;
  company: string;
  points?: string[];
};

const typedProjects = projects as Projects[];

export default function Experience() {
  return (
    <div className="w-full">
      <NavigationBar name="experience" />
      <div className="w-full md:w-2/3 mx-auto p-5">
        <h1 className="text-6xl font-tinos">Experience</h1>

        <div className="mt-10 space-y-5">
          <ExperienceCard color="thorlabs-red" title="Incoming Full-stack Software Engineer Intern" year="2025" company="Thorlabs" />
          <ExperienceCard color="ctfguide-blue" title="Full-stack Software Engineer" year="2025" company="CTFGuide" />
          <ExperienceCard color="pennstate-blue" title="Software Engineer & Graphic Designer" year="2025" company="Penn State ACM" />
          <ExperienceCard color="thorlabs-red" link="thorlabs2024" title="Full-stack Software Engineer Intern" year="2024" company="Thorlabs" />
        </div>

        <h1 className="text-6xl font-tinos mt-10">Projects</h1>

        <div className="mt-10 space-y-5">
          {typedProjects.map((project, index) => (
            <ExperienceCard
              key={index}
              {...project}
            />
          ))}
        </div>
      
        <Footer />
      </div>
    </div>
  );
}

