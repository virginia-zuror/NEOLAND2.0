import { NavLink, Outlet } from 'react-router-dom'
import './App.css'


function App() {
 

  return (
    <div className="App">
    <nav>
      <NavLink to=''>Home</NavLink>
      <NavLink to='listado'>Listado</NavLink>
      <NavLink to='about'>About</NavLink>
    </nav>
    <main>
      <Outlet />
    </main>
     
    </div>
  )
}

export default App
