import './Characters.css'

import React, { useEffect, useState } from 'react'

const Characters = () => {

  const baseUrl='https://zelda.fanapis.com/api/characters';

  const [characters, setCharacters] = useState([]);

  const [filterCharacters, setFilterCharacters] = useState([]);

  useEffect(()=>{
    const getAllCharacters = async()=>{
      const res = await fetch(`${baseUrl}`);
      const data = await res.json();

      setCharacters(data.data);
      setFilterCharacters(data.data);
    }

    getAllCharacters()
  },[])

  const getFilterCharacters =(keyword)=>{
    const filter=filterCharacters.map((character)=>{
      character.name.toLowerCase().includes(keyword);
      character.gender.toLowerCase().includes(keyword);
      setFilterCharacters(filter);
    })
  }

  return (
    <main className='characters'>
      <input type='text' placeholder= 'search character' onChange={(ev)=> getFilterCharacters(ev.target.value.toLocaleLowerCase())}/>
      <div>
        {characters.length? characters.map((character)=><figure key={character.id}>
        <h2>{character.name}</h2>
        <h4>{character.gender}</h4>
        <h4>{character.race}</h4>
        <p>{character.description}</p></figure>):
        <h4>No existen coincidencias</h4>}
      </div>
    </main>
  )
}

export default Characters