
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {
  

  return (
    <Layout>
      <Header/>
      <Outlet/>
      <Footer/>
    </Layout>
    
  )
}

export default App
