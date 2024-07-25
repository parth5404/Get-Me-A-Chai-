"use client"
import React from 'react'
import { ArrowRight} from 'lucide-react'
import Link from 'next/link'
import { useSession,signIn,signOut } from 'next-auth/react'

const login = () => {
  const { data: session } = useSession()
  if(session) {
    <div>
      <button onClick={()=>{signOut}} className="justify-center"> signOut</button>
    </div>
  }
  
    
  
  
  return (
    <div className=" flex-col space-y-4 flex items-center justify-center min-h-screen">
      <button className="w-64 bg-white border border-gray-300 justify-center text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center hover:bg-gray-100">
        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path d="M24 9.5c3.54 0 6.45 1.22 8.42 3.23l6.24-6.24C34.82 2.94 29.7 0 24 0 14.73 0 7.1 6.05 3.7 14.71l7.3 5.66C12.38 15.28 17.68 9.5 24 9.5z" fill="#EA4335" />
          <path d="M46.15 24.55c0-1.2-.1-2.35-.3-3.48H24v7.25h12.6c-.56 3.02-2.31 5.52-4.89 7.22l7.3 5.66C43.75 36.05 46.15 30.8 46.15 24.55z" fill="#4285F4" />
          <path d="M12.92 28.18l-7.3-5.66C3.36 25.52 2.8 27.68 2.8 30c0 3.32 1.23 6.35 3.26 8.66l7.3-5.66c-1.04-1.5-1.6-3.3-1.6-5.22 0-1.93.57-3.73 1.6-5.23z" fill="#FBBC05" />
          <path d="M24 48c6.3 0 11.57-2.13 15.42-5.78l-7.3-5.66c-2.1 1.4-4.7 2.24-8.12 2.24-6.08 0-11.2-4.13-13.08-9.76l-7.3 5.66C6.4 42.38 14.39 48 24 48z" fill="#34A853" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
        Sign in with Google
      </button>
      <button onClick={() => signIn("github")} className="w-64 bg-gray-800 justify-center text-white font-semibold py-2 px-4 rounded inline-flex items-center hover:bg-gray-700">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 .5C5.372.5 0 5.872 0 12.5c0 5.29 3.438 9.767 8.207 11.348.6.113.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.757-1.332-1.757-1.087-.744.083-.729.083-.729 1.204.085 1.837 1.237 1.837 1.237 1.068 1.832 2.803 1.303 3.488.997.108-.774.417-1.303.759-1.603-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.237-3.221-.124-.303-.536-1.523.118-3.176 0 0 1.008-.323 3.3 1.23a11.512 11.512 0 0 1 3.003-.404c1.02.005 2.046.137 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.654 1.653.242 2.873.118 3.176.77.839 1.237 1.911 1.237 3.221 0 4.61-2.806 5.625-5.48 5.92.43.372.812 1.104.812 2.227 0 1.607-.015 2.905-.015 3.302 0 .318.192.694.801.577C20.565 22.264 24 17.79 24 12.5 24 5.872 18.628.5 12 .5z" clipRule="evenodd" />
        </svg>
        Sign in with GitHub
      </button>
      <button className="w-64 bg-blue-600 text-white justify-center font-semibold py-2 px-4 rounded inline-flex items-center hover:bg-blue-700">
        Sign in with Email
      </button>
    </div>
  )
  
}

export default login
