import React from "react";


import { useEffect } from "react";

function Card() {
    const data=[]
    useEffect(async() => {
        const res = await fetch('http://localhost:8000/jokes')
        data = await res.json()
    }, [data])


   
   
  return (
    <div>

Hello
{data}
    </div>
  )
}

export default Card