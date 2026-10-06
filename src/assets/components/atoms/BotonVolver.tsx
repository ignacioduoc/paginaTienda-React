import { Link } from 'react-router-dom'


function BotonVolver(){

    return(
        <Link to={`/productos`}
            className= "btn btn-secundary"
        >
            Volver
        </Link>

    )
}

export default BotonVolver
