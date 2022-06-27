import { useState } from "react";
import pic from "../../../assets/man-holding-leg-up.png";
import '../NavbarComponents.css'

function Insertar() {

  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  //array telefonos
  const [telefonos, setTelefonos] = useState([{
      telefono: "",
    },
  ]);

  const addTelefono = () => {
    setTelefonos([...telefonos,{
        telefono: "",
      },
    ]);
  };

  const removeTelefono = (index) => {
    const rows = [...telefonos];
    rows.splice(index, 1);
    setTelefonos(rows);
  };

  const handleChangeTelefonos = (index, event) => {
    const { telefono, value } = event.target;
    const list = [...telefonos];
    list[index][telefono] = value;
    setTelefonos(list);
  };

  //array correos
  const [correos, setCorreos] = useState([{
      correo: "",
    },
  ]);

  const addCorreo = () => {
    setCorreos([...correos,{
        correo: "",
      },
    ]);
  };

  const removeCorreo = (index) => {
    const rows = [...correos];
    rows.splice(index, 1);
    setCorreos(rows);
  };

  const handleChangeCorreos = (index, event) => {
    const { correo, value } = event.target;
    const list = [...correos];
    list[index][correo] = value;
    setCorreos(list);
  };

  //submit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  return(
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <div className="containerMantenimiento" style={{userSelect: "none"}}>

      <div className="frow">
          
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
                    const {telefono} = data;
                    return(
                      <div key={index} className="frow" style={{marginTop: '25px'}}>
                        <div className="frow">
                          <div className="frow">
                            <i className="material-symbols-outlined">call</i> &nbsp;
                            <input type="text" onChange={(event)=> handleChangeTelefonos(index, event)} value={telefono} placeholder="teléfono"/>
                            {(telefonos.length!==1)? <button className="remove" onClick={removeTelefono}><i className="material-symbols-outlined">delete</i></button>:''}
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
                    const {correo} = data;
                    return(
                      <div key={index} className="frow" style={{marginTop: '25px'}}>
                        <div className="frow">
                          <div className="frow">
                            <i className="material-symbols-outlined">mail</i> &nbsp;
                            <input type="text" onChange={(event)=> handleChangeCorreos(index, event)} value={correo} placeholder="correo"/>
                            {(correos.length!==1)? <button className="remove" onClick={removeCorreo}><i className="material-symbols-outlined">delete</i></button>:''}
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

export default Insertar;
