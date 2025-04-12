'use client';

import { useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();

  return(
    <div>
      <div className="flex flex-col font-tinos items-center justify-center gap-4 h-screen">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>

        <p>I dont think I added this page yet.</p>

        <button onClick={() => router.back()} className="text-blue-500 flex items-center gap-2">
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
          Go Back
        </button>
      </div>
    </div>
  )
}