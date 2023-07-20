import './header.css'

export const Header = () => {



    return (
    <>
        <header className="header">
            <div className="header_container">
                <h1 className="header_logo">
                    Logo
                </h1>
                <nav>
                    <ul className="navbar">
                        <li><button><h2>Inicio</h2></button></li>
                        <li><button><h2>Productos mas Vendidos</h2></button></li>
                        <li><button><h2>Contacto</h2></button></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
    )
}