import './Hero.css'

const Hero =({hero})=>{
    return (
        <div className='hero'>
            <img src={hero.image} alt='Virginia'/>
            <h2>{hero.name} {hero.surname}</h2>
            <p>{hero.city}🌞</p>
            <p>{hero.birthDate}🎂</p>
            <p>📧{hero.email}</p>
            <p>📱{hero.phone}</p>
            <div>
            <a href={hero.gitHub}><img src='/icons/github.png' alt='gitHub icon'/></a>
            <a href={hero.linkedIn}><img src='/icons/linkedin.png' alt='linkedIn icon'/></a>
            </div>
        </div>
    )
}

export default Hero