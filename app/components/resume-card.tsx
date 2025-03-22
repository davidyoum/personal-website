import React from 'react';
import Image from 'next/image';
interface Subtitle {
  time: string;
  company: string;
}

interface WorkCardProps {
  title?: string;
  subtitle: Subtitle; // Updated type definition
  image: string;
}

export default function WorkCard({ title, subtitle, image }: WorkCardProps) {
  return (
    <div className='flex justify-center'>
      <div className='w-full bg-[#141414] rounded-md overflow-hidden'>
        {/* Image Banner */}
        <div className='w-full p= h-[100px] mt-4 relative flex items-center justify-center'>
          <Image 
            src={image} 
            alt={title || ''}
            fill
            className="object-contain p-2"
          />
        </div>

        <div className='p-2'>
          <div className='text-2xl font-inter font-bold'>{subtitle.company}</div>
          <div className='text-lg font-inter'>{title}</div>
          <div className='text-md font-inter'>{subtitle.time}</div>
        </div>
      </div>
    </div>
  );
}