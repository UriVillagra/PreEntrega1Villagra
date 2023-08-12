// import './header.css'
import { Link } from 'react-router-dom'

export const Header = () => {



    return (
    <>
        <header className="header sticky top-0">
            <div className="header_container flex flex-row w-full p-8 bg-blue-200 ">
                <h1 className="text-8xl header_logo">
                    Logo
                </h1>
                <nav className="navbar flex flex-row w-full justify-end">
                    <Link className='cursor-pointer mx-8 bg-blue-300 hover:bg-blue-700 hover:scale-110 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-64 m-10 text-5xl text-center rounded-full p-6 border-2 border-black' to="/"><h2>Inicio</h2></Link>
                    <Link className='cursor-pointer mx-8 bg-blue-300 hover:bg-blue-700 hover:scale-110 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-64 m-10 text-5xl text-center rounded-full p-6 border-2 border-black' to="/Productos"><h2>Productos</h2></Link>
                    <Link className='cursor-pointer mx-8 bg-blue-300 hover:bg-blue-700 hover:scale-110 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-64 m-10 text-5xl text-center rounded-full p-6 border-2 border-black' to="/PokeLIst"><h2>PokeList</h2></Link>
                    <Link className='cursor-pointer mx-8 bg-blue-300 hover:bg-blue-700 hover:scale-110 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-64 m-10 text-5xl text-center rounded-full p-6 border-2 border-black' to="/Contacto"><h2>Contacto</h2></Link>
                </nav>
            </div>
        </header>
    </>
    )
}