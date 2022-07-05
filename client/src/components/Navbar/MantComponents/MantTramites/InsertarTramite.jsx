import axios from "axios";
import { useState } from "react";
import "../../NavbarComponents.css";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";
import pic from "../../../../assets/man-with-mustache.png";

function InsertarTramite() {
  //values
  const [departamento, setDepartamento] = useState("");
  const [nombre, setNombre] = useState("");
  const [departamentos, setDepartamentos] = useState([""]);
  const [orden, setOrden] = useState([""]);

  //alerts
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const showError = () => {
    setTimeout(() => {
      setIsError(false);
    }, 5000);
  };

  const showSuccess = () => {
    setTimeout(() => {
      setIsSuccess(false);
    }, 1000000);
  };

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

  const departamentosCarga = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/departamentos`);
      setDepartamentos(data.departamentosFound);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("depa: " + departamento);
      const { data } = await axios.post(`http://localhost:4000/tramites`, {
        depto: departamento,
        nombre: nombre,
        deptos: departamentos,
        orden: orden,
      });
      setDepartamento("");
      setNombre("");

      setDepartamentos([""]);
      setOrden([""]);

      setIsSuccess(true);
      setMessage("trámite guardado");
      showSuccess();
    } catch (error) {
      setIsError(true);
      setMessage(error.response.data.message);
      showError();
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <div
        className="containerMantenimiento"
        style={{ userSelect: "none" }}
        onLoad={departamentosCarga}
      >
        <div className="frow">
          {isError && <Error msg={message} />}
          {isSuccess && <Success msg={message} />}
        </div>
        <div className="frow">
          <div id="form" className="fcolumn" style={{ width: "520px" }}>
            <h2 style={{ textShadow: "red -2px 0, cyan 2px 0" }}>
              Añadir un nuevo trámite
            </h2>

            <form id="crearTramites" method="get" onSubmit={onSubmit}>
              <div className="frow" style={{ width: "300px" }}>
                <div className="frow" style={{ marginRight: "30px" }}>
                  <i className="material-symbols-outlined">home</i>
                  &nbsp;
                  <input
                    type="text"
                    id="departamento"
                    placeholder="departamento"
                    required={true}
                    autoComplete="off"
                    value={departamento}
                    onChange={(event) => {
                      setDepartamento(event.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="frow">
                  <i className="material-symbols-outlined">description</i>
                  &nbsp;
                  <input
                    type="text"
                    id="nombre"
                    placeholder="nombre"
                    required={true}
                    autoComplete="off"
                    value={nombre}
                    onChange={(event) => {
                      setNombre(event.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <br />
              <div className="fcolumn" id="divChecks">
                <div className="frow">
                  <ul style={{ listStyleType: "none", padding: "0" }}>
                    {departamentos.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="frow"
                          style={{ marginBottom: "25px" }}
                        >
                          <div className="frow">
                            <div className="frow">
                              <i className="material-symbols-outlined">
                                fact_check
                              </i>{" "}
                              &nbsp;
                              <input
                                type="text"
                                value={data.nombre}
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
                  </ul>
                </div>
                <div className="column">
                  {orden.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="frow"
                        style={{ marginBottom: "25px" }}
                      >
                        <div className="frow">
                          <div className="frow">
                            <i className="material-symbols-outlined">
                              list_alt
                            </i>{" "}
                            &nbsp;
                            <input
                              type="text"
                              value={data.orden}
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
                <button className="buttonMant" type="submit">
                  crear
                </button>
              </div>
            </form>
          </div>

          <div id="icon">
            <img
              src={pic}
              alt="man-icon"
              width="320px"
              height="600px"
              style={{ pointerEvents: "none", marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InsertarTramite;
