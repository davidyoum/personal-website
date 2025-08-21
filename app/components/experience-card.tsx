'use client'
import React, { useState } from 'react';

interface ExperienceCard {
  company: string;
  title: string;
  year: string;
  link?: string;
  color?: keyof typeof colorClasses;
  points?: string[];
}
  
// Define a mapping of color names to Tailwind classes
const colorClasses = {
  'thorlabs-red': 'hover:text-[#d13239]',
  'pennstate-blue': 'hover:text-[#002d62]',
  'ctfguide-blue': 'hover:text-[#0076fe]',
  'tally-sports-green': 'hover:text-[#00ff30]',
  'discord-blue': 'hover:text-[#5865f2]',
  'daska-blue': 'hover:text-[#00c0ff]',
  'black': 'hover:text-[#000000]',
};

export default function ExperienceCard({ company, title, year, link, color, points }: ExperienceCard) {
  const [isOpen, setIsOpen] = useState(false);
  const hoverClass = color ? colorClasses[color] : '';

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-center'>
      {link ? (
        <a href={`/experience/${link}`} className={`w-full ${hoverClass}`}>
          <div className='w-full bg-transparent rounded-md'>
            <div className='inline-flex items-center text-md sm:text-xl gap-2 font-inter'>
              <div>{year}</div> - 
              <div>{title}</div>
            </div>
            <div className='text-4xl font-tinos'>{company}</div>
          </div>
        </a>
      ) : (
        <div 
          className={`w-full bg-transparent rounded-md ${hoverClass} cursor-not-allowed`}
          onClick={toggleAccordion}
        >
          <div className='flex justify-between items-center'>
            <div>
              <div className='inline-flex items-center text-md sm:text-xl gap-2 font-inter'>
                <div>{year}</div> - 
                <div>{title}</div>
              </div>
              <div className='text-4xl font-tinos'>{company}</div>
            </div>
            {points && (
              <div className="text-gray-500">
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            )}
          </div>
          {points && isOpen && (
            <ul className="mt-4 space-y-2 list-disc list-inside">
              {points.map((point, index) => (
                <li key={index} className="text-sm text-gray-600">{point}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}