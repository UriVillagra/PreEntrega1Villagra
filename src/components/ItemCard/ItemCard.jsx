import { Link } from "react-router-dom"
// import '../ItemCard/ItemCard.css'

const ItemCard = ({item}) => {

    return (
        <div className="flex flex-col m-10 bg-green-200 p-5 rounded-lg border-4 border-inherit">
            <h2 className="text-3xl m-2">{item.nombre}</h2>
            <img className="w-96" src={item.img} alt={item.nombre} />
            {/* <p className="text-3xl">{item.descripcion}</p> */}
            <p className="text-3xl">Precio: ${item.precio}</p>
            <Link to={`/detail/${item.id}`} className="hover:scale-110 bg-blue-300 hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-40 m-10 text-3xl text-center rounded-lg p-2 border-2 border-black"> Ver Mas</Link>
        </div>
    )
}


export default ItemCard 