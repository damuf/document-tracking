import { useState } from "react";
import axios from 'axios';
import pic from "../../../../assets/man-holding-leg-up.png";
import '../../NavbarComponents.css'
import Error from '../../../Alerts/Error'
import Success from '../../../Alerts/Success'

function InsertarEmpresa() {

  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  //array telefonos
  const [telefonos, setTelefonos] = useState(['']);

  const addTelefono = () => {
    setTelefonos([...telefonos, 0]);
  };

  const removeTelefono = (index) => {
    const rows = [...telefonos];
    rows.splice(index, 1);
    setTelefonos(rows);
  };

  const handleChangeTelefonos = (index, evnt) => {
    const { value } = evnt.target;
    const list = [...telefonos];
    list[index] = value;
    setTelefonos(list);
  };

  //array correos
  const [correos, setCorreos] = useState(['']);

  const addCorreo = () => {
    setCorreos([...correos, '']);
  };

  const removeCorreo = (index) => {
    const rows = [...correos];
    rows.splice(index, 1);
    setCorreos(rows);
  };

  const handleChangeCorreos = (index, evnt) => {
    const { value } = evnt.target;
    const list = [...correos];
    list[index] = value;
    setCorreos(list);
  };

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

  //submit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(nombre, ubicacion, telefonos, correos)
      const {data} = await axios.post(`http://localhost:4000/empresas`, {
        nombre: nombre.toLocaleLowerCase(),
        ubicacion: ubicacion.toLocaleLowerCase(),
        telefonos: telefonos, 
        correos: correos
      })
      console.log(data.message)
      setIsSuccess(true)
      setMessage(data.message)
      showSuccess()
      console.log(data.message)
      setNombre('')
      setUbicacion('')
      setTelefonos([''])
      setCorreos([''])
      console.log("despues de guardar" + nombre, ubicacion, telefonos, correos)
    } catch (error) {
      setIsError(true)
      setMessage(error.response.data.message)
      showError()
      console.log(error.response.data.message)
    }
  };

  return(
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <div className="containerMantenimiento" style={{userSelect: "none"}}>

      <div className="frow">
        {isError && <Error msg={message}/>}
        {isSuccess && <Success msg={message}/>}
      </div>

      <div className="frow">

        <div id="form" className="fcolumn">
          <h2 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Añadir una nueva empresa</h2>
          
          <form id="crearEmpresas" method="get" onSubmit={onSubmit}>

            <div className="frow">
              <i className="material-symbols-outlined">apartment</i> &nbsp;
              <input type="text" id="nombre" placeholder="nombre" required={true} autoComplete="off" value={nombre} onChange={event => {setNombre(event.target.value)}}/>
            </div>
            <br />

            <div className="frow">
              <i className="material-symbols-outlined">share_location</i> &nbsp;
              <input type="text" id="ubicacion" placeholder="ubicación" required={true} autoComplete="off" value={ubicacion} onChange={event => {setUbicacion(event.target.value)}} style={{width:'250px'}}/>
            </div>
            <div className="frow">
              <div className="column">
                {telefonos.map((data, index) => {
                    return(
                      <div key={index} className="frow" style={{marginTop: '25px'}}>
                        <div className="frow">
                          <div className="frow">
                            <i className="material-symbols-outlined">call</i> &nbsp;
                            <input type="number" value={data} onChange={(evnt) => handleChangeTelefonos(index, evnt)} required={true} autoComplete="off" name="telefono" placeholder="teléfono"/>
                            {(telefonos.length!==1)? <button className="remove" onClick={() => removeTelefono(index)}><i className="material-symbols-outlined">delete</i></button>:''}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className="frow">
              <div className="column">
                {correos.map((data, index) => {
                    return(
                      <div key={index} className="frow" style={{marginTop: '25px'}}>
                        <div className="frow">
                          <div className="frow">
                            <i className="material-symbols-outlined">mail</i> &nbsp;
                            <input type="email" value={data} onChange={(evnt)=> handleChangeCorreos(index, evnt)} required={true} autoComplete="off" name="correo" placeholder="correo"/>
                            {(correos.length!==1)? <button className="remove" onClick={() => removeCorreo(index)}><i className="material-symbols-outlined">delete</i></button>:''}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                <br />
                <div className="frow">
                  <div className="frow">
                    <button className="add" onClick={addTelefono} style={{width:'190px', gap:'5px'}}>agregar teléfono
                      <i className="material-symbols-outlined">add</i>
                    </button>
                  </div>
                  <div className="frow">
                    <button className="add" onClick={addCorreo} style={{width:'190px', gap:'5px'}}>agregar correo
                      <i className="material-symbols-outlined">add</i>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <br />
            <div className="frow">
              <button className="buttonMant" type="submit">crear</button>
            </div>

          </form>

        </div>

        <div id="icon">
          <img src={pic} alt="man-icon" width= '320px'  height= '450px' style={{pointerEvents:'none', marginLeft: '50px'}}/>
        </div>

      </div>

    </div>

  </> 
  );
}

export default InsertarEmpresa;
