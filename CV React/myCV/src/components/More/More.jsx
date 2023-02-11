import './More.css'


   export const  Languages=({languages})=>{
    
    return <div className='languages'>
        <h3>Idiomas:</h3>
        {languages.map((item)=>{
            return (<article key={JSON.stringify(item)}>
                <h4>{item.language}</h4>
                <p>Nivel escrito: {item.wrlevel}</p>
                <p>Nivel oral: {item.splevel}</p>
            </article>)
        })}

    </div>       
          
    }

    export const  Habilities =({habilities})=>{

        return (<section className='habilities'>
            <h3>Habilidades:</h3>
            {habilities.map((hability)=>{return (<p key={JSON.stringify({hability})}>{hability}</p>)})}
           
        </section>)
    }
   


