import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import About from './components/About/About'
import Home from './components/Home/Home'
import Listado from './components/Listado/Listado'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>}/>
          <Route path='listado' element={<Listado/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='*' element={
              <main>
                <p>404-Not Found!</p>
              </main>
              }>
          </Route>
        </Route>  
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
