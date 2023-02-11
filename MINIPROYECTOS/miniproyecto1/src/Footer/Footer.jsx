import Section from "../Section";
import './Footer.css';



const Footer =()=>{
    const author="Virginia";
    const copyright = "NEOLAND";

    
    return (
        <div>
            <Section>{author}</Section>
            <Section>{copyright}</Section>
        </div>
    )
}
export default Footer;