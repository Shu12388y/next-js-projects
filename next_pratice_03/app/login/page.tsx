"use client"


import Link from "next/link";
import React,{useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';





function loginPage() {

// toaster 
// const tryAgain = () => toast('Try Again email or password is wrong');
const router = useRouter()


	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [user, setUser] = React.useState({
		email: "",
		password: ""
	  });
const [buttonDisabled,setbuttonDisabled]=useState(false)

	  useEffect(()=>{
		if(user.email.length>0 && user.password.length > 0){
			setbuttonDisabled(false)
		}
		else{
			setbuttonDisabled(true)
		}


	  },[user])



	  
async function login(){
try{
	const response = await axios.post("/api/users/login",user)
	if(response){
		console.log("success")
		toast.success("sucess")
		router.push("/profile")

	}
	else{
			toast.error("error")

	}

}
catch(error){
	console.log(error)
	toast.error("error")

	router.push("/signup")
}


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
		  {buttonDisabled? "Enter your details" : "Login"}
		</button>
		<Toaster />

		<Link href="/signup">Sign up if you are new</Link>
	  </div>
	)
}

export default loginPage