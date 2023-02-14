import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {

    const [registered, setRegistered] = useState(null);
    const inputLogin = useRef('')
    const navigate=useNavigate();


  return (
    <main><div className='login'>
        <input type='text' placeholder='Introduce un alias' ref={inputLogin}/>
        <button className='buttonLogin' onClick={(e)=>{
            setRegistered(inputLogin.current.value)
            localStorage.setItem('user', inputLogin.current.value)
            navigate('/Home');
        }}><img src='/icons/music.png' alt='login button'/></button>
    </div></main>
  )
}

export default Login