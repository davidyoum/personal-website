import React from 'react';
import Image from 'next/image';

interface ExperienceCardInterface {
  title?: string;
  company: string;
  time: string;
  image: string;
  link?: string;
}

export default function ExperienceCard({ title, company, time, image, link }: ExperienceCardInterface) {
  return (
    <a href={link} className='flex flex-row gap-4'>
      <div className='rounded-md'>
        <div className='h-[100px] w-[100px] relative'>
          <Image 
            src={image} 
            alt={title || ''}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div>
        <div className='text-3xl font-tinos'>{company}</div>
        <div className='text-lg font-inter'>{title}</div>
        <div className='text-md font-inter'>{time}</div>
      </div>
    </a>
  );
}