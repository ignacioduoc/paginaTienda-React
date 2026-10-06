import CardProducto from "../components/molecules/CardProducto"

function Productos(){
    return(
        <div className="container mt-4">
            <h1>Productos</h1>
            <div className="d-flex gap-3">

                <CardProducto
                id= {1}
                titulo="Notebook"
                descripcion="Notebook ideal para estudiar y trabajar"
                precio={599999}
                imagen="/img/notebook.jpg"
                />
                <CardProducto
                id= {2}
                titulo="Mouse"
                descripcion="Mouse inalambrico"
                precio={19999}
                imagen="/img/mouse.jpg"
                />
                <CardProducto
                id= {3}
                titulo="Teclado"
                descripcion="Teclado Mecanico"
                precio={39999}
                imagen="/img/teclado.jpg"
                />
                <CardProducto
                id= {4}
                titulo="Volante"
                descripcion="Volante para jugar"
                precio={1999999}
                imagen="/img/Volante-Logitec.jpg"
                />
                <CardProducto
                id={5}
                titulo= "Audifonos"
                descripcion= "Audifonos aisladores de sonido"
                precio= {39999}
                imagen="/img/audifonos.jpg"
                />
            </div>
        </div>
    )
}

export default Productos