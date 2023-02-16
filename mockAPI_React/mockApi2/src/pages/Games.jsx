import './Games.css'

import React, { useEffect, useState } from 'react'

const Games = () => {

    
    const baseUrl='https://zelda.fanapis.com/api/games'

    const [gameTitle, setGameTitle] = useState([])
    let [games, setGames] = useState ([])
    

    useEffect(()=>{
        const getResultTitles = async()=>{
            const res = await fetch(`${baseUrl}`);
            const data = await res.json();

            setGames(data.data)
            setGameTitle(data.data)
        }
       
       
        getResultTitles()
    },[])

    

    const filterGames =(keyword)=>{
        
        const filter= games.filter((game)=>game.name.toLowerCase().includes(keyword));
        setGameTitle(filter)
    }


  return (


    <div>
        <main className='games'>
        <input type='text' placeholder='search by title' onChange={(ev)=>{filterGames(ev.target.value.toLowerCase())}}/>
        <div>
        {gameTitle.length? gameTitle.map((game)=><figure key={game.id}>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <h4>{game.developer}</h4>
            <h4>{game.released_date}</h4>
            </figure>):
            <h4>No existen coincidencias</h4>}
        </div>
        </main>
    </div>
  )
}

export default Games