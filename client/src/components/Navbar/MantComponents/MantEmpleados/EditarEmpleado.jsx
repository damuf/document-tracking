import pic from "../../../../assets/man-with-beard-and-long-hair.png";
import { useState } from "react";
import axios from 'axios';
import Error from '../../../Alerts/Error'
import Success from '../../../Alerts/Success'

function EditarEmpleado() {

  const [idDepto, setIdDepto] = useState('');
  const [departamento, setDepto] = useState('');
  const [nombre, setNombre] = useState('');
  const [papellido, setPApellido] = useState('');
  const [sapellido, setSApellido] = useState('');
  const [user, setUser] = useState('');
  const [cedula, setCedula] = useState('');
  const [fNacim, setFNacim] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');

  const [empleadoFound, setEmpleadoFound] = useState(false);

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

  const evaluate = () => {
      if(nombre !== ''){
          setNombre('')
          setEmpleadoFound(false)
      }
  }

  //busqueda del empleado
  const searchEmpleado = async (e) => {
    e.preventDefault();
    try {
        const {data} = await axios.get(`http://localhost:4000/empleados/find/${cedula}`)

        //si encuentra el empleado pasa a buscar el nombre del departamento asociado
        setIdDepto(data.empleadoFound.idDepto)
        //const {dataDepto} = await axios.get(`http://localhost:4000/empleados/find/${cedula}`)
        //setDepto(dataDepto.departamentoId.nombre)

        //sigue guardando los datos de el empleado
        setNombre(data.empleadoFound.nombre)
        setPApellido(data.empleadoFound.papellido)
        setSApellido(data.empleadoFound.sapellido)
        setCedula(data.empleadoFound.cedula)
        setUser(data.empleadoFound.user)
        setFechaInicio(data.empleadoFound.fechaInicio)
        setEmpleadoFound(true)
        setIsSuccess(true)
        setMessage(data.message)
        showSuccess()
        console.log("despues de encontrar" + fechaInicio, fNacim)
    } catch (error) {
        setEmpleadoFound(false)
        setIsError(true)
        setMessage("error")
        showError()
    }
  };

  //submit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(departamento, nombre, papellido, sapellido, cedula, fNacim, fechaInicio)
      const {data} = await axios.put(`http://localhost:4000/empresas/edit/${nombre}`, {
          departamento: nombre.toLocaleLowerCase(),
          nombre: nombre.toLocaleLowerCase(),
          papellido: papellido.toLocaleLowerCase(),
          sapellido: sapellido.toLocaleLowerCase(),
          cedula: cedula,
          fNacim: fNacim,
          fechaInicio: fechaInicio
      })
      console.log(data.message)
      setIsSuccess(true)
      setMessage(data.message)
      showSuccess()
      console.log(data.message)
      setDepto('')
      setNombre('')
      setPApellido('')
      setSApellido('')
      setCedula('')
      console.log("despues de modificar" + departamento, nombre, papellido, sapellido, cedula, fNacim, fechaInicio)
      evaluate()
    } catch (error) {
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
          </div>

          <div className="frow">

              <div id="icon">
                  <img src={pic} alt="man-icon" width= '320px'  height= '450px' style={{pointerEvents:'none', marginRight: '50px'}}/>
              </div>

              <div className="fcolumn">
                  <h2 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Editar un empleado</h2>

                  <div className="frow">
                    <input type="text" id="buscar" placeholder="cedula del empleado" autoComplete="off" style={{width:'250px'}} value={cedula} onChange={event => {setCedula(event.target.value)}} onClick={evaluate}/>
                    <button className="buscar" style={{marginLeft: '5px'}} onClick={searchEmpleado}>
                        <i className="material-symbols-outlined">search</i> &nbsp;
                    </button>
                  </div>

                  <div className="column">
                    <br />
                    {empleadoFound &&
                        <form id="editarEmpleado" method="get" onSubmit={onSubmit}>
                          
                            <div className="frow">
                              <div className="frow" style={{marginRight: '30px'}}>
                                  <i className="material-symbols-outlined">diversity_3</i>&nbsp;
                                  <input type="text" id="departamento" placeholder="departamento" required={true} autoComplete="off" value={departamento} onChange={event => {setDepto(event.target.value)}}/>
                              </div> 
                              <div className="frow">    
                                  <i className="material-symbols-outlined">edit</i> &nbsp;
                                  <input type="text" id="nombre" placeholder="nombre" required={true} autoComplete="off" value={nombre} onChange={event => {setNombre(event.target.value)}}/>
                              </div>
                            </div>
                            <br />
                            <div className="frow" >
                              <div className="frow" style={{marginRight: '30px'}}>
                                  <i className="material-symbols-outlined">edit</i> &nbsp;
                                  <input type="text" id="primer_apellido" placeholder="primer apellido" required={true} autoComplete="off" value={papellido} onChange={event => {setPApellido(event.target.value)}}/>
                              </div>
                              <div className="frow">
                                  <i className="material-symbols-outlined">edit</i> &nbsp;
                                  <input type="text" id="segundo_apellido" placeholder="segundo apellido" required={true} autoComplete="off" value={sapellido} onChange={event => {setSApellido(event.target.value)}}/>
                              </div>
                            </div>
                            <br />
                            <div className="frow">
                              <div className="frow" style={{marginRight: '30px'}}>
                                  <i className="material-symbols-outlined">badge</i> &nbsp;
                                  <input type="text" id="cedula" placeholder="cedula" required={true} autoComplete="off" value={cedula} onChange={event => {setCedula(event.target.value)}}/>
                              </div>
                              <div className="frow">
                                  <i className="material-symbols-outlined">account_circle</i> &nbsp;
                                  <input type="text" id="user" placeholder="usuario" required={true} autoComplete="off" value={user} onChange={event => {setUser(event.target.value)}}/>
                              </div>
                            </div>
                            <br />
                            <div className="frow">
                              <div className="frow" style={{width: '262px',marginRight: '10px'}}>
                                  <i className="material-symbols-outlined">cake</i> &nbsp;
                                  <input type="date" id="fNacim" placeholder="fecha nacimiento" required={true} autoComplete="off" value={fNacim} onChange={event => {setFNacim(event.target.value)}}/>
                              </div>
                              <div className="frow" style={{width: '254px'}}>
                                  <i className="material-symbols-outlined">work</i> &nbsp;
                                  <input type="date" id="fechaInicio" placeholder="fecha de entrada" required={true} autoComplete="off" value={fechaInicio} onChange={event => {setFechaInicio(event.target.value)}}/>
                              </div>
                            </div>
                            <br />
                            <div className="frow">
                              <button className="buttonMant" type="submit">actualizar</button>
                            </div>
                  
                        </form> 
                    }

                  </div>

              </div>

          </div>

      </div>

    </>
  )
}

export default EditarEmpleado