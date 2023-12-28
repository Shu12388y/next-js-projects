"use client"


import Link from "next/link";
import React,{useState} from 'react';
import {useRouter} from "next/navigation";
import { Axios } from "axios";





function loginPage() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [user, setUser] = React.useState({
		email: "",
		password: ""
	  });
	  
async function login(){

}
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
		<h2>Login Page</h2>
		<hr />
  
		<label htmlFor="email">email</label>
		<input
		  className="p-2 border border-gray-300  rounded-lg mb-4 focus:outline-none focus:border-gray-500"
		  type="email"
		  id="email"
		  required
		  value={user.email}
		  onChange={(e) => {
			setUser({ ...user, email: e.target.value });
		  }}
		  placeholder="email"
		/>
  
		<label htmlFor="password">Password</label>
		<input
		  className="p-2 border border-gray-300  rounded-lg mb-4 focus:outline-none focus:border-gray-500"
		  type="password"
		  id="password"
		  value={user.password}
		  onChange={(e) => {
			setUser({ ...user, password: e.target.value });
		  }}
		  placeholder="password"
		/>
  
		<button
		  onClick={login}
		  className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
		>
		  Sign Up
		</button>
		<Link href="/signup">Sign up if you are new</Link>
	  </div>
	)
}

export default loginPage