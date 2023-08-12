import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../../helpers/PedirDatos"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {ItemDetail} from "./ItemDetail"



export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState (true)
    const { itemId } = useParams()

    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(r => {
                setItem( r.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => setLoading(false))
    }, [])

    return [
        <div className="bg-green-10 flex justify-center">
            {
                loading ? <h2>Cargando...</h2>
                : <ItemDetail key={item.id} item={item}/>
            }
        </div>
    ]
}


