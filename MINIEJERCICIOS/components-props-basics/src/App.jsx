
import React from "react";
import './App.css'
import { Title,SubTitle,Paragraph,Image } from "./components/index";



function App() {
  const text='Texto de prueba para el ejercicio';
  const subtext = 'Esto es un subtitulo';
  const img ='https://www.nationalgeographic.com.es/medio/2021/10/02/ghost_5965d71c_800x600.jpg';
  const alt='leopardo por la noche';
  const paragraph='texto de un parrafo';
  return (
    <div className="App">
    <Title text={text}/>
    <SubTitle text={subtext}/>
    <Image src={img} alt={alt}/>
    <Paragraph text={paragraph}/>
    </div>
  )
}

export default App
