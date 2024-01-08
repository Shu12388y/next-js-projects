import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./Login"
import Profile from './Profile'

const Navbar = () => {
  return (
     <Router>
      
       
        <Route path="/login" Component={Login}> 
          Login 
        </Route>
        <Route path="/profile" Component={Profile}> 
          Profile 
        </Route>
    
      
    </Router>
   
  );
};

export default Navbar;
