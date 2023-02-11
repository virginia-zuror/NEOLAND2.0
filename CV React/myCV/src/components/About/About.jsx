import './About.css'

const About =({about})=>{
 return <div className='about'>   
{about.map((element)=> {
    return(<p key={JSON.stringify(element)}>{element.info}</p>) 
   
    })}
    </div>

    
}
     
  


export default About