import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";


function FormularioLogin (){
    const[correo, setCorreo] = useState("");
    const[contrasena, setContrasena] = useState("");

    const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();//Evita recarga de pagina

        if(correo.trim() === ""){
            alert("Debe ingresar su correo");
            return;
        }
        //comprueba que el correo tenga formato valido
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
            alert("Ingrese un correo válido");
            return;
        }
        if(contrasena.trim() === ""){
            alert("Debe ingresar su contraseña");
            return;
        }
        //comprueba que la contraseña tenga 8 caracteres o mas
        if(contrasena.length < 8){
            alert("La contraseña debe tener mínimo 8 caracteres");
            return;
        }
        alert("Datos ingresados correctamente");
    }

    return(
        <form onSubmit={manejarEnvio} noValidate>

            <CampoFormulario
            etiqueta="Correo electrónico"
            tipo="email"
            nombre="correo"
            valor={correo}
            alCambiar={setCorreo}
            />

            <CampoFormulario
            etiqueta="Contraseña"
            tipo="password"
            nombre="contrasena"
            valor={contrasena}
            alCambiar={setContrasena}
            />

            <button type="submit" className="btn btn-primary"> Ingresar </button>

        </form>
    );
}
export default FormularioLogin;