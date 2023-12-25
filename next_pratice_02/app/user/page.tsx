import React from 'react'
import Link from "next/link"
import userData from "@/lib/uesrData"
async function UserData() {
	const userdata:Promise<User[]>=userData()
	const data=await userdata
const content=(
	<section>
		<h2>
			<Link href="/">GO Back to Home</Link>
		</h2>
		<div>
			{data.map(user=>{
				return (
					<p key={user.id}>
						<Link href={`/user/${user.id}`}>{user.name}</Link>
					</p>
				)
			})}

		</div>
			

	</section>
	)




	return content
}

export default UserData