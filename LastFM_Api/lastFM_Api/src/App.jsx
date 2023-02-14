
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout/Layout'
import { Outlet } from 'react-router-dom'



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
