import { useEffect, useState } from 'react';
import './Characters.css';

const Characters =()=>{

    const [characterList, setCharacterList]=useState([]);

    useEffect(()=>{
        (async () =>{
            let data= await fetch('https://rickandmortyapi.com/api/character/')
            .then((res)=> res.json());

            setCharacterList(data.results)
        }) ();
    }, []);


    return(
        characterList.map((character) => character.status==="Alive"?
            <figure key={character.id} className='alive'>
                <img src={character.image} alt={character.name}/>
                <h2>{character.name}</h2>
                <h3>{character.status}</h3>
                <p>{character.origin.name}</p>
            </figure>:
            <figure key={character.id} className='dead'>
            <img src={character.image} alt={character.name}/>
            <h2>{character.name}</h2>
            <h3>{character.status}</h3>
            <p>{character.origin.name}</p>
        </figure> )
    )
};

export default Characters;