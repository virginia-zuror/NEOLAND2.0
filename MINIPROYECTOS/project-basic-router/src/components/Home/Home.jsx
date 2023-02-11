import { Link } from "react-router-dom";

import "./Home.css";


const Home=()=>{
    return <div>
        <h1>Bienvenido/a</h1>
        <h3>Visita la lista</h3>
        <Link to='listado'>Listado</Link>
    </div>
}

export default Home;