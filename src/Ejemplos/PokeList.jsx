import { useEffect, useState } from "react"
import PokeCard from './PokeCard'
// import './PokeApi.css'

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
            <h2 className="text-8xl text-center">PokeList</h2>
            <hr />

            <p className="text-6xl m-40 text-center">
                En Asteroid somos fanaticos de Pokemon, Cual es tu favorito??
            </p>
            

            <button onClick={handleAnterior} className="bg-green-300 hover:bg-green-700 hover:scale-110 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-64 m-10 text-5xl text-center rounded-full p-6 border-2 border-black">Anterior</button>
            <button onClick={handleSiguiente} className="bg-green-300 hover:bg-green-700 hover:scale-110 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-64 m-10 text-5xl text-center rounded-full p-6 border-2 border-black">Siguiente</button>
            
            <div className="flex flex-row flex-wrap border-4 border-black p-4 justify-center bg-amber-50 rounded-3xl">
                {
                    list.map((el) => <PokeCard key={el.name} url={el.url}/> )
                }
            </div>
            <button onClick={handleAnterior} className="bg-green-300 hover:bg-green-700 hover:scale-110 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-64 m-10 text-5xl text-center rounded-full p-6 border-2 border-black">Anterior</button>
            <button onClick={handleSiguiente} className="bg-green-300 hover:bg-green-700 hover:scale-110 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-64 m-10 text-5xl text-center rounded-full p-6 border-2 border-black">Siguiente</button>
            
        </div>
    )

}


export default PokeList