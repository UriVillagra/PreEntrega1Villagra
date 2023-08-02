import { Link } from "react-router-dom"
import '../ItemCard/ItemCard.css'

const ItemCard = ({item}) => {

    return (
        <div >
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} />
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <Link to={`/detail/${item.id}`} className="Boton-mas"> Ver Mas</Link>
        </div>
    )
}


export default ItemCard 