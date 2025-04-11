'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import DavidTerminal from "./(DavidTerminal)/david-terminal"

export default function Leah() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState("")

  const handlePasswordCheck = () => {
    if (password === process.env.NEXT_PUBLIC_LEAH_PASSWORD) {
      setIsAuthenticated(true)
      setUser("Leah")
    } else if (password === process.env.NEXT_PUBLIC_ANYONE_PASSWORD) {
      setIsAuthenticated(true)
      setUser("Anyone")
    }
  }

  return (
    <div>
      {!isAuthenticated ? (
        <div className="flex flex-col justify-center items-center h-screen gap-6 w-[300px] mx-auto">
          <div className="text-center gap-4">
            <h1 className="text-2xl font-bold">DavidTerminal</h1>
            <p className="text-sm text-gray-500">Running from DavidOS</p>
          </div>
          
          <div className="flex gap-4">
            <Input 
              type="password" 
              placeholder="Enter Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#141414] resize-none border-0"
            />
            <Button onClick={handlePasswordCheck}>Enter</Button>
          </div>
        </div>
      ) : (
        <div>
          <DavidTerminal user={user} />
        </div>
      )}
    </div>
  )
}
