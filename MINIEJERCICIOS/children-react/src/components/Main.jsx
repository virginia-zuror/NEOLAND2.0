
import SubTitle from "./SubTitle/SubTitle";
import Image from "./Image/Image";
import Title from "./Title/Title";





const Main =()=>{
   

    
    const books=[
            {
            name: 'La Comunidad del Anillo',  
            url: "https://quelibroleo.com/images/libros/libro_1322009582.jpg",
            alt:"Portada libro La Comunidad del Anillo",
            description: ""
        },
        {
            name: 'Las Dos Torres',
            url:"https://lacasitadeloslibros.com/wp-content/uploads/2022/06/las-dos-torres-port.jpg",
            alt:"Portada libro Las Dos Torres",
            description: ""
        },
        {
            name:'El Retorno del Rey',
            url:"https://www.estudioenescarlata.com/media/img/portadas/_visd_0001JPG01LTC.jpg",
            alt:"Portada libro El Retorno del Rey",
            description: ""
        },
        {
            name:'El Hobbit',
            url:"https://static.wikia.nocookie.net/eldragonverde/images/0/06/Hobbitportada.jpg",
            alt:"Portada El Hobbit",
            description: ""
        },
        {
            name:'El Silmarilion',
            url:"https://m.media-amazon.com/images/I/91wA4QqjNDL.jpg",
            alt:"Portada El Silmarilion",
            description: ""
        },
        {
            name:'Los Hijos de Hurin',
            url:"https://static.wikia.nocookie.net/eldragonverde/images/c/c1/Hijos-de-hurin-tolkien.jpg",
            alt:"Portada Los Hijos de Húrin",
            description: ""
        },
        {
            name:'Beren y Lúthien',
            url:"https://sbslibreria.vteximg.com.br/arquivos/ids/294301-1000-1000/9789505472055.jpg",
            alt:"Portada Beren y Lúthien",
            description: ""
        },
        {
            name:'Los Cuentos Inconclusos de Númenor y la Tierra Media',
            url:"",
            alt:"Portada Cuentos Inconclusos",
            description: ""
        },
        {
            name:'La Caída de Númenor',
            url:"https://m.media-amazon.com/images/I/51Xl0DxAJ9L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
            alt:"",
            description: "",
        }
    ]
   
    const imageBook= "https://m.media-amazon.com/images/I/91HZ7o3iP6L.jpg"
    const altBook="Portada La Caída de Númenor";

    return (
        <figure key={books.map((book)=>book.name)}>
            <Title>{books.map((book)=> book.name)}</Title>
            <SubTitle>{books.map((book)=> book.description)}</SubTitle>
            <Image src={imageBook} alt={altBook}/>
        </figure>
)}

export default Main;