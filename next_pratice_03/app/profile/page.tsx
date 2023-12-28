"use client"

import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function profilePage() {
const router =  useRouter()
async function logout(){
  try {

    const res = await axios.get("/api/users/logout");
    toast.success("Success")
    router.push("/login")

    
  } catch (error:any) {
    toast.error(error)
  }

}

  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-screen py-2'>
      <h2>

      profilePage
      </h2>
      <hr />
    <button onClick={logout} className='bg-blue-500 mt-4 hover:bg-blue-800 text-white font-bold py-2 px-4'>Logout</button>
    <Toaster/>
    </div>
    </>
  )
}

export default profilePage