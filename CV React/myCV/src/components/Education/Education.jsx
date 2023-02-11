import './Education.css'

const Education =({education})=>{
    
    return <div className='education'>
        <hr className='solid'></hr>
            {education.map((item)=>{
                return (<article key={JSON.stringify(item)}>
                    
                    <h3>{item.name}</h3>
                    <p>{item.date}</p>
                    <p>{item.where}</p>
                </article>)
            })}
         
         </div>
    
}

export default Education