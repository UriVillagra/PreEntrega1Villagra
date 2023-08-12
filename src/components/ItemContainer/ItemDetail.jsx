// import './ItemContainer.css'


export const ItemDetail = ({item}) => {

    <li key={item.id}></li>

    return [
        <div className="flex flex-col justify-center bg-green-100">
            <h2 className="text-6xl">{item.nombre}</h2>
            <hr />
            <img className="w-1/4 m-8" src={item.img} alt={item.nombre} />
            <p className="text-4xl w-1/2 " >{item.descripcion}</p>
            <p className="text-5xl m-6 w-1/2">Precio: ${item.precio}</p>
            <button className="mx-8 bg-blue-300 hover:bg-blue-700 hover:scale-110 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-64 m-10 text-3xl text-center rounded-full p-6 border-2 border-black">Agregar al Carrito</button>
        </div>
    ]

}



