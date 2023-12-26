'use client'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
let count:number=0
const notify = () =>{ 
	count=count+1;
	if(count>=3){
	toast('counter is now 3')
}
else{
	toast('Here is your toast.')
}
};

function AboutPage() {
	toast("Hello World")
	return (
		<div>
			  <button onClick={notify}>Make me a toast</button>
      <Toaster />
			<h1>About Page</h1>
		</div>
	)
}

export default AboutPage