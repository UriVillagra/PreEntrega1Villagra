import { Link } from "react-router-dom"
import ItemCard from "../ItemCard/ItemCard"
// import './ItemList.css'

const ItemList = ({productos}) => {

    return (
        <div className="container">
            <h2 className="text-7xl text-center">PRODUCTOS</h2>
            <hr />
            <div>
                <div>
                    <h3 className="text-5xl">Categorias:</h3>
                </div>
                
                
                <div className="flex container space-x-40 justify-center">
                    <Link className="bg-blue-300 hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-40 m-10 text-3xl text-center rounded-3xl p-2 border-2 border-black btn-categorias" to="/Productos/teclados">Teclados</Link>
                    <Link className="bg-blue-300 hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-40 m-10 text-3xl text-center rounded-3xl p-2 border-2 border-black btn-categorias" to="/Productos/mause-pad">Mause Pad</Link>
                    <Link className="bg-blue-300 hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-40 m-10 text-3xl text-center rounded-3xl p-2 border-2 border-black btn-categorias" to="/Productos/monitores">Monitores</Link>
                    <Link className="bg-blue-300 hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-40 m-10 text-3xl text-center rounded-3xl p-2 border-2 border-black btn-categorias" to="/Productos/pc">PCs</Link>
                    <Link className="bg-blue-300 hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-40 m-10 text-3xl text-center rounded-3xl p-2 border-2 border-black btn-categorias" to="/Productos">Todos</Link>
                </div>
                <hr />
                
            </div>
            <div className="flex flex-row flex-wrap justify-between">
                
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                }
            </div>

        </div>
    )
}


export default ItemList