import pic from "../../../assets/girl-with-attitude.png";
import { useState } from "react";
import axios from 'axios';
import Error from '../../Alerts/Error'
import Success from '../../Alerts/Success'

function EliminarEmpresa() {

    const [nombre, setNombre] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [telefonos, setTelefonos] = useState([0]);
    const [correos, setCorreos] = useState(['']);

    const [empresaFound, setEmpresaFound] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const evaluate = () => {
        if(nombre !== ''){
            setNombre('')
            setEmpresaFound(false)
        }
    }

    const deleteEmpresa = async (e) => {
        e.preventDefault();
        try {
            console.log(nombre)
            setConfirmDelete(true)
            setIsSuccess(true)
            showSuccess()
        } catch (error) {
            
        }
    }

    //alerts
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const showError = () => {
        setTimeout( () => {
        setIsError(false)
        }, 5000);
    }

    const showSuccess = () => {
        setTimeout( () => {
            setIsSuccess(false)
        }, 4000);
    }

    const searchEmpresa = async (e) => {
        e.preventDefault();
        try {
            console.log(nombre)
            const {data} = await axios.delete(`http://localhost:4000/empresas/delete/${nombre}`)
            console.log(data.message)
            setEmpresaFound(true)
            setIsSuccess(true)
            setMessage(data.message)
            showSuccess()
            setUbicacion(data.empresaFound.ubicacion)
            setTelefonos(data.empresaFound.telefonos)
            setCorreos(data.empresaFound.correos)
        } catch (error) {
            setEmpresaFound(false)
            setIsError(true)
            setMessage(error.response.data.message)
            showError()
            console.log(error.response.data.message)
            setNombre('')
        }
    };
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <div className="containerMantenimiento" style={{userSelect: "none"}}>

        <div className="frow">
            {isError && <Error msg={message}/>}
            {isSuccess && <Success msg={message}/>}
            {confirmDelete && <Success msg={message}/>}
        </div>

        <div className="frow">

            <div className="fcolumn">
                <h2 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Eliminar una empresa</h2>

                <div className="frow">
                    <input type="text" id="nombre" placeholder="nombre de la empresa" autoComplete="off" style={{width:'250px'}} value={nombre} onChange={event => {setNombre(event.target.value)}} onClick={evaluate}/>
                    <button className="buscar" style={{marginLeft: '5px'}} onClick={searchEmpresa}>
                        <i className="material-symbols-outlined">search</i> &nbsp;
                    </button>
                </div>
                
                <br />
                
                {empresaFound &&
                    <>
                        <div className="containerDelete">
                            <div className="frow">
                                <p>Datos de la empresa</p>
                            </div>    
                            <div className="frow">
                                <p>Nombre: {nombre}</p>
                            </div>
                            <div className="frow">
                                <p>Ubicación: {ubicacion}</p>
                            </div>
                            <div className="frow">
                                <p>Teléfono(s): {telefonos.join(",  ")}</p>
                            </div>
                            <div className="frow">
                                <p>Correo(s): {correos.join(",  ")}</p>
                            </div>
                        </div>

                        <br />

                        <div className="fcolumn">

                            <div className="frow">
                                <p>¿Está seguro que desea eliminar la empresa?</p>
                            </div>

                            <div className="frow">
                                <div className="frow">
                                    <button className="remove" style={{width:'100px', height:'50px'}} onClick={deleteEmpresa}>sí</button>
                                </div>

                                <div className="frow">
                                    <button className="add" style={{width:'100px', height:'50px'}} onClick={evaluate}>no</button>
                                </div>
                            </div>

                        </div>
                    </>
                }

            </div>

            <div id="icon">
                <img src={pic} alt="man-icon" width= '320px'  height= '450px' style={{pointerEvents:'none', marginLeft: '50px'}}/>
            </div>

        </div>
    
    </div>

    </>
  )
}

export default EliminarEmpresa