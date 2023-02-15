import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import Users from './pages/Users'
import About from './pages/About'
import UsersDetail from './pages/UsersDetail'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import { UserContextProvider } from './Context/UserContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/Users' element={<Users/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/:id' element={<UsersDetail/>}/>
          <Route path='*' element={
            <main><h2>404 - Not Found</h2></main>
          }/>
        </Route>
      </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
