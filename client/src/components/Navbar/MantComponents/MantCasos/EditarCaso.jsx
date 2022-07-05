import pic from "../../../../assets/man-playing-video-game.png";
import { useState } from "react";
import axios from "axios";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";

function EditarCaso() {
  const [tramiteId, setTramiteId] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [departamentosId, setDepartamentosId] = useState([""]);

  const [numCaso, setNumCaso] = useState("");
  const [fechaApertura, setFechaApertura] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [estado, setEstado] = useState("");
  const [deptos, setDeptos] = useState([]);
  const [orden, setOrden] = useState([""]);
  const [tramiteNombre, setTramiteNombre] = useState();
  const [checked, setChecked] = useState([-1]);
  const [departamentos, setDepartamentos] = useState([""]);

  const [casoFound, setCasoFound] = useState(false);

  //alerts
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const addOrden = () => {
    setOrden([...orden, ""]);
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

  const showError = () => {
    setTimeout(() => {
      setIsError(false);
    }, 5000);
  };

  const showSuccess = () => {
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  const evaluate = () => {
    if (numCaso !== "") {
      setNumCaso("");
      setCasoFound(false);
    }
  };

  // const handleChangeDeptos = (e) => {
  //     const checkboxes = document.querySelectorAll(
  //       'input[name="deptosarray"]:checked'
  //     );
  //     const values = [];
  //     checkboxes.forEach((checkbox) => {
  //       values.push(checkbox.value);
  //     });
  //     setDepartamentos(values)
  //     console.log(departamentos)
  //   };

  const searchCaso = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:4000/casos/find/${busqueda}`
      );
      searchTramite(data.casoFound.idTramite);
      //searchDepartamento(data.casoFound.deptos)

      setTramiteId(data.casoFound.idTramite);
      setDepartamentosId(data.casoFound.deptos);
      // setDeptos(data.casoFound.deptos)
      // setEstado(data.casoFound.estado)
      // setFechaFinal(data.casoFound.fechaFinal)
      // setFechaApertura(data.casoFound.setFechaApertura)

      const ordens = data.casoFound.orden;
      setOrden(ordens);

      setCasoFound(true);
      setMessage(data.message);
    } catch (error) {
      setCasoFound(false);
      setIsError(true);
      setMessage("error");
      showError();
    }
  };

  const searchDepartamento = async (depi) => {
    try {
      console.log("Depaspas: " + JSON.stringify(departamentosId));

      const { data } = await axios.get(
        `http://localhost:4000/departamentos/${depi}`
      );
      setDepartamentos(data.departamentoFound.nombre);
      setIsSuccess(true);
      showSuccess();
    } catch (error) {
      setCasoFound(false);
      setIsError(true);
      setMessage("error");
      showError();
    }
  };

  const searchTramite = async (trami) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/tramites/findid/${trami}`
      );
      setTramiteNombre(data.casoFound.nombre);
      setIsSuccess(true);
      showSuccess();
    } catch (error) {
      setCasoFound(false);
      setIsError(true);
    }
  };

  //submit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //console.log(nombre, ubicacion, telefonos, correos)
      const { data } = await axios.put(
        `http://localhost:4000/casos/edit/${numCaso}`,
        {
          tramite: tramiteId,
          numCaso: numCaso,
          fechaApertura: fechaApertura,
          fechaFinal: fechaFinal,
          estado: estado,
          deptos: deptos,
          orden: orden,
        }
      );
      setIsSuccess(true);
      setMessage(data.message);
      showSuccess();
      setBusqueda("");
      evaluate();
    } catch (error) {
      setIsError(true);
      setMessage(error.response.data.message);
      showError();
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <div className="containerMantenimiento" style={{ userSelect: "none" }}>
        <div className="frow">
          {isError && <Error msg={message} />}
          {isSuccess && <Success msg={message} />}
        </div>

        <div className="frow">
          <div id="icon">
            <img
              src={pic}
              alt="man-icon"
              width="320px"
              height="450px"
              style={{ pointerEvents: "none", marginRight: "50px" }}
            />
          </div>

          <div className="fcolumn">
            <h2 style={{ textShadow: "red -2px 0, cyan 2px 0" }}>
              Editar un caso
            </h2>

            <div className="frow">
              <input
                type="text"
                id="buscar"
                placeholder="número de caso"
                autoComplete="off"
                style={{ width: "250px" }}
                value={busqueda}
                onChange={(event) => {
                  setBusqueda(event.target.value);
                }}
                onClick={evaluate}
              />
              <button
                className="buscar"
                style={{ marginLeft: "5px" }}
                onClick={searchCaso}
              >
                <i className="material-symbols-outlined">search</i> &nbsp;
              </button>
            </div>

            <div className="column">
              <br />
              {casoFound && (
                <form id="crearEmpresas" method="get" onSubmit={onSubmit}>
                  <div className="frow">
                    <i className="material-symbols-outlined">share_location</i>{" "}
                    &nbsp;
                    <input
                      type="text"
                      id="tramite"
                      placeholder="nombre trámite"
                      required={true}
                      autoComplete="off"
                      value={tramiteNombre}
                      onChange={(event) => {
                        setTramiteNombre(event.target.value);
                      }}
                      style={{ width: "250px" }}
                    />
                  </div>

                  <div className="frow">
                    <div className="column">
                      {orden.map((data, index) => {
                        return (
                          <div
                            key={index}
                            className="frow"
                            style={{ marginTop: "25px" }}
                          >
                            <div className="frow">
                              <div className="frow">
                                <i className="material-symbols-outlined">
                                  mail
                                </i>{" "}
                                &nbsp;
                                <input
                                  type="text"
                                  value={data}
                                  onChange={(evnt) =>
                                    handleChangeOrden(index, evnt)
                                  }
                                  required={true}
                                  autoComplete="off"
                                  name="orden"
                                  placeholder="orden"
                                />
                                {orden.length !== 1 ? (
                                  <button
                                    className="remove"
                                    onClick={() => removeOrden(index)}
                                  >
                                    <i className="material-symbols-outlined">
                                      delete
                                    </i>
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <br />
                      <div className="frow">
                        <div className="frow">
                          <button
                            className="add"
                            onClick={addOrden}
                            style={{ width: "190px", gap: "5px" }}
                          >
                            agregar orden
                            <i className="material-symbols-outlined">add</i>
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                  {/* <div className="frow">
                      <ul>
                        {checked.map(({ nombre, _id }, index) => {
                          return (
                            <li key={index}>
                              <div className="frow">
                                <div className="frow">
                                  <input
                                    className="frow"
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name="deptosarray"
                                    value={_id}
                                    onClick={(evnt) => handleChangeDeptos(evnt)}
                                  />
                                  <label htmlFor={`custom-checkbox-${index}`}>
                                    {nombre}
                                  </label>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      {/* <button >oa</button> */}
                  {/* </div> */}
                  <br />

                  <div className="frow">
                    <button className="buttonMant" type="submit">
                      actualizar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditarCaso;
