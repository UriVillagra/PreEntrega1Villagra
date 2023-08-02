import './ItemContainer.css'


export const ItemDetail = ({item}) => {

    <li key={item.id}></li>

    return [
        <div className="col-12 container my-5 detail-container">
            <h2 className="detail-title">{item.nombre}</h2>
            <img className="detail-img" src={item.img} alt={item.nombre} />
            <p className="detail-txt" >{item.descripcion}</p>
            <p className="detail-precio">Precio: ${item.precio}</p>
            <button>Agregar al Carrito</button>
        </div>
    ]

}



