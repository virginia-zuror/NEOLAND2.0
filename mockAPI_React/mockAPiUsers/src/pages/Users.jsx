import './Users.css'


import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { Link } from 'react-router-dom';

const Users = () => {
 
const {alumns, loaded} = useContext(UserContext);

const [powerFilter, setPowerFilter] = useState(null);

const getByPower=()=>{
  alumns?.map((alumn)=> alumn.powers.map((power)=>{
    power.name.includes(powerFilter) ? console.log(alumn.name):
  console.log('nada');}))

}


 useEffect(()=>{
  getByPower()
  console.log(powerFilter)
 },[powerFilter]) 
  

 /*  return (
    <main className='users'>
      <h2>Our students</h2>
      <input type= 'text' placeholder='search by power' onChange={(e)=>{setPowerFilter(e.target.value)
      }}/>
      {powerFilter? alumns.map((alumn)=>alumn.powers.map((power)=>
    power.name.includes(powerFilter)? 
    <div>{alumn.name}</div>):
      <div>{loaded?(alumns.map((alumn)=><figure key={alumn.id}>
          <h3><Link to={`/${alumn.id}`}>{alumn.name}:</Link></h3>
          <h4>{alumn.city}</h4>
          </figure>)):(<h1>Loading mutants...</h1>)}
      </div>}
    </main>
  )
} */

export default Users