import React from 'react'
import {option} from "../api/auth/[...nextauth]/option";
import { getServerSession } from 'next-auth';
import Link from 'next/link';
async function page() {
    const session = await getServerSession(option);
  return (
    <div>
        <nav>
            <Link href="/">Home</Link>
            {
                session ? ( 
                <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>) : (<Link href="/api/auth/signin">Login</Link>)
            }
        </nav>
        <h1>Welcome to home</h1>
    </div>
  )
}

export default page