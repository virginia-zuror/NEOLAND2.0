import React, { useEffect, useState } from 'react'
import './Home.css'


const Home = () => {
  const APIKEY= '88d09abd9037b51fd61e9ccc60d66b1a';
  const [topMusic, setTopMusic] = useState([]);


  const getTopMusic = async()=>{
    const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${APIKEY}&format=json`)
    const data = await res.json();
      setTopMusic(data.topartists.artist)
  }
  useEffect(() => {
    getTopMusic();
    
  }, [])
 


  return (
    <main>
    <h2>Top 10 Artists in Spain</h2>
    <div className='topMusic'>
      <figure>      
        <a href={topMusic[0]?.url}><h2>{topMusic[0]?.name}</h2></a>
        <h4>Listeners: {topMusic[0]?.listeners}</h4>
      </figure>
      <figure>        
        <a href={topMusic[1]?.url}><h2>{topMusic[1]?.name}</h2></a>
        <h4>Listeners: {topMusic[1]?.listeners}</h4>
      </figure>
      <figure>    
        <a href={topMusic[2]?.url}><h2>{topMusic[2]?.name}</h2></a>
        <h4>Listeners: {topMusic[2]?.listeners}</h4>
      </figure>
      <figure>   
        <a href={topMusic[3]?.url}><h2>{topMusic[3]?.name}</h2></a>
        <h4>Listeners: {topMusic[3]?.listeners}</h4>
      </figure>
      <figure>        
        <a href={topMusic[4]?.url}><h2>{topMusic[4]?.name}</h2></a>
        <h4>Listeners: {topMusic[4]?.listeners}</h4>
      </figure>
      <figure>       
        <a href={topMusic[5]?.url}><h2>{topMusic[5]?.name}</h2></a>
        <h4>Listeners: {topMusic[5]?.listeners}</h4>
      </figure>
      <figure>        
        <a href={topMusic[6]?.url}><h2>{topMusic[6]?.name}</h2></a>
        <h4>Listeners: {topMusic[6]?.listeners}</h4>
      </figure>
      <figure>        
        <a href={topMusic[7]?.url}><h2>{topMusic[7]?.name}</h2></a>
        <h4>Listeners: {topMusic[7]?.listeners}</h4>
      </figure>
      <figure>
        <a href={topMusic[8]?.url}><h2>{topMusic[8]?.name}</h2></a>
        <h4>Listeners: {topMusic[8]?.listeners}</h4>
      </figure>
      <figure>
        <a href={topMusic[9]?.url}><h2>{topMusic[9]?.name}</h2></a>  
        <h4>Listeners: {topMusic[9]?.listeners}</h4>
      </figure>
   </div>
   </main>
  )
}

export default Home