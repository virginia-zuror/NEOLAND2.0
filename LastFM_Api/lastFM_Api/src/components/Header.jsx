import './Header.css'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



const Header = () => {

  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <h1>Radio.FM</h1>
        <ul>
          <li><NavLink to=''>Home</NavLink></li>
          <li><NavLink to='Artists'>Artists</NavLink></li>
          <li><NavLink to='Users'>Users</NavLink></li>
          <li><NavLink to= 'Login'>Login</NavLink></li>
          <li><button onClick={(e)=>{
                localStorage.removeItem('user')
                navigate('/Login')}}><img src='/icons/export.png' alt='Logout icon'/></button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header