import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect} from "react";
import {  useNavigate } from "react-router-dom";
import Error from '../../Alerts/Error'
import Success from '../../Alerts/Success'
import pic from "../../../assets/bald-man.png";
import '../NavbarComponents.css'



export default function Casos(){

    //alerts
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const [tramite, setTramite] = useState('');
    const [numCaso, setNumCaso] = useState('');
    const [fechaApertura, setFechaApertura] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [estado, setEstado] = useState('Activo');
    const [departamentos, setDepartamentos] = useState([]);
    const [orden, setOrden] = useState([0]);
    //const [data, setData] = useState([])
    const [depas, setDepas] = useState([{}])

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

    const addOrden = () => {
        setOrden([...orden, '']);
      };
    
      const removeOrden = (index) => {
        const rows = [...orden];
        rows.splice(index, 1);
        setOrden(rows);
      };

      const handleChangeOrden = (index, evnt) => {
        const { value } = evnt.target;
        const list = [...orden];
        list[index] = value;
        setOrden(list);
      };

    const handleChange = e => {
        const { value, checked } = e.target;
        if (checked) {
          // push selected value in list
          setDepartamentos(prev => [...prev, value]);
        } else {
          // remove unchecked value from the list
          setDepartamentos(prev => prev.filter(x => x !== value));
        }
      }

  const onSubmit = async(event)=>{
    event.preventDefault();
    try{
        console.log("tramite: "+tramite+
                    " numCaso: "+ numCaso+ 
                    " deptos: "+departamentos+ 
                    " orden: "+orden)
        const {data} = await axios.post(`http://localhost:4000/casos`, {
            tramite: tramite,
            numCaso: numCaso,
            fechaApertura: fechaApertura,
            fechaFinal: fechaFinal,
            estado: estado,
            deptos: departamentos, 
            orden: orden
            //orden: orden.toLocaleLowerCase(), 
            })
            setIsSuccess(true)
            setMessage(data.message)
            showSuccess()
    
        }catch(error) {
            setIsError(true)
            setMessage(error.response.data.message)
            showError()
            console.log(error.response.data.message)
        }
  }

  const departamentosCarga = async () => {
    try{
        const {data: response} = await axios.get(`http://localhost:4000/departamentos`);
        //setData(response);
        setDepas(response)
        }catch(error) {
          console.error(error.message);
        }
  }

  const idk = async (hehe) => {
    console.log("Checks: "+JSON.stringify(hehe))
  }

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <div className="containerMantenimiento" style={{userSelect: "none"}} onLoad={departamentosCarga}>
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

        <form id="crearCasos" method="get" onSubmit={onSubmit}>

            <div className="frow">
                <div className="frow" style={{marginRight: '30px'}}>
                    <i className="material-symbols-outlined">description</i>&nbsp;
                    <input type="text" id="tramite" placeholder="Nombre de tramite" required={true} autoComplete="off" value={tramite} onChange={event => {setTramite(event.target.value)}}/>
                </div> 
                <div className="frow">    
                    <i className="material-symbols-outlined">barcode</i> &nbsp;
                    <input type="text" id="codAlfa" placeholder="Codigo"  required={true} autoComplete="off" value={numCaso} onChange={event => {setNumCaso(event.target.value)}} maxLength="3" minLength="3" pattern="[A-Z,a-z]{3}" ></input><br/><br/>
                </div>
            </div>
            <br />
            <div className="frow" style={{display: '-webkit-inline-flex', marginLeft:'18px'}}>
                <div className="frow" style={{width: '235px', marginLeft:'18px'}}>
                    <i className="material-symbols-outlined">calendar_month</i> &nbsp;
                    <input type="date" id="fApertura" placeholder="Fecha apertura" required={true} autoComplete="off" value={fechaApertura} onChange={event => {setFechaApertura(event.target.value)}}/>
                </div>
                <div className="frow" style={{width: '233px', marginLeft:'18px'}}>
                    <i className="material-symbols-outlined">calendar_month</i> &nbsp;
                    <input type="date" id="fFinal" placeholder="Fecha de cierre" required={true} autoComplete="off" value={fechaFinal} onChange={event => {setFechaFinal(event.target.value)}}/>
                </div>
            </div>
            <br />
            <div className="frow" >
            <br />
                <h3 className='casosNav'>Estado</h3>
                <br />
                <div className="frow" id="radios" style={{marginRight: '30px'}} value={setEstado} onChange={event => {setEstado(event.target.value)}}>
                    <br />
                    <input id="radios" type="radio" value="Activo" name="gender" checked={true}/> Activo
                    <input type="radio" value="Inactivo" name="gender" /> Inactivo
                </div>
            </div>
            <br />
                <div className="frow" id="divChecks" style={{display: '-webkit-inline-flex', marginLeft:'18px'}}>
                <div className='frow'>
                    <i style={{marginRight: '10px'}} class="material-symbols-outlined">list</i>&nbsp;
                    <h3 className='casosNav'>Departamentos</h3>
                </div>
                <div className='fcolumn' id='frow'>
                    <ul className="fcolumn" id='frow'>
                        {depas.map(({nombre}, index) => {
                        return (
                            <li key={index}>
                            <div className="fcolumn" id='frow'>
                                <div className="checos" d='frow'>
                                    <div className='fcolumn'>
                                        <input
                                            className='frow'
                                            type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            name={nombre}
                                            value={nombre}
                                            onChange={handleChange}
                                        />
                                    </div>
                                <label htmlFor={`custom-checkbox-${index}`} style={{ width: '100px', height: '45px'}}>{nombre}</label>
                                </div>
                            </div>
                            </li>
                        )
                        })}
                        {/* <div>Departamentos check SOLO PA VER: {departamentos.length ? departamentos.join(', ') : null}</div> */}
                    </ul>

                    </div>
                </div>
                <br />
                <div className="frow">
              <div className="column">
                {orden.map((data, index) => {
                    return(
                      <div key={index} className="frow" style={{marginTop: '25px'}}>
                        <div className="frow">
                          <div className="frow">
                            <i className="material-symbols-outlined">list_alt</i> &nbsp;
                            <input type="text" value={data.orden} onChange={(evnt)=> handleChangeOrden(index, evnt)} required={true} autoComplete="off" name="orden" placeholder="Orden"/>
                            {(orden.length!==1)? <button className="remove" onClick={() => removeOrden(index)}><i className="material-symbols-outlined">delete</i></button>:''}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                <br />
                <div className="frow">
                  <div className="frow">
                    <button className="add" onClick={addOrden} style={{width:'190px', gap:'5px'}}>agregar orden
                      <i className="material-symbols-outlined">add</i>
                    </button>
                  </div>
                </div>

              </div>
            </div>
            <br/>
            <button className="buttonMant" type="submit" onClick={idk(departamentos)}>Guardar</button>
        </form>
        </div>
    </div>
</div>
</>

  );

}


