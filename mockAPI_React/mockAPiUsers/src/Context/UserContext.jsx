import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();
export const UserContextProvider=({children})=>{
  
  const [alumns, setAlumns] = useState([]);
  const [loaded, setLoaded] = useState(false)
  
  const getAlumns = async ()=>{
    const res= await fetch('https://63ecfc2231ef61473b2daf12.mockapi.io/users');
    const data = await res.json();
    console.log('peticion')
   setAlumns(data) 
   setLoaded(true)
  }

  useEffect(()=>{
   getAlumns()
   
  }, []);

  return (
    <UserContext.Provider value={{alumns, setAlumns, loaded}}>
      {children}
    </UserContext.Provider>
  );
};