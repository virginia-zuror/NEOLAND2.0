import './Home.css'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState('');
    const navigate = useNavigate()


  return (
    <main className='home'>
        
            <h1>Welcome!</h1>
            <input type='text' onChange={(ev)=>{setUser(ev.target.value)}}/>
            <button onClick={(ev)=>{
                localStorage.setItem('user', user)
                navigate ('/games')}}>Login</button>
       
    </main>
  )
}

export default Home