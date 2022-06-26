import React from "react";
import axios from 'axios';
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Error from '../Alerts/Error'
import Success from '../Alerts/Success'
import pic from "../../assets/bald-man.png";
import './NavbarComponents.css'

function Documentos(){

    //alerts
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const [tramite, setTramite] = useState('');
    const [numCaso, setNumCaso] = useState('');
    const [fechaApertura, setFechaApertura] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [estado, setEstado] = useState('Activo');
    const [departamentos, setDepartamentos] = useState('');
    const [orden, setOrden] = useState('');


    const showError = () => {
      setTimeout( () => {
        setIsError(false)
      }, 5000);
    }

  const onSubmit = async(event)=>{
    event.preventDefault();
    try{
      const {data} = await axios.post(`localhost:4000/casos/numAlpha`)
    }catch(error) {
      setIsError(true)
      showError()
      setMessage(error.response.data.message)
    }
  }
  const olabb = async() => {

    console.log("JEJEJ: "+estado);
  }



  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <div className="containerStart" style={{userSelect: "none"}}>

    <div className="frow">
        {isError && <Error msg={message}/>}
        {isSuccess && <Success msg={message}/>}
    </div>

    <div className="frow">
        <div id="icon">
            <img src={pic} alt="man-icon" width= '300px'  height= '550px' style={{pointerEvents:'none'}}/>
        </div>

        <div id="form" className="fcolumn" style={{width: "520px"}}>
        <h1 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Crear caso</h1>

        <form id="sigupform" method="get" onSubmit={onSubmit}>

            <div className="frow">
                <div className="frow" style={{marginRight: '30px'}}>
                    <i className="material-symbols-outlined">diversity_3</i>&nbsp;
                    <input type="text" id="tramite" placeholder="Numero de tramite" required={true} autoComplete="off" value={tramite} onChange={event => {setTramite(event.target.value)}}/>
                </div> 
                <div className="frow">    
                    <i className="material-symbols-outlined">edit</i> &nbsp;
                    <input type="text" id="codAlfa" placeholder="Codigo"  required={true} autoComplete="off" value={numCaso} onChange={event => {setNumCaso(event.target.value)}} maxLength="3" minLength="3" pattern="[A-Z,a-z]{3}" ></input><br/><br/>
                </div>
            </div>
            <br />
            <div className="frow" >
                <div className="frow" id="radios" style={{marginRight: '30px'}} value={setEstado} onChange={event => {setEstado(event.target.value)}}>
                    <input id="radios" type="radio" value="Activo" name="gender" checked={true}/> Activo
                    <input type="radio" value="Inactivo" name="gender" /> Inactivo
                </div>
                <div className="frow">
                    <i className="material-symbols-outlined">diversity_3</i> &nbsp;
                    <input type="text" id="departamentos" placeholder="Departamentos" required={true} autoComplete="off" value={departamentos} onChange={event => {setDepartamentos(event.target.value)}}/>
                </div>
            </div>
            <br />

            <br />
            <div className="frow" style={{display: '-webkit-inline-flex', marginLeft:'18px'}}>
                <div className="frow" style={{width: '235px', marginLeft:'18px'}}>
                    <i className="material-symbols-outlined">cake</i> &nbsp;
                    <input type="date" id="fApertura" placeholder="Fecha apertura" required={true} autoComplete="off" value={fechaApertura} onChange={event => {setFechaApertura(event.target.value)}}/>
                </div>
                <div className="frow" style={{width: '233px', marginLeft:'18px'}}>
                    <i className="material-symbols-outlined">cake</i> &nbsp;
                    <input type="date" id="fFinal" placeholder="Fecha de cierre" required={true} autoComplete="off" value={fechaFinal} onChange={event => {setFechaFinal(event.target.value)}}/>
                </div>
            </div>
            <br />
                <div className="frow" style={{display: '-webkit-inline-flex', marginLeft:'18px'}}>
                    Hola
                </div>
                
                <div className="frow" style={{display: '-webkit-inline-flex', marginLeft:'18px'}}>
                    hola
                </div>
            <br/>
            <button className="buttonStart" type="submit" onClick={olabb()}>Ola</button>
        </form>
        </div>
    </div>
</div>

</>

  );

}

export default Documentos;
