import React from 'react'
import Link from "next/link"
function navBar() {
	return (
		<div>
			<nav>
   <Link href="/">Home</Link>

   <Link href="/about">About</Link>
   <Link href="/project">Project</Link>
   <Link href="/user">User</Link>


     
   </nav>
		</div>
	)
}

export default navBar