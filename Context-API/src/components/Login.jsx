import React from "react";
import style from "./style.module.css"

import UserContext from "../context/UserContext";
import { useState, useContext , useEffect} from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled,setDisabled]=useState(false)

  const { setUser } = useContext(UserContext);

  useEffect(()=>{
    if(email.length>0 && password.length>0){
        setDisabled(false)
    }
    else{
        setDisabled(true)
    }

  },[email,password])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({email,password})
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