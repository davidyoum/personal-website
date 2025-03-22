'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div suppressHydrationWarning>
        <div className="flex pt-5 font-inter justify-between items-center w-3/4 mx-auto">
          <div>
              <div className="hidden sm:block font-sans text-xl">
                  David Youm
              </div>
              <div className="hidden sm:block text-sm text-slate-500">
                  Full-stack Developer
              </div>
          </div>
  
          {/* Desktop Navigation */}
          <div className="space-x-12">
              <Link href="/">Work</Link>
              <Link href="/about">About</Link>
          </div>
  
          <div className="inline-flex space-x-6">
              <a href="/resume" className="hidden md:flex items-center gap-2">
                  Resume
                  <Image 
                      src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                      alt="External link icon"
                      width={16}
                      height={16}
                      priority
                  />
              </a>
              
              {/* Social links dropdown - responsive design */}
              <div className="relative">
                  <button 
                      onClick={() => setIsOpen(!isOpen)}
                      className="relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
                  >
                      <Image 
                          src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644c8981f87a7036b4c7fa64_icon-%40.svg"
                          alt="@"
                          width={27}
                          height={27}
                          className={`absolute ${!isOpen ? "opacity-100" : "opacity-0"} transition-opacity`}
                      />
                      <Image 
                          src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/645a01ff46a1cf3d85d90049_icon-close.svg"
                          alt="Close"
                          width={27}
                          height={27}
                          className={`absolute ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity`}
                      />
                  </button>
                  <div className={`absolute right-0 mt-2 w-48 py-2 bg-white/20 backdrop-blur-md rounded-md shadow-xl transition-all duration-300 ${
                      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}>
                      {/* Resume link - show only on medium and smaller screens */}
                      <a href="/resume" target="_blank" className="md:hidden flex items-center gap-2 px-4 py-2 text-white mx-2 rounded-md hover:bg-white/10">
                          Resume
                          <Image 
                              src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                              alt="External link icon"
                              width={16}
                              height={16}
                              priority
                          />
                      </a>
                      <a href="https://github.com/davidyoum" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white mx-2 rounded-md hover:bg-white/10">
                          GitHub
                      </a>
                      <a href="https://www.linkedin.com/in/davidyoum/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white mx-2 rounded-md hover:bg-white/10">
                          LinkedIn
                      </a>
                      <a href="https://www.instagram.com/davidyoum_/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white mx-2 rounded-md hover:bg-white/10">
                          Instagram
                      </a>
                      <a href="https://x.com/davidyoum_" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white mx-2 rounded-md hover:bg-white/10">
                          Twitter
                      </a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }