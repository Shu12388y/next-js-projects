"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';



function signUpPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [buttonDisabled, setbuttonDisabled] = React.useState(false);
  const userExist = () => toast('User already exist');
  const success = () => toast('Success');

  async function signup() {
    try {
      const response =  await axios.post("/api/users/signup",user);
      console.log(response.data);
      router.push("/login");


      
    } catch (error) {
      console.log(error)
      userExist()
      
    }
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setbuttonDisabled(false);


    } else {
      setbuttonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2>Signup Page</h2>
      <hr />
      <label htmlFor="username" className="mt-6">
        Username
      </label>
      <input
        className="p-2 border border-gray-300  rounded-lg mb-4 focus:outline-none focus:border-gray-500"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
        placeholder="username"
      />

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
        onClick={signup}
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "You can't sign up" : "sign up"}
      </button>
      <Toaster />
      <Link href="/login">Login here if account is already created</Link>
    </div>
  );
}

export default signUpPage;
