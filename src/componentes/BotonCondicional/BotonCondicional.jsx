import "../ItemCount/ItemCount.css";
import { useState } from "react";

const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");

    const habilitarUsuario = (e) => {
        e.preventDefault();

        if (usuario === "Coder" && pass === "House123") {
            setVerificado(true);
        } else {
            setUsuario("Datos incorrectos.");
            setPass("Verifiquelos.");
        }
    }

    const deshabilitarUsuario = () => {
        setVerificado(false);
    }


    return (
        <>
            {verificado ? (<button onClick={deshabilitarUsuario}  className='boton'> Cerrar Sesión </button>) : (
                <form onSubmit={habilitarUsuario}>
                    <label htmlFor="usuario"> Usuario </label>
                    <input type="text" id="usuario" onChange={(e) => setUsuario(e.target.value)} value={usuario} />

                    <label htmlFor="pass"> Contraseña </label>
                    <input type="text" id="pass" onChange={(e) => setPass(e.target.value)} value={pass} />

                    <button className='boton'> Iniciar Sesión </button>

                </form>
            )}
        </>
    )
}

export default BotonCondicional