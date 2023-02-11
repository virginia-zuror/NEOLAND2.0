import './Image.css';

const Image =(props)=>{
    return (

        <img src={props.src} alt={props.alt} className="image"/>

    )

};

export default Image;
