import { Link } from "react-router-dom"
function Navbar(){
    return(
        <nav className="navbar navbar-expand bg-dark">

            <div className="container">

                <span className="navbar-brand text-white">
                    Mi Tienda
                </span>

                <div className="navbar-nav">

                    <Link className="nav-link text-white" to="/">
                        Inicio
                    </Link>

                    <Link className="nav-link text-white" to="/productos">
                        Productos
                    </Link>

                    <Link className="nav-link text-white" to="/Contactanos">
                        Contactanos
                    </Link>

                    <Link className="nav-link text-white" to="/Nosotros">
                        Nosotros
                    </Link>

                </div>
            </div>
        </nav>
    )
}
export default Navbar