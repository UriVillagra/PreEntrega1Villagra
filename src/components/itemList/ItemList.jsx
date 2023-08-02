import { Link } from "react-router-dom"
import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({productos}) => {

    return (
        <div className="catalogo_conteiner">
            <h2 className="catalogo_conteiner_txt">PRODUCTOS</h2>
            <hr />
            <div>
                <h3>Categorias:</h3>
                
                <div className="categorias-container">
                    <Link className="btn-categorias" to="/Productos">Todos</Link>
                    <Link className="btn-categorias" to="/Productos/teclados">Teclados</Link>
                    <Link className="btn-categorias" to="/Productos/mause-pad">Mause Pad</Link>
                    <Link className="btn-categorias" to="/Productos/monitores">Monitores</Link>
                    <Link className="btn-categorias" to="/Productos/pc">PCs</Link>
                
                </div>
                <hr />
                
            </div>
            <div className="Product-container">
                
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                }
            </div>

        </div>
    )
}


export default ItemList