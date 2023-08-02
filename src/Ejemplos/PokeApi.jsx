import { useEffect, useState } from "react"
import './PokeApi.css'

const PokeApi = () => {
    const [pokemon, setPokemon] = useState (null)
    const [id, setId] = useState (1)
    console.log (pokemon)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })
    }, [id])

    const handleSiguiente = () => id < 1010 ? setId(id + 1) : setId(id - 1009)
    const handleAnterior = () => id > 1 ? setId(id - 1) : setId(id + 1009)
    

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
            <hr />

            {
                pokemon && 
                <div>
                    <h4 className="pokemon-name">{pokemon.name}</h4>
                    <img className="pokemons-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            }

            <button onClick={handleAnterior} className="btn btn-primary mx-1">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-1">Siguiente</button>
            
        </div>
    )

}

export default PokeApi