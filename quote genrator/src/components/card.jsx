import React from 'react'
import "./style.css"
import { useState ,useEffect } from 'react'
import quoteGenrator from '../api'
function card() {
    // define the state
    const [quote, setQuote] = useState('')
    useEffect(()=>{
        generator()

    },[])
    async function generator(){
        const data = await quoteGenrator()
        setQuote(data)
    } 


  return (
    <div className='main__class'>
        <div className='container'>
            <div className='card'>
                <h2>{quote}</h2>
                <button onClick={generator}>Genrate the Quote</button>
            </div>

        <img className='img' src="https://raw.githubusercontent.com/adrianhajdin/advice_app/master/src/images/city.jpg" alt="img" />
        </div>
    </div>
  )
}

export default card