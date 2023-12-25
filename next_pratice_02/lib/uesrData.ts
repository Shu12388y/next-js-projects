export default async function UserData(){
	let response=await fetch("https://jsonplaceholder.typicode.com/users")
	if(!response.ok){
		throw new Error("Error")
		
	}

	let data = await response.json()



	return data
}