import './Header.css'

import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { colorThemeContext } from '../Context/ColorThemeContext'

const Header = () => {
  const {colorChange}=useContext(colorThemeContext)
  return (
    <nav>
        <ul>
            <li><NavLink to=''>Home</NavLink></li>
            <li><NavLink to='games'>Games</NavLink></li>
            <li><NavLink to='characters'>Characters</NavLink></li>
            <button onClick={()=>colorChange()}><img src='https://www.adhesivosnatos.com/wp-content/uploads/2017/03/pegatina-zelda-triforce-triangulos.png' alt='icon zelda color theme'/></button>
        </ul>
    </nav>
  )
}

export default Header