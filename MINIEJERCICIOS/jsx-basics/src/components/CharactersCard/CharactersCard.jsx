const CharactersCard = ({character})=> {
    return (
        <figure>
            <h1>{character.name}</h1>
            <p>{character.race}</p>
            <p>{character.location}</p>
        </figure>
    );
};

export default CharactersCard;