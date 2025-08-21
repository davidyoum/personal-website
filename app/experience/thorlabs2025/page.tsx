'use client';

import React from "react";
import Footer from "@/app/components/footer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function Thorlabs() {
    const router = useRouter();
    return (
      <div className="min-h-screen">
        {/* Back button */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-16 mt-8">
          <button onClick={() => router.back()} className="text-lg font-tinos hover:text-gray-600 transition-colors inline-flex items-center gap-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M19 12H5M5 12L12 19M5 12L12 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
        </div>

        {/* Full-width banner at top */}
        <div className="w-full mt-16 flex justify-center">
          <div className="h-full max-h-[60vh] max-w-[1400px]">
            <div className="relative px-4 sm:px-16 overflow-hidden">
              <Image 
                src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGsFa9YcNvNFGLIaZKM5teTSx1R6z0BrDEW8mA" 
                alt="Thorlabs Banner" 
                className="border border-black rounded-lg object-cover object-top" 
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

        {/* Layout container - converted to stack on mobile */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-16 mt-16 md:mt-32 flex flex-col lg:flex-row gap-16">
          {/* Left column - Description and title */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="lg:sticky lg:top-0 lg:backdrop-blur-sm lg:-mx-8 lg:px-8">
              <h1 className="text-5xl sm:text-7xl font-tinos mb-4">Thorlabs</h1>
              <h2 className="text-2xl sm:text-3xl mb-8">Full-stack Software Engineer Intern</h2>
              <div className="text-base font-instrument sm:text-lg text-gray-600">
                <div className="space-y-2">
                  <h3 className="text-black text-2xl">Description</h3>
                  <div>
                  Built frontend components and a new backend for a revamped part configurator. Rebuilt an outdated internal tool from scratch using modern technologies. 
                  Both are now in production and for the Polaris configurator you can find it
                    <a href="https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=9079" className="text-blue-500 hover:text-blue-300"> here</a>.
                  </div>

                  <h3 className="text-black text-2xl">Client</h3>
                  <div>
                    Polaris Team and Marketing Team
                  </div>

                  <h3 className="text-black text-2xl">Time</h3>
                  <div>
                    May 2025 - August 2025
                  </div>

                  <h3 className="text-black text-2xl">Technologies</h3>
                  <div className="text-white">
                    <div className="flex flex-row gap-2 flex-wrap">
                        <Badge>Vue.js</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>ColdFusion</Badge>
                        <Badge>SQL</Badge>
                        <Badge>JSON</Badge>
                        <Badge>C# .NET</Badge>
                        <Badge>HTML/CSS</Badge>
                        <Badge>Figma</Badge>
                        <Badge>Azure</Badge>
                        <Badge>TailwindCSS</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Cards and content */}
          <div className="w-full lg:w-2/3 space-y-16">
            <div>
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden">
                <Image 
                  src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGMjRiiK1hHtRVKvpfCAJ5QlgGiYIPsxjczeDL"
                  width={1000} 
                  height={1000} 
                  alt="Thorlabs Website"
                  className="border border-black rounded-lg"
                />
              </div>
              <p className="mt-6 text-lg">
                I created a vue component for the Polaris form and the image generator. We had to redesign how the form worked and I put forward a solution that the form would control all aspects of the configurator.
                The backend was also redesigned to fit this new frontend in Vue.js with a new backend in C# .NET.
              </p>
            </div>
            
            <div>
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden">
                <Image 
                  src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGBays0z5oI9WwixP38KbTO4Hq6vYfuJ2CzFL1" 
                  width={1000} 
                  height={1000} 
                  alt="Thorlabs Website" 
                  className="border border-black rounded-lg"
                />
              </div>
              <p className="mt-4 text-lg">
                Made a add to cart button, quantity selector, and PPU calculator. Had to implement the add to cart functionality by using legacy code.
              </p>
            </div>

            <div>
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden">
                <Image 
                  src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGey0fy7wvzyxiH2XIftALjS6YUruec7kop4RT" 
                  width={1000} 
                  height={1000} 
                  alt="Thorlabs Website" 
                  className="border border-black rounded-lg"
                />
              </div>
              <p className="mt-4 text-lg">
              I designed a new concept for the internal tool using Figma, introducing ideas such as an accordion layout for each part to improve usability. I then developed a sleek and intuitive interface with Vue.js and Tailwind CSS, making it easy for non-technical users to update support documents. To support this functionality, I implemented a SQL database for storing the data and integrated it with the website using ColdFusion, ensuring smooth retrieval and display of information.
              </p>
            </div>

          </div>
        </div>

        <div className="text-gray-400 text-center text-xl mt-24 text-md">
            Lets talk more about Thorlabs <a className="text-blue-500 hover:text-blue-300" href="mailto:davidyoum@yahoo.com">here</a>
        </div>
        <Footer />
      </div>
    );
}