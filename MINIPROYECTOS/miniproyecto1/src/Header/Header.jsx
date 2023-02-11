import Title from '../Title/Title'
import Image from '../Image'
import './Header.css'

const Header =()=>{

    const title="Personajes de Rick y Morty"
    const src= "https://images.squarespace-cdn.com/content/v1/528252b7e4b00150d03a4848/1503802782958-Q5WZPEPRRHQTXE7H6O0Q/RickAndMorty_RaMportal1500.png";
    const alt='rick y morty';
    return(
        <nav>
            <Image src={src} alt={alt}/>
            <Title>{title}</Title>
        </nav>
    )

}

export default Header;