"use client"


import React, { useState } from "react";

export default function Home() {
  // define a state
  const [counter, setCounter] = useState(15);

  // upcounter function
  function upCounter() {
    // use the updater function for state to ensure correct updates
    setCounter((prevCounter) => prevCounter + 1);
  }

  // downcounter function
  function downCounter() {
    // use the updater function for state to ensure correct updates
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="mt-4">Counter</h2>
        <h2>{counter}</h2>
        <div className="flex items-center gap-4 ">
          <button onClick={upCounter} className="bg-yellow-400 p-2 mt-2 text-black-100">
            Up value
          </button>
          <button onClick={downCounter} className="bg-yellow-400 p-2 mt-2 text-black-100">
            Down value
          </button>
        </div>
      </div>
    </>
  );
}
