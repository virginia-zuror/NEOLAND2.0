import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import App from './App'
import './index.css'
import Characters from './pages/Characters'
import { ColorThemeContextProvider } from './components/Context/ColorThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <ColorThemeContextProvider>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/games' element={<Games/>}/>
          <Route path='/characters' element={<Characters/>}/>
          <Route path='*' element={
            <main>
              <h1>404-Page not found</h1>
            </main>
          }/>
        </Route>
      </Routes>
      </ColorThemeContextProvider>
    </BrowserRouter>
  
  </React.StrictMode>,
)
