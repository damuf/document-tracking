import pic from "../../../../assets/man.png";
import { useState } from "react";
import axios from 'axios';
import Error from '../../../Alerts/Error'
import Success from '../../../Alerts/Success'

function EliminarTramite(){

    const [departamento, setDepartamento] = useState("");
    const [nombre, setNombre] = useState("");
    const [departamentos, setDepartamentos] = useState([""]);
    const [orden, setOrden] = useState([0]);

    const [tramiteFound, setCasoFound] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    
    //alerts
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const evaluate = () => {
        if(nombre !== ''){
            setDepartamento('')
            setNombre('')
            setDepartamentos([''])
            setOrden([])
            setCasoFound(false)
            setConfirmDelete(false)
        }
    }

    const deleteTramite = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.delete(`http://localhost:4000/tramites/delete/${nombre}`)
            console.log(data.message)
            setConfirmDelete(true)
            setIsSuccess(true)
            setMessage("Tramite borrado con éxito")
            showSuccess()
            evaluate()
        } catch (error) {
            tramiteFound(false)
            setIsError(true)
            showError()
        }
    }

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

    const searchTramite = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.get(`http://localhost:4000/tramites/findname/${nombre}`)
            setCasoFound(true)
            setIsSuccess(true)
            setMessage(data.message)
            showSuccess()
            setDepartamento(data.tramiteFound.departamento)
            setNombre(data.tramiteFound.nombre)
            

        } catch (error) {
            setCasoFound(false)
            setIsError(true)
            setMessage(error.response.data.message)
            showError()
            console.log(error.response.data.message)
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
                    <h2 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Eliminar un tramite</h2>
    
                    <div className="frow">
                        <input type="text" id="nombre" placeholder="nombre de tramite" autoComplete="off" style={{width:'250px'}} value={nombre} onChange={event => {setNombre(event.target.value)}} onClick={evaluate}/>
                        <button className="buscar" style={{marginLeft: '5px'}} onClick={searchTramite}>
                            <i className="material-symbols-outlined">search</i> &nbsp;
                        </button>
                    </div>
                    
                    <br />
                    
                    {tramiteFound &&
                        <>
                            <div className="containerDelete">
                                <div className="frow">
                                    <p>Datos del caso</p>
                                </div>    
                                <div className="frow">
                                    <p>Nombre de tramite: {nombre}</p>
                                </div>
                                <div className="frow">
                                    <p>Fecha apertura: {departamento}</p>
                                </div>

                            </div>
    
                            <br />
    
                            <div className="fcolumn">
    
                                <div className="frow">
                                    <p>¿Está seguro que desea eliminar el caso?</p>
                                </div>
    
                                <div className="frow">
                                    <div className="frow">
                                        <button className="remove" style={{width:'100px', height:'50px'}} onClick={deleteTramite}>sí</button>
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
                    <img src={pic} alt="man-icon" width= '350px'  height= '450px' style={{pointerEvents:'none', marginLeft: '50px'}}/>
                </div>
    
            </div>
        
        </div>
    
        </>
      )

} export default EliminarTramite