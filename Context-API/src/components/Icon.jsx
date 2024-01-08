import React from 'react'
import { useContext } from 'react';
import UserContext from '../context/UserContext'
function Icon() {
    const {user}=useContext(UserContext);
if(!user) return <div> Not Icon</div>


return <div>{user.email}</div>
}

export default Icon