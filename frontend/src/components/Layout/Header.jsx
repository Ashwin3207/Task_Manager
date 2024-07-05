import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';
import axios from 'axios';
const Header = () => {

  const {loggedIn,user,logout} = useAuth();


  return (
    <div className='nav-bar'>
        <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <li>About</li>
                <li>Contact Me</li>
        </ul>
        <ul>
        {loggedIn ? (
       <> <li> Hello, {user.name}</li>
       <li onClick={logout}>Logout</li>
          </>
       
        ) : (
          <NavLink to='/login'><li>Login</li></NavLink>
        )}
        
         <NavLink to='/register'><li>Register</li></NavLink>
        </ul>
    </div>
   
  )
}

export default Header
