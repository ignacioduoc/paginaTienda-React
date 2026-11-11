
import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";
import type { SubmitEvent } from "react";

function FormularioContacto (){
    const[nombre, setNombre] = useState("");
    const[correo, setCorreo] = useState("");
    const[mensaje, setMensaje] = useState("");

    const [enviado, setEnviando] = useState(false);

    const manejarEnvio = async (e: SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();//Evita recarga de pagina

        if (enviado) return;

        if(nombre.trim() === ""){
            alert("Debe ingresar su nombre");
            return;
        }
        if(correo.trim() === ""){
            alert("Debe ingresar su correo");
            return;
        }
        //comprueba que el correo tenga formato valido
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
            alert("ingrese un correo valido");
            return;
        }
        if(mensaje.trim() === ""){
            alert("Debe ingresar un mensaje");
            return;
        }
        //comienza el envio

        setEnviando(true);

        try{
            const respuesta = await fetch(
                "http://localhost:8082/api/contactos",
                {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify({
                        nombreCompleto: nombre.trim(),
                        correo: correo.trim(),
                        mensaje : mensaje.trim(),
                    }),
                }
            );

            if(!respuesta.ok){
                throw new Error(`Error HTTP ${respuesta.status}`);
            }

            alert("Mensaje guardado correctamente");


            setNombre("");
            setCorreo("");
            setMensaje("");
        }catch(error){
            console.error("Error el enviar el contacto:", error);
            alert("No se pudo enviar el mensaje. intente nuevamente.");
        }finally{
            setEnviando(false);
        }
    };

    return(
        <form onSubmit={manejarEnvio} noValidate>

            <CampoFormulario
            etiqueta="Nombre completo"
            tipo="text"
            nombre="nombre"
            valor={nombre}
            alCambiar={setNombre}
            
            />

            <CampoFormulario
            etiqueta="Correo electronico"
            tipo="email"
            nombre="correo"
            valor={correo}
            alCambiar={setCorreo}
            />

            <CampoFormulario
            etiqueta="Mensaje"
            tipo="text"
            nombre="mensaje"
            valor={mensaje}
            alCambiar={setMensaje}
            />

            <button type="submit" className="btn btn-primary"> Enviar Mensaje </button>

        </form>
    );
}
export default FormularioContacto;