import './APOD.css';

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Figure from '../Figure/Figure';


const APOD = () => {
    const today = new Date(Date.now()).toISOString().slice(0,10);
    
    const [photo, setPhoto] = useState({});
    const [date, setDate] = useState(today);

    const nasaKey = 'JexIwvqib73ZdzInaOjuEM3geebIgQCNSgJg6tvW';
    const url = `https://api.nasa.gov/planetary/`

    useEffect(()=>{
        const getPhoto = async () =>{
            const data = await axios.get(`${url}apod?date=${date}&api_key=${nasaKey}`) 
        setPhoto(data.data);
        console.log(data.data.hdurl)
        }
        getPhoto();
    },[date]);

const inputDate = (e) =>{
    setDate(e.target.value.toLocaleString());
};



  return (
    <div className='apod'>
        <input type='date' onChange={inputDate} />
        
        <Figure data={photo}/>    
    </div>
   
  )
}


export default APOD