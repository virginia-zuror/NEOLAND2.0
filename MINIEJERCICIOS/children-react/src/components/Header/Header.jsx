import Title from "../Title/Title";


const Header=()=>{
    const tituloCharacters= "Personajes"
    const tituloStory="La Historia"
    const tituloNews= "Noticias"

    return(
        <header>
            <ul>
                <li>
                    <Title>{tituloCharacters}</Title>
                </li>
                <li>
                    <Title>{tituloStory}</Title>
                </li>
                <li>
                    <Title>{tituloNews}</Title>
                </li>
            </ul>
        </header> 
    )
}

export default Header;