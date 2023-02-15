import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import './UsersDetail.css'


const UsersDetail = () => {

    const[alumn, setAlumn] = useState({});
    const {alumns} = useContext(UserContext);
    const{id} = useParams();

    const showAlumnDetails =()=>{
        setAlumn(alumns.find((alumn)=>alumn.id === id));
    }

    useEffect(()=>{
        showAlumnDetails()
        
    },[]);

  return (
    <main className='usersDetail'>
    <figure>
        <h3>{alumn?.name}</h3>
        <h4>{alumn?.city}</h4>
        <p>age: {alumn?.age} yrs</p>
        <p>{alumn?.phone}</p>
       
        {alumn?.payment?<p>This alumn is free of debts</p>:
        <p className='debts'>This alumn has debts</p>} 
        <figcaption>
        <h3>Powers: </h3>
       {alumn?.powers?.map((power)=><h4 key={power.name}>{power.name}</h4>)}
       </figcaption>
    </figure>
    </main>
  )
}

export default UsersDetail