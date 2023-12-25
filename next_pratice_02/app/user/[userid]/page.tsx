export default async function UserDataId(id: string) {
  try {
    const userData: Promise<User> = userDataId(id);
    const userid = await userData;
    console.log(userid);
    return (
      <div>
    
        {userid}
      </div>
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    return <div>Error fetching user data</div>;
  }
}
