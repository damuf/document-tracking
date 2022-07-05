import axios from "axios";
import { useState } from "react";
import moment from "moment";
import pic from "../../../../assets/man-playing-video-game.png";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";

function EditarCaso() {
  //busqueda
  const [tramiteId, setTramiteId] = useState("");
  const [busqueda, setBusqueda] = useState("");

  //atributos
  const [numCaso, setNumCaso] = useState("");
  const [fechaApertura, setFechaApertura] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [estado, setEstado] = useState("");
  const [orden, setOrden] = useState([""]);
  const [tramite, setTramite] = useState();
  const [departamentos, setDepartamentos] = useState([""]);
  const [nombresDepto, setNombresDeptos] = useState([""]);

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

  const removeDepto = (index) => {
    const rows = [...departamentos];
    rows.splice(index, 1);
    setDepartamentos(rows);
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

  const searchNombreDepto = async (id, index) => {
    nombresDepto.pop()
    const { data } = await axios.get(
      `http://localhost:4000/departamentos/${id}`
    );
    nombresDepto.push(data.departamentoFound.nombre);
  };

  //búsqueda del departamento
  const searchDepartamentos = async (depas) => {
    debugger;
    try {
      depas.forEach((element, index) => {
        searchNombreDepto(element, index);
      });
      console.log(nombresDepto);
      debugger;
      setCasoFound(true);
      setIsSuccess(true);
      showSuccess();
    } catch (error) {
      setCasoFound(false);
      setIsError(true);
    }
  };

  const searchTramite = async (tramite) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/tramites/find/${tramite}`
      );
      setTramite(data.tramiteFound.nombre);
    } catch (error) {
      setCasoFound(false);
      setIsError(true);
    }
  };

  const searchCaso = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:4000/casos/find/${busqueda}`
      );
      searchDepartamentos(data.casoFound.deptos);
      setDepartamentos(data.casoFound.deptos);
      searchTramite(data.casoFound.idTramite);

      setTramiteId(data.casoFound.idTramite);
      const ordenes = data.casoFound.orden;
      setOrden(ordenes);
      setNumCaso(data.casoFound.numCaso);
      setFechaFinal(moment(data.casoFound.fechaFinal).format("YYYY-MM-DD"));
      setFechaApertura(
        moment(data.casoFound.setFechaApertura).format("YYYY-MM-DD")
      );
      setEstado(data.casoFound.estado);

      setMessage(data.message);
    } catch (error) {
      setCasoFound(false);
      setIsError(true);
      setMessage("error buscando el caso");
      showError();
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
          deptos: departamentos,
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
                <form id="crearCasos" method="get" onSubmit={onSubmit}>
                  <div className="fcolumn" style={{ width: "300px" }}>
                    <div className="frow">
                      <div className="frow" style={{ marginRight: "30px" }}>
                        <i className="material-symbols-outlined">description</i>
                        &nbsp;
                        <input
                          type="text"
                          id="tramite"
                          placeholder="nombre de trámite"
                          required={true}
                          autoComplete="off"
                          value={tramite}
                          onChange={(event) => {
                            setTramite(event.target.value);
                          }}
                        />
                      </div>
                      <br />
                      <div className="frow">
                        <i className="material-symbols-outlined">barcode</i>{" "}
                        &nbsp;
                        <input
                          type="text"
                          id="codAlfa"
                          placeholder="código"
                          required={true}
                          autoComplete="off"
                          value={numCaso}
                          onChange={(event) => {
                            setNumCaso(event.target.value);
                          }}
                          maxLength="3"
                          minLength="3"
                          pattern="[A-Z,a-z]{3}"
                        ></input>
                      </div>
                    </div>
                    <br />
                    <div className="frow">
                      <div className="frow" style={{ marginRight: "15px" }}>
                        <i className="material-symbols-outlined">
                          calendar_month
                        </i>{" "}
                        &nbsp;
                        <input
                          style={{ width: "237px" }}
                          type="date"
                          id="fApertura"
                          placeholder="fecha de apertura"
                          required={true}
                          autoComplete="off"
                          value={fechaApertura}
                          onChange={(event) => {
                            setFechaApertura(event.target.value);
                          }}
                        />
                      </div>
                      <br />
                      <div className="frow">
                        <i className="material-symbols-outlined">
                          calendar_month
                        </i>{" "}
                        &nbsp;
                        <input
                          style={{ width: "202px" }}
                          type="date"
                          id="fFinal"
                          placeholder="fecha de cierre"
                          required={true}
                          autoComplete="off"
                          value={fechaFinal}
                          onChange={(event) => {
                            setFechaFinal(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <br />
                    <div className="frow">
                      <i className="material-symbols-outlined">pending</i>{" "}
                      &nbsp;
                      <input
                        style={{ width: "150px" }}
                        id="estado"
                        placeholder="estado"
                        type="text"
                        required={true}
                        autoComplete="off"
                        value={estado}
                        onChange={(event) => {
                          setEstado(event.target.value);
                        }}
                      />
                      <label
                        style={{
                          fontSize: "14px",
                          color: "#595959",
                          width: "200px",
                        }}
                      >
                        "activo" o "inactivo"
                      </label>
                    </div>
                  </div>
                  <div className="column">
                    {nombresDepto.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="frow"
                          style={{ marginTop: "25px" }}
                        >
                          <div className="frow">
                            <div className="frow">
                              <i className="material-symbols-outlined">
                                apartment
                              </i>{" "}
                              &nbsp;
                              <input
                                type="text"
                                value={data}
                                required={true}
                                autoComplete="off"
                                name="depto"
                                placeholder="departamento"
                              />
                              {departamentos.length !== 1 ? (
                                <button
                                  className="remove"
                                  onClick={() => removeDepto(index)}
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
                                  list_alt
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
                    </div>
                  </div>

                  <br />
                  <div className="fcolumn">
                    <button
                      style={{ marginBottom: "20px" }}
                      className="buttonMant"
                      type="submit"
                    >
                      crear
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
