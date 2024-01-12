import React from 'react'
import {option} from "../api/auth/[...nextauth]/option";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
async function page() {
    const session = await getServerSession(option);
    {if(!session){
        redirect('/api/auth/signin?callbackUrl=/profile')
    } 
    }
  return (
    <div>
        <h1>Welcome</h1>
        <div>
            <h2>Profile</h2>
            <p>Profile page</p>
            <h3 className='name'>{session?.user?.name}</h3>
            <h3 className='email'>{session?.user?.email}</h3>
            <h3 className='image'><img src={session?.user?.image} alt="" /></h3>
        </div>
<button><Link href="/api/auth/signout?callbackUrl=/">Logout</Link></button>
    </div>
  )
}

export default page