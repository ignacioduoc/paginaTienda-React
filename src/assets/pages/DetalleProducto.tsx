import { useParams } from "react-router-dom"

const productos = [
    {
        id: 1,
        titulo:"Notebook",
        descripcion:"Notebook ideal para estudiar y trabajar",
        precio:599999,
        imagen:"/img/notebook.jpg"
    },
    {
        id: 2,
        titulo: "Mouse",
        descripcion: "Mouse inalambrico",
        precio : 19999,
        imagen: "/img/mouse.jpg"
    },
    {
        id: 3,
        titulo:"Teclado",
        descripcion:"Teclado Mecanico",
        precio: 39999,
        imagen: "/img/teclado.jpg"
    },
    {
        id: 4,
        titulo: "Volante",
        descripcion: "Volante para jugar",
        precio: 1999999,
        imagen: "/img/Volante-Logitec.jpg"
    }

]


function DetalleProducto(){

    const { id } = useParams()

    const producto = productos.find( producto => producto.id === Number(id)
    )

    return(
        <div>
            <h1>Detalle del producto</h1>

            <img
                src = {producto?.imagen} alt={producto?.titulo} style ={{ width: '300px'}} />
            
            <h2>{producto?.titulo}</h2>

            <p>{producto?.descripcion}</p>

            <p>${producto?.precio}</p>


        </div>
    )
}

export default DetalleProducto