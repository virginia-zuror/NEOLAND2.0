import './Figure.css';

import React from 'react'


const Figure = ({data}) => {
  return (
    <figure>
        <h2>{data.title}</h2>
        <img src={data.url} alt={data.title}/>
        <h3>{data.date}</h3>
        <p>{data.explanation}</p>
    </figure>
  )
}

export default Figure