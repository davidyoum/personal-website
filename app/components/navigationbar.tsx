'use client'

import Link from "next/link";

interface pageType {
    name: string;
}

export default function NavigationBar(name: pageType) {
    return (
      <div suppressHydrationWarning>
        <div className="flex p-5 font-tinos justify-between items-center w-full sm:w-2/3 mx-auto">
            <a href="/" className="text-xl">
                David Youm
            </a>
  
            <div className="space-x-5 md:space-x-12">
                {name.name === "experience" && (
                    <>
                        <Link href="/about">About</Link>
                        <Link href="/resume">Resume</Link>
                    </>
                )}
                {name.name === "about" && (
                    <>
                        <Link href="/experience">Experience</Link>
                        <Link href="/resume">Resume</Link>
                    </>
                )}
                {name.name === "resume" && (
                    <>
                        <Link href="/about">About</Link>
                        <Link href="/experience">Experience</Link>
                    </>
                )}
            </div>
        </div>
      </div>
    );
  }