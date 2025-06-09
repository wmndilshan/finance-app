"use client"

import { useUser } from "@clerk/nextjs"

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser()

  if (!isLoaded) return null

  return (
    <div>
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        Welcome Back{isLoaded ? ", " : " "} {user?.firstName} 👋
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        This is your Financial Overview Report
      </p>
    </div>
  )
}