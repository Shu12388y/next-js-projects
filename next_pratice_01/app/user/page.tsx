import React from 'react';

interface User {
  id: number;
  name: string;
}

async function page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'});
  const users: User[] = await res.json();

  return (
    <div>
      hello world this is a file routing
      <p>{new Date().toLocaleTimeString()}</p>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id}. {user.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
