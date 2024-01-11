import Image from 'next/image'

export default function Home() {
  const obj = {
    name: 'John',
    age: 24,
    address: 'USA'
  }
  return (
   <>
   <h1>Welcome to Home Page</h1>
   <div>
    <h2>{obj.name}</h2>
    <h2>{obj.age}</h2>
    <h2>{obj.address}</h2>
   </div>

   </>
  )
}
