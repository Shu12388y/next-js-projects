export default async function UserDataId(id: string) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}
