import { HOBBIES } from "./HOBBIES/HOBBIES";


const PrintHobbies=()=>{
    return(
    <figure>
    <h1>{HOBBIES.read.title}</h1>
    <h2>{HOBBIES.read.authorName}</h2>
    </figure>
    )
    

}
export default PrintHobbies;