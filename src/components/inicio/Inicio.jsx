import { useState } from "react"
import "./inicio.css"




export const Inicio = () => {


    


    return (
        <div className="Inicio-container">

            <h2>Bienvenidos</h2>
            <hr />
            {/* <div className="Product-container">
                {
                    productos.map((prod) => (
                        <div  key={prod.id}>
                            <h2>{prod.nombre}</h2>
                            <img src={prod.img} alt={prod.nombre} />
                            <p>{prod.descripcion}</p>
                            <p>Precio: ${prod.precio}</p>
                            <button className="btn btn-primary mx-1"> Ver Mas</button>
                        </div>

                    ))
                }
            </div> */}
        </div>
    )
}