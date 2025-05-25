import { auth } from '@/auth'
import React from 'react'

type Props = {}

const Dashboard =async (props: Props) => {

    const session = await auth();


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-orange-300 to-red-400">
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-2xl px-12 py-16 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-500 to-red-600 mb-4 animate-pulse">
          Hello {session?.user?.name}
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Welcome to your dashboard! 🍕
        </p>
      </div>
    </div>
  )
}

export default Dashboard