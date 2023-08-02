import { useEffect, useState } from "react"
import PokeCard from './PokeCard'
import './PokeApi.css'

const PokeList = () => {
    const [list, setList] = useState ([])
    const [pagination, setPagination] = useState({
        next: null,
        previous: null
    })
    const [url, seturl] = useState (`https://pokeapi.co/api/v2/pokemon`)

    console.log(pagination)
    console.log(list)

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setList(data.results)
                setPagination({
                    next: data.next,
                    previous: data.previous
                })
            })
    }, [url])

    const handleSiguiente = () => {
        pagination.next && seturl(pagination.next)
    }
    const handleAnterior = () => {
        pagination.previous && seturl(pagination.previous)
    }
    

    return (
        <div className="container my-5 Pokelist">
            <h2>PokeList</h2>
            <hr />

            <button onClick={handleAnterior} className="btn btn-primary mx-1">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-1">Siguiente</button>
            
            <div className="row pokelist-container">
                {
                    list.map((el) => <PokeCard key={el.name} url={el.url}/> )
                }
            </div>

            <button onClick={handleAnterior} className="btn btn-primary mx-1">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-1">Siguiente</button>
            
        </div>
    )

}


export default PokeList