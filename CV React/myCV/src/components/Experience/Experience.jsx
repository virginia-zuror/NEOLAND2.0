

import './Experience.css'

const Experience =({experience})=>{
   return <div className='experience'>
    {experience.map((item)=>{
        return(
            <article key={JSON.stringify({item})}>
                <h3>{item.name}</h3>
                <p>{item.date}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
            </article>
        )
    })}
    
   </div>
}
export default Experience