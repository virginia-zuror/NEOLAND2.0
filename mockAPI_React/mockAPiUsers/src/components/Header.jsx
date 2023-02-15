import './Header.css'

import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <nav>
      <img src='https://res.cloudinary.com/do7bnejaz/image/upload/v1676480293/xaviers_instute/Xavier_Institute_Logo_uckgsi.png' alt='academy logo'/>
      <ul>
        <li><NavLink to={''}>Home</NavLink></li>
        <li><NavLink to={'Users'}>Users</NavLink></li>
        <li><NavLink to={'About'}>About</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header