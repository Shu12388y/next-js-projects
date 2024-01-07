import React from "react";
import style from "./style.module.css"

import UserProvider from "../context/UserProvider";
import { useState, useContext , useEffect} from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled,setDisabled]=useState(false)


  useEffect(()=>{
    if(email.length>0 && password.length>0){
        setDisabled(false)
    }
    else{
        setDisabled(true)
    }

  },[email,password])

  const handleSubmit = () => {
    // const { setuser } = useContext(UserProvider);
    // console.log(email,password)
  };
  return (
    <>
      <h1>Login Form</h1>
      <div className={style.form}>

      <input
      className={style.width}
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
            setEmail(e.target.value);
        }}
        />
      <input
className={style.width}
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
            setPassword(e.target.value);
        }}
        />
      <button onClick={handleSubmit} disabled={disabled}>Login</button>
        </div>
    </>
  );
};


export default Login