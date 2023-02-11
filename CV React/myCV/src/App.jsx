
import { useState } from 'react'
import './App.css'
import { CV } from './CV/Cv'
import Hero from './components/Hero/Hero';
import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import {Languages} from './components/More/More'
import  {Habilities}  from './components/More/More';
import { NavLink, Outlet } from 'react-router-dom';
import VetPage from './pages/VetPage/VetPage';


const {hero, education, experience, languages, habilities} = CV;

function App() {
 const [showEducation, setShowEducation]= useState(true)


  return (
    <div className="App">
      <Hero hero={hero}/>
      <About about={hero.aboutMe}/>
      <hr className='solid'></hr>
      <div className='btns'>
      <button className='btnEduc' onClick={()=> setShowEducation(true)}>Estudios</button>
      <button className='btnEduc' onClick={()=> setShowEducation(false)}>Experiencia</button>
      </div>
      {showEducation==true? <Education education={education}/>: <Experience experience={experience}/>}
           
      <Languages languages={languages}/>
      <Habilities habilities={habilities}/>
    
    </div>
  )
}

export default App
