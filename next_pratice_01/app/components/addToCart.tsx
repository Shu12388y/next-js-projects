'use client'
import React from 'react'

function addToCart() {
	return (
		<div>
			<button onClick={()=>{
				console.log("clicked")
			}}>Add To Cart</button>
		</div>
	)
}

export default addToCart