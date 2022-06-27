import pic from "../../../../assets/man.png";
import { useState } from "react";
import axios from 'axios';
import Error from '../../../Alerts/Error'
import Success from '../../../Alerts/Success'

function EliminarCaso() {

    const [numCaso, setNumCaso] = useState("");
    const [fechaApertura, setFechaApertura] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [estado, setEstado] = useState("");

    const [casoFound, setCasoFound] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const evaluate = () => {
        if(numCaso !== ''){
            setNumCaso('')
            casoFound(false)
        }
    }

    const deleteCaso = async (e) => {
        e.preventDefault();
        try {
            console.log(numCaso)
            setConfirmDelete(true)
            setIsSuccess(true)
            showSuccess()
        } catch (error) {
            console.log(error.response.data.message)
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

    const searchCaso = async (e) => {
        e.preventDefault();
        try {
            
            const {data} = await axios.get(`http://localhost:4000/casos/find/${numCaso}`)
            console.log("data: " +JSON.stringify(data.numeroCaso.estado))
            console.log(data.message)
            
            setCasoFound(true)
            setIsSuccess(true)
            setMessage(data.message)
            showSuccess()
            
            setFechaApertura(data.numeroCaso.setFechaApertura)
            setFechaFinal(data.numeroCaso.fechaFinal)
            setEstado(data.numeroCaso.estado)
        } catch (error) {
            setCasoFound(false)
            setIsError(true)
            setMessage(error.response.data.message)
            showError()
            console.log(error.response.data.message)
            setNumCaso('')
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

            <div id="icon">
                <img src={pic} alt="man-icon" width= '350px'  height= '450px' style={{pointerEvents:'none', marginRight: '50px'}}/>
            </div>

            <div className="fcolumn">
                <h2 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Eliminar un caso</h2>

                <div className="frow">
                    <input type="text" id="nombre" placeholder="Numero de caso" autoComplete="off" style={{width:'250px'}} value={numCaso} onChange={event => {setNumCaso(event.target.value)}} onClick={evaluate}/>
                    <button className="buscar" style={{marginLeft: '5px'}} onClick={searchCaso}>
                        <i className="material-symbols-outlined">search</i> &nbsp;
                    </button>
                </div>
                
                <br />
                
                {casoFound &&
                    <>
                        <div className="containerDelete">
                            <div className="frow">
                                <p>Datos del caso</p>
                            </div>    
                            <div className="frow">
                                <p>Numero de caso: {numCaso}</p>
                            </div>
                            <div className="frow">
                                <p>Fecha apertura: {fechaApertura}</p>
                            </div>
                            <div className="frow">
                                <p>Fecha final: {fechaFinal}</p>
                            </div>
                            <div className="frow">
                                <p>Estado: {estado}</p>
                            </div>
                        </div>

                        <br />

                        <div className="fcolumn">

                            <div className="frow">
                                <p>¿Está seguro que desea eliminar el caso?</p>
                            </div>

                            <div className="frow">
                                <div className="frow">
                                    <button className="remove" style={{width:'100px', height:'50px'}} onClick={deleteCaso}>sí</button>
                                </div>

                                <div className="frow">
                                    <button className="add" style={{width:'100px', height:'50px'}} onClick={evaluate}>no</button>
                                </div>
                            </div>

                        </div>
                    </>
                }

            </div>

        </div>
    
    </div>

    </>
  )
}

export default EliminarCaso