import { useEffect, useState } from "react"
import './PokeApi.css'

const PokeCard = ({url}) => {
    const [pokemon, setPokemon] = useState (null)


    useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            setPokemon(data)
        })

    }, [])

    const handleSiguiente = () => id < 1010 ? setId(id + 1) : setId(id - 1009)
    const handleAnterior = () => id > 1 ? setId(id - 1) : setId(id + 1009)
    

    return (
        <div className="m-4">
            {
                pokemon && 
                <div className="">
                    <img className="pokemons-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <h4 className="pokemon-name">{pokemon.name}</h4>
                </div>
            }
        </div>
    )

}

export default PokeCard