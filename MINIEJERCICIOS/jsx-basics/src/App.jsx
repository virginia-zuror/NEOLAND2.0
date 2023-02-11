import { useState } from 'react'

import './App.css'
import CharactersCard from './components/CharactersCard/CharactersCard';



function App() {
  const x = 20;
  const time = <p>{x>6 && x<13?'Buenos días!': x>12 && x< 20? 'Buenas tardes' : 'Buenas noches'}</p>;


  const miArray = ['Michael Scott', 'Jim Halper', 'Pam Beesly', 'Dwight Schrute', 'Angela Martin', 'Jan Levinson', 'Kevin Malone', 'Phylis Vance', 'Stanley Hudson', 'Toby Flenderson', 'Andy Bernard', 'Oscar Martinez', 'Meredith Palmer', 'Creed Bratton', 'Kelly Kapoor' ]
  const personaje = miArray.map((item)=> <p key={item}>{item}</p>);

  const miArrayObject = [
    {id: 1,
    name: 'Bilbo Baggins',
    race: 'Hobbit',
    location: 'Bag End'},
    {id: 2,
    name: 'Gandalf',
    race: 'Istar',
    location: 'All Middle Earth'},
    {id: 3,
    name: 'Thorin Oakenshield',
    race: 'Dwarf',
    location: 'Erebor'},
    {id: 4,
    name: 'Balin',
    race: 'Dwarf',
    location: 'Moria'},
    {id: 5,
    name: 'Dwalin',
    race: 'Dwarf',
    location: 'Blue Mountains'},
    {id: 6,
    name: 'Fili',
    race: 'Dwarf',
    location: 'Blue Mountains'},
    {id: 7,
    name: 'Kili',
    race: 'Dwarf',
    location: 'Blue Mountains'},
    {id: 8,
    name: 'Oin',
    race: 'Dwarf',
    location: 'Blue Mountains'},
    {id: 9,
    name: 'Gloin',
    race: 'Dwarf',
    location: 'Blue Mountains'},
    {id: 10,
    name: 'Ori',
    race: 'Dwarf',
    location: 'Iron Mountains'},
    {id: 11,
    name: 'Dori',
    race: 'Dwarf',
    location: 'Iron Mountain'},
    {id: 12,
    name: 'Nori',
    race: 'Dwarf',
    location: 'Iron Mountains'},
    {id: 13,
    name: 'Bifur',
    race: 'Dwarf',
    location: 'Iron Mountains'},
    {id: 14,
    name: 'Bofur',
    race: 'Dwarf',
    location: 'Iron Mountains',},
    {id: 15,
    name: 'Bombur',
    race: 'Dwarf',
    location: 'Iron Mountains'}
  ];
 const [on , setOn] = useState(true);

const ifOnTrue = '🌞';
const ifOnFalse = '🌙';
const check = on== true? ifOnTrue:ifOnFalse;
 

  return (
    <div className="App">
      <div>
        <h1>Hola</h1>    
        {time}
        {personaje}
        {miArrayObject.map((character) => (
        <CharactersCard character={character} key={character.id} />))}
        <button 
            onClick={()=>{setOn(!on)}}>Cambia!</button>
            {check}
            {console.log(on)}
      </div>
    </div>
  )
}

export default App
