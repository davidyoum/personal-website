'use client'

import React from "react";
import NavigationBar from "./components/navigationbar";
import Image from "next/image";
import WorkCard from "./components/work-card";
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#161616]">
      <NavigationBar />

      <div className="h-screen">
        <div className="w-3/4 mx-auto pt-[10vh]">
          <div className="block text-2xl sm:hidden">
            David Youm
          </div>
          <div className="block text-md text-gray-500 sm:hidden">
            Full-stack Developer
          </div>
        </div>

        <div className="w-4/5 font-inter text-2xl sm:text-center mx-auto pt-[11vh]">
          <div className="space-y-4">
            <div>
              Hi, I'm David — a full-stack developer (focused on frontend) crafting end-to-end web experiences. I am an avid gamer, Tottenham Hotspur fan (mostly Son), and snowboarder.
            </div>
            <div>
              Based out of Northern New Jersey, previous intern at 
              <Image 
                src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG5ZZ3PliYJHnG0pieFSm29BdVyNAfLuOQvWaZ" 
                alt="Thorlabs Logo" 
                width={105}
                height={105}
                className="inline-block align-middle mb-1 mx-1"
                style={{ width: 'auto', height: 'auto' }}
              />.
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 sm:mt-52 md:mt-60">
          <Image 
            src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e206eedd964a5c5db19c91_23-icon-arrow-down.svg"
            alt="Scroll down"
            width={50}
            height={50}
            className="bounce-pulse cursor-pointer"
            priority
          />
        </div>

        <div>
          <div className="w-full mx-auto mt-32 items-center">
            <div className="w-5/6 mx-auto text-5xl mb-4">Experience</div>

            <div className="flex w-full h-44 border-t-[1px] border-b-[1px] hover:bg-[#2563eb]">
              <a className="flex w-11/12 md:w-5/6 mx-auto pt-10 pb-10 group items-center justify-between">
                <WorkCard 
                  title="Full-stack SWE - NDA"
                  subtitle={{
                    company: "CTFGuide",
                    time: "2025",
                  }}  
                />
                
                <Image 
                  src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGBXRFhH5oI9WwixP38KbTO4Hq6vYfuJ2CzFL1"
                  width={500}
                  height={500}
                  alt="CTFGuide Website Preview"
                  className="rounded-md opacity-0 group-hover:opacity-100 duration-300 hidden 2xl:block
                    w-[500px] h-[280px]
                    sm:hover:scale-95 transition-transform"
                  style={{ objectFit: 'cover' }}
                />
              </a>
            </div>

            <div className="flex w-full h-44 border-t-[1px] border-b-[1px] hover:bg-[#E51B24]">
              <a className="flex w-11/12 md:w-5/6 mx-auto pt-10 pb-10 group items-center justify-between">
                <WorkCard 
                  title="Incoming Full-stack SWE Intern for 2025"
                  subtitle={{
                    company: "Thorlabs",
                    time: "2025",
                  }}  
                />
              </a>
            </div>

            <div className="flex w-full h-44 border-t-[1px] border-b-[1px] hover:bg-[#93d2fe]">
              <a className="flex w-11/12 md:w-5/6 mx-auto pt-10 pb-10 group items-center justify-between">
                <WorkCard 
                  title="Website Overhaul & Design Work - Coming Soon"
                  subtitle={{
                    company: "Penn State ACM",
                    time: "2025",
                  }}
                />
                <Image 
                  src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG0lZEbzCaih2aqWcPIlp79XQvLH6MfVC5TYwA"
                  width={500}
                  height={500}
                  alt="ACM Website Preview"
                  className="rounded-md opacity-0 group-hover:opacity-100 duration-300 hidden 2xl:block
                    w-[500px] h-[280px]
                    sm:hover:scale-95 transition-transform"
                  style={{ objectFit: 'cover' }}
                />
              </a>
            </div>

            <a href="/thorlabs" className="flex w-full h-44 border-t-[1px] border-b-[1px] hover:bg-[#E51B24]">
              <a className="flex w-11/12 md:w-5/6 mx-auto pt-10 pb-10 group items-center justify-between"
                href="/thorlabs2024">
                <WorkCard 
                  title="Mobile Lab Website and Internal Tool"
                  subtitle={{
                    company: "Thorlabs",
                    time: "2024",
                  }}
                />
                <Image 
                  src="/images/thorlabs/thorlabs-website.png"
                  width={500}
                  height={500}
                  alt="Thorlabs Website Preview"
                  className="rounded-md opacity-0 group-hover:opacity-100 duration-300 hidden 2xl:block
                    w-[500px] h-[280px]
                    sm:hover:scale-95 transition-transform"
                  style={{ objectFit: 'cover' }}
                />
              </a>
            </a>
          </div>

          <div className="w-full mx-auto mt-32 items-center">
            <div className="w-5/6 mx-auto text-5xl mb-4">Projects</div>
            <div className="flex w-full h-44 border-t-[1px] border-b-[1px] hover:bg-[#57ec31]">
              <a className="flex w-11/12 md:w-5/6 mx-auto pt-10 pb-10 group items-center justify-between">
                <WorkCard 
                  title="The Pickup Sports Finder - Coming Soon"
                  subtitle={{
                    company: "Tally Sports",
                    time: "2024",
                  }}
                />
                <Image 
                  src="/images/tally.gif"
                  width={500}
                  height={500}
                  alt="Tally Sports Preview"
                  className="rounded-md opacity-0 group-hover:opacity-100 duration-300 hidden 2xl:block
                    w-[500px] h-[280px]
                    sm:hover:scale-95 transition-transform"
                  style={{ objectFit: 'cover' }}
                />
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
