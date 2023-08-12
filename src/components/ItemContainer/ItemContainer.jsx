import { useEffect, useState } from "react"
// import './ItemContainer.css'
import { pedirDatos } from "../../../helpers/PedirDatos"
import { useParams } from "react-router-dom"
import ItemList from "../itemList/ItemList"


export const ItemContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoryId} = useParams()
    const [loading, setLoading] = useState(true)
    console.log( categoryId )
    console.log(productos)



    useEffect (() => {

        setLoading (true)
        pedirDatos()
            .then((res) => {
                if (categoryId) {
                setProductos(res.filter(prod => prod.category === categoryId))
                }else {
                setProductos(res)
                }
            })
            .catch((error) => {
            console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    return (
        <div className="bg-cyan-50">
            {
                loading ? <h2 className="text-4xl">Cargando...</h2> 
                : <ItemList productos={productos}/>
            }
        </div>
    )
}