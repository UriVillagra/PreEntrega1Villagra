import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/PedirDatos"


export const useProductos = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then(r => setProductos(r))
            .catch(e => console.log(e))
    })



    return { productos }
}