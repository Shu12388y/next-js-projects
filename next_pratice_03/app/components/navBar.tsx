"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
function navBar() {




  return (
    <>
    <nav className='flex justify-center mt-3'>
        <Link className='flex-initial w-20' href="/login">Login</Link>
        <Link className='flex-initial w-20' href="/signup">SignUp</Link>
        <Link className='flex-initial w-20' href="/">Home</Link>
        <Link className='flex-initial w-20' href="/profile">Profile</Link>

    </nav>
    </>
  )
}

export default navBar