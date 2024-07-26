"use client"
import React from 'react'
import Image from "next/image";

import { useUser,UserButton } from "@clerk/nextjs";
import Link from 'next/link';
const Navbar = () => {
  const {user,isSignedIn}=useUser();
  return (
    
      <nav className=' text-white flex justify-between items-center px-4 h-16 bg-black'>
        <div className='items-center'>Get me a chai {console.log("Home clicked")} {console.log(process.env.GITHUB_ID)}</div>

      <div className='flex col-span-1 gap-4'>
  
       {isSignedIn?
        <UserButton/> : 
        <Link href={'/sign-in'}>
<button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Log In</button></Link>}
{user?<Link href={'/'}></Link>:
<Link href={'/sign-up'}>
<button  className="text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button></Link>}

      </div>
        
      </nav>
    
  )
}

export default Navbar
