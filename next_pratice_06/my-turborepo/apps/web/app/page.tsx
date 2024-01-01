"use client";

import React, {useState,useEffect,useCallback,useRef, use} from 'react';


export default function Page(): JSX.Element {

  // define state
  const [lenght, setLenght] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState('');


// ref hook
const passwordRef=useRef(null);


  const  generatePassword = useCallback(() => {
    let characters = '';
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const symbol = '!@#$%^&*()_+';
    if (numbers) characters += number.charAt(Math.floor(Math.random() * number.length+1));
    if(symbols) characters += symbol.charAt(Math.floor(Math.random() * symbol.length+1));

    // FOR LOOP
    for (let i = 0; i <= lenght; i++) {
      characters += char.charAt(Math.floor(Math.random() * char.length+1));
    }
    setPassword(characters);
    
  },[lenght,numbers,symbols,setPassword])


useEffect(() => {
  generatePassword();
}, [generatePassword,lenght,numbers,symbols])

// function to copy passsword
const copyPassword=useCallback(()=>{
  const passwordRef = useRef<HTMLInputElement>(null);
  passwordRef.current?.select();
window.navigator.clipboard.writeText(password);
},[password])

  return (
   <>
   <div className='flex flex-col items-center justify-center'>

   <h1 className='text-4xl text-center'>Password Generator</h1>
   <div className='flex flex-row items-center justify-center'>
    <input type="text"  value={password}readOnly  placeholder='password' ref={passwordRef}/>
    <button onClick={copyPassword}>Copy</button>
   </div>

   <div className='flex flex-row items-center justify-center'>
    <label>Length</label>
    <input type="range" min={8} max={24} value={lenght} onChange={(e) => setLenght(e.target.value)} />
    <div>{lenght}</div>
   </div>
   <div className='flex flex-col items-center justify-center'>
    <label>Numbers</label>
    <input type="checkbox" defaultChecked={numbers} onChange={() => setNumbers((prev)=>!prev)} />
    <label>Symbols</label>  
    <input type="checkbox" defaultChecked={symbols} onChange={() => setSymbols((prev)=>!prev)} />
   </div>
   <div>
    <button onClick={generatePassword}>Generate</button>
   </div>

   </div>
   </>
  );
}
