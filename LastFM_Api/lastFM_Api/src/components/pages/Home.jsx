import React, { useEffect, useState } from 'react'

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
    console.log(topMusic);
  }, [])
  


  return (
    <div>
      {topMusic.map((artist)=><figure key={artist.name}>{artist.name}</figure>)}
    </div>
  )
}

export default Home