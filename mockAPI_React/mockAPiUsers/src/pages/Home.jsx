import './Home.css'

import React, { useState } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const registerInput = useRef(null);


  return (
    <main className='home-main'>
      <h1>Welcome to Xavier's Institute Webpage</h1>
      <div className='input'>
      <input type='text' ref={registerInput} onChange={(ev)=> setUser(ev.target.value)}/>
      <button onClick={()=> {
        localStorage.setItem('user', registerInput.current.value);
        navigate('/About');
        }}>Enter</button>
      </div>
    </main>
  )
}

export default Home