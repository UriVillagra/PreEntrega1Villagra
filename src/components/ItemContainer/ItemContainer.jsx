import { useState } from "react"
import './ItemContainer.css'
import { MOCK__DATA } from "../../data/MOCK_DATA"


const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(MOCK__DATA)
        }, 2000)
    })
}

export const ItemContainer = () => {
    const [productos, setProductos] = useState([])
    console.log(productos)

    pedirDatos()
        .then((res) => {
            setProductos(res)
        })
        .catch((error) => {
            console.log(error)
        })


    


    return (
        <div className="catalogo_conteiner">

            <h2>ItemContainer</h2>
            <hr />
            <div className="Product-container">
                {
                    productos.map((prod) => (
                        <div  key={prod.id}>
                            <h2>{prod.nombre}</h2>
                            <img src={prod.img} alt={prod.nombre} />
                            <p>{prod.descripcion}</p>
                            <p>Precio: ${prod.precio}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}