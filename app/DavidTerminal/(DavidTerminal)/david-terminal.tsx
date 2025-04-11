'use client'
import { useState, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface User {
  user: string;
}

export default function DavidTerminal({ user }: User) {
    const [command, setCommand] = useState("")

    const handleEnter = () => {
        if (command === "?help") {
            console.log("Help")
        }
    }

    return (
        <div className="h-screen flex flex-col p-2">
            <div className="flex flex-col flex-grow">
                <div className="flex text-sm font-bold justify-between mb-1">
                    <div className="flex items-center gap-2">
                        {user === "Leah" ? (
                            <>
                                <Image 
                                src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGhOpX2yoFzuMQ2VRsogi1HXNPeh7bAGkWjU5I" 
                                width={24} 
                                height={24} 
                                alt="Leah's Terminal" 
                                />
                                <h1>DavidTerminal v1.2.0</h1>
                            </>
                        ) : (
                            <h1>DavidTerminal v1.2.0</h1>
                        )}
                    </div>

                    <div>
                        Hello, {user}
                    </div>
                </div>

                <div className="flex-grow w-full bg-[#141414] text-white p-4 rounded-lg overflow-y-auto">
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
                <Textarea onChange={(e) => setCommand(e.target.value)} placeholder="Enter ?help to know more" className="bg-[#141414] resize-none border-0" />
                <Button onClick={handleEnter}>Enter</Button>
            </div>
        </div>
    )
}