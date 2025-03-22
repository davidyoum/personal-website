import React from 'react';

interface Subtitle {
    time: string;
    company: string;
  }
  
  interface WorkCardProps {
    title: string;
    subtitle: Subtitle; // Updated type definition
  }
  
  export default function WorkCard({ title, subtitle}: WorkCardProps) {
    return (
      <div className='flex justify-center'>
          <div className='w-full bg-transparent rounded-md'>
              <div className=''>
                  <div className='inline-flex items-center text-lg sm:text-2xl gap-3 font-inter'>
                      <div>{subtitle.time}</div> - 
                      <div>{title}</div>
                  </div>

                  <div className='text-4xl sm:text-6xl font-inter font-bold'>{subtitle.company}</div>
              </div>
          </div>
      </div>
    );
  }