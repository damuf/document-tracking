import axios from "axios";
import { useState } from "react";
import "../../NavbarComponents.css";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";
import pic from "../../../../assets/man-with-hat.png";

function InsertarCaso() {
  //values
  const [tramite, setTramite] = useState("");
  const [numCaso, setNumCaso] = useState("");
  const [fechaApertura, setFechaApertura] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [estado, setEstado] = useState("Activo");
  const [departamentos, setDepartamentos] = useState([""]);
  const [orden, setOrden] = useState([0]);
  const [checked, setChecked] = useState([-1]);

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

  //const handleChange = (e, index) => {
  //const { value, checked } = e.target;
  // console.log("depas: "+ JSON.stringify(depas))
  // console.log("departamentos: "+ JSON.stringify(departamentos))
  // console.log("check: "+ JSON.stringify(checked))

  // console.log("OLI: "+JSON.stringify(departamentos))
  //};

  const handleChangeDeptos = (e) => {
    const checkboxes = document.querySelectorAll(
      'input[name="deptosarray"]:checked'
    );
    const values = [];
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
    });
    setDepartamentos(values);
    console.log(departamentos);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:4000/casos`, {
        tramite: tramite,
        numCaso: numCaso,
        fechaApertura: fechaApertura,
        fechaFinal: fechaFinal,
        estado: estado,
        deptos: departamentos,
        orden: orden,
      });
      console.log(data.message);
      console.log("OLI: " + JSON.stringify(departamentos));
      setTramite("");
      setNumCaso("");
      setFechaApertura("");
      setFechaFinal("");
      setEstado("");
      setDepartamentos([""]);
      setOrden([""]);

      setIsSuccess(true);
      setMessage("El numero de caso es " + data.numCaso);
      showSuccess();

      console.log(data.message);
    } catch (error) {
      setIsError(true);
      setMessage(error.response.data.message);
      showError();
      console.log(error.response.data.message);
    }
  };

  const departamentosCarga = async () => {
    try {
      const { data: response } = await axios.get(
        `http://localhost:4000/departamentos`
      );
      setChecked(response);
    } catch (error) {
      console.error(error.message);
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
              Añadir un nuevo caso
            </h2>

            <form id="crearCasos" method="get" onSubmit={onSubmit}>
              <div className="fcolumn" style={{ width: "300px" }}>
                <div className="frow">
                  <div className="frow" style={{marginRight:'30px'}}>
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
                    <i className="material-symbols-outlined">barcode</i> &nbsp;
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
                  <div className="frow" style={{marginRight:'15px'}}>
                    <i className="material-symbols-outlined">calendar_month</i>{" "}
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
                    <i className="material-symbols-outlined">calendar_month</i>{" "}
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
                <div
                  className="frow"
                  id="radios"
                  style={{ gap: "10px", fontSize:'20px', color:'#595959'}}
                  value={setEstado}
                  onChange={(event) => {
                    setEstado(event.target.value);
                  }}
                >
                  estado
                  <input
                    id="radios"
                    type="radio"
                    value="activo"
                    name="gender"
                    checked={true}
                  />{" "}
                  activo
                  <input type="radio" value="inactivo" name="gender" /> inactivo
                </div>
              </div>
              <div className="fcolumn">
                <div className="fcolumn" id="divChecks">
                  <div className="frow">
                    <i
                      style={{ marginRight: "10px" }}
                      className="material-symbols-outlined"
                    >
                      fact_check
                    </i>
                    &nbsp;
                    <h3 className="casosNav" style={{fontSize:'20px', color:'#595959'}}>departamentos</h3>
                  </div>

                  <div className="frow">
                    <ul style={{listStyleType: "none", padding:'0'}}>
                      {checked.map(({ nombre, _id }, index) => {
                        return (
                          <li key={index}>
                            <div className="frow">
                              <div className="frow" style={{fontSize:'20px', color:'#595959'}}>
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
                  </div>
                </div>
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

export default InsertarCaso;
