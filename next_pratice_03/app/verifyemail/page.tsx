"use client"
import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'


function emailVerifyPage() {

// define some states
const [token, setToken]= useState("");
const [verify,setVerify]= useState(false);


    // verify the user
    async function verifyMail(){


        try{
            const res = await axios.post('/api/users/emailVerify',{token});



        }

        catch(error:any){
            console.log(error)
            toast.error("error")
        }

    }

// grab the token
useEffect(()=>{

const url = window.location.search.split('=')[1];
setToken(url || "")
setVerify(true)
    
},[])


// verify the user

useEffect(()=>{
if(token.length>0){
    verifyMail()
}
},[token])


  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='text-4xl'>Verify Email</h1>
        <h2 className='p-2 bg-orange-500 text-black '>
            {token ? `${token}`: "no token"}

        </h2>
        {verify && (
            <div>
                <h2 className='text-2xl'>
                    Email Verified
                </h2>
                <Link href="/login" className='text-blue-500'>Login</Link>
            </div>
        ) }

    </div>
    
    </>
  )
}

export default emailVerifyPage