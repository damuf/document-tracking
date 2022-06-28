import pic from "../../../../assets/man-with-beard-and-long-hair.png";
import { useState } from "react";
import axios from 'axios';
import Error from '../../../Alerts/Error'
import Success from '../../../Alerts/Success'

function EditarEmpleado() {

  const [departamento, setDepto] = useState('');
  const [nombre, setNombre] = useState('');
  const [papellido, setPApellido] = useState('');
  const [sapellido, setSApellido] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [cedula, setCedula] = useState('');
  const [fNacim, setFNacim] = useState('');

  const [empleadoFound, setEmpleadoFound] = useState(false);

  const hoy = new Date()
    var mes = hoy.getMonth() + 1
    if(mes < 10) mes = '0' + mes
    const fechaInicio = hoy.getFullYear() + '-' + mes + '-' +  hoy.getDate();

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
        const {data} = await axios.get(`http://localhost:4000/empresas/find/${nombre}`)
        setDepto(data.algo.departamento)
        setNombre(data.algo.nombre)
        setPApellido(data.algo.papellido)
        setSApellido(data.algo.sapellido)
        setCedula(data.algo.cedula)
        setFNacim(data.algo.fNacim)
        setIsSuccess(true)
        setMessage(data.message)
        showSuccess()
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
                    <input type="text" id="buscar" placeholder="cedula del empleado" autoComplete="off" style={{width:'250px'}} value={nombre} onChange={event => {setNombre(event.target.value)}} onClick={evaluate}/>
                    <button className="buscar" style={{marginLeft: '5px'}} onClick={searchEmpleado}>
                        <i className="material-symbols-outlined">search</i> &nbsp;
                    </button>
                  </div>

              </div>

          </div>

      </div>

    </>
  )
}

export default EditarEmpleado