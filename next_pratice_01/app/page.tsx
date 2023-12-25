// Home Page


import Link from "next/link"
export default function Home() {
  return (
    <main>
   

      <h1>
        Header
      </h1>

      <div>
      	<Link href="/user">User route </Link>
      	<Link href="/product">product route </Link>

      </div>
    </main>

  )
}
