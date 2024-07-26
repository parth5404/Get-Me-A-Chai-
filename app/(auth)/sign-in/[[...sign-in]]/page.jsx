import { SignIn } from "@clerk/nextjs";
import React from 'react'

export default function Page() {
  return (
<section className="min-h-screen flex items-center justify-center">
  <SignIn />
</section>

  )
  ;
}