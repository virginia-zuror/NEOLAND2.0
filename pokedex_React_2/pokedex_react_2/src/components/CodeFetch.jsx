import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce';


import './CodeFetch.css'
 
const CodeFetch = () => {
    const [filter, setFilter]=useState("");
     const [debounceInput] = useDebounce(filter, 500) ;
    
    const [charactersFiltered, setCharactersFiltered]=useState([]);

    useEffect(()=>{
        const getCharactersFiltered=async ()=>{
            const getCharactersList= await fetch (`https://pokeapi.co/api/v2/pokemon/${filter}`);
            const getCharactersListToJSON = await getCharactersList.json();

            return{
                ...getCharactersListToJSON,
                name: getCharactersListToJSON.name,
                order: getCharactersListToJSON.order,
                id: getCharactersListToJSON.id,
                image: getCharactersListToJSON.sprites.front_shiny,
                type: getCharactersListToJSON.types[0].type.name,
                move: getCharactersListToJSON.moves[0].move.name,
                ability1: getCharactersListToJSON.abilities[0].ability.name,
                ability2:getCharactersListToJSON.abilities[1]?.ability.name,
            };
        };

        getCharactersFiltered().then((character)=> {
            
           setCharactersFiltered([character])});
    }, [debounceInput]);




  return (
    <div className='code'>
        <input value={filter} onChange={(ev)=> setFilter(ev.target.value) } />
       
        <div className='charactersPrinted'>
        {filter ? charactersFiltered.map((character)=>(
                <figure key={character.id}>
                    <h1>{character.name.toUpperCase()}</h1>
                    <p>Type: {character.type}</p>
                    <p>Move:{character.move}</p>
                    <p>Ability: {character.ability1}, {character.ability2}</p>
                    <span>{character.order}</span>
                    <img src={character.image} alt={character.name}/>
                    </figure>
            )):<figure className='alternative'>Introduce el nombre de un Pokémon</figure>
        }    
        </div>
        


    </div>
  )
}

export default CodeFetch