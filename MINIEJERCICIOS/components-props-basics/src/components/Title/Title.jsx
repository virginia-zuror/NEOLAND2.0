import './Title.css'
import { getEntries } from '../data';


const Title = ()=>{
    const entry = getEntries(id)
    const title = entries.map((entry) => {entry.title})
     
    return (
        <h1>{title}</h1>

    )
};

export default Title;