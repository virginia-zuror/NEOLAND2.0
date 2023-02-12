import { useState } from 'react'

import './App.css'
import FetchPokemons from './components/FetchPokemons/FetchPokemons'

function App() {
  

  return (
    <div className="App">
      <nav><img src='https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg' alt='Pokedex'/></nav>
      <main>
      
      <FetchPokemons/>
      </main>
    </div>
  )
}

export default App
