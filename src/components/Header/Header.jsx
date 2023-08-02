import './header.css'
import { Link } from 'react-router-dom'

export const Header = () => {



    return (
    <>
        <header className="header">
            <div className="header_container">
                <h1 className="header_logo">
                    Logo
                </h1>
                <nav className="navbar">
                    <Link className='navbar__link' to="/"><h2>Inicio</h2></Link>
                    <Link className='navbar__link' to="/Productos"><h2>Productos</h2></Link>
                    <Link className='navbar__link' to="/PokeLIst"><h2>PokeList</h2></Link>
                </nav>
            </div>
        </header>
    </>
    )
}