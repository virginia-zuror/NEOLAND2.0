import React, { useEffect, useState } from 'react'
import './Artists.css'
import {useDebounce} from 'use-debounce'


const Artists = () => {

    const APIKEY= '88d09abd9037b51fd61e9ccc60d66b1a';
    const [artist, setArtist] = useState({});
    const [artistName, setArtistName] = useState('Cher');
    const [letType] = useDebounce(artistName,500)

    const getArtistInfo = async ()=>{
        const res = await fetch (`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${APIKEY}&format=json`);
        const data= await res.json();
        setArtist(data.artist);
    }

    useEffect(()=>{
        getArtistInfo();
        console.log(artist);
    },[letType])



  return (
    <main>
    <div className='search'>
        <input type='text' placeholder='Busca por nombre' onChange={(e)=>setArtistName(e.target.value)}/>
    </div>
        <figure>
        <h2>{artist.name}</h2>
        {artist.ontour==0?<h3>Not on tour</h3>:<h3>On tour!</h3> }
        <h4>Similar artists:</h4>
        <div className='similar'>
        {artist.similar? artist.similar.artist.map((artistsimilar)=>
            <a key={artistsimilar.name} href={artistsimilar.url}>{artistsimilar.name}</a>
            ): <p>Not other coincidences.</p>}</div>
        <h4>Listeners: {artist.stats?.listeners}</h4>
        <h4>Playcount: {artist.stats?.playcount}</h4>
        <h4>Categories:</h4>
        <div className='tags'>
        {artist.tags?.tag.map((category)=><p key={category.name}>{category.name}</p>)}</div>
        </figure>
    </main>
  )
}

export default Artists