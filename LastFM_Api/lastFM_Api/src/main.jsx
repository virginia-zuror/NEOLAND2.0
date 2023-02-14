import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Artists from './components/pages/Artists'
import Users from './components/pages/Users'
import Login from './components/pages/Login'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App/>}>
          {localStorage.getItem('user')?<Route index element={<Home/>}/>:
          <Route index element={<Login/>}/>}
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Artists' element={<Artists/>}/>
          <Route path='/Users' element={<Users/>}/>
          <Route path='*' element={
            <main>
              <h1>404 - NOT FOUND</h1>
            </main>
          }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
