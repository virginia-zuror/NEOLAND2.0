import './FetchPokemons.css'

import React, { useState } from 'react'
import axios from 'axios';




const FetchPokemons = () => {

const [pokemonName, setPokemonName] = useState("");
const [character, setCharacter] = useState({
            name: '',
            id:'',
            abilities:'' ,
            type:'' ,
            height: '',
            weight:'' ,
            image:'' ,
            imageArt:'' ,
});
const [nameChosen, setNameChosen]= useState(false);

    
    const getPokemonByName = ()=>{ 
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((res)=>{
            setCharacter({
            name: pokemonName,
            id:res.data.id,
            abilities: res.data.abilities[0].ability.name,
            type: res.data.types[0].type.name,
            height: parseInt(res.data.height)*10,
            weight: parseInt(res.data.weight)/10,
            image: res.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
            imageArt: res.data.sprites.other["official-artwork"].front_default,

            });
            setNameChosen(true);
        })
        
    }




  return (
    <div className='Figure'>
    <input type='text' placeholder='Escribe aquí' onChange={(ev)=>{setPokemonName(ev.target.value.toLowerCase())}}/>
    {pokemonName && <button onClick={getPokemonByName}><img src='/icons/gaming.png'/></button>}
    {!nameChosen ? <h1>Debes introducir el nombre de un Pokemon</h1>:    
         <figure key={character.id}>
        <h1>{character.name.toUpperCase()}</h1>
        <p>Nº: {character.id}</p>
        <p>Type: {character.type}</p>
        <p>Abilities: {character.abilities}</p>
        <p>{character.height} cm</p>
        <p>{character.weight} Kg</p>
        <img src={character.imageArt}/>
    </figure>}
    </div>
  )
}

export default FetchPokemons