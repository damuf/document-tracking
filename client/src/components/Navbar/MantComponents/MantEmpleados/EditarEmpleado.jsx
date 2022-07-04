import axios from "axios";
import { useState } from "react";
import moment from "moment";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";
import pic from "../../../../assets/man-with-beard-and-long-hair.png";

function EditarEmpleado() {
  //búsqueda
  const [busqueda, setBusqueda] = useState("");
  const [empleadoId, setEmpleadoId] = useState("");

  //atributos
  const [departamento, setDepto] = useState("");
  const [nombre, setNombre] = useState("");
  const [papellido, setPApellido] = useState("");
  const [sapellido, setSApellido] = useState("");
  const [user, setUser] = useState("");
  const [cedula, setCedula] = useState("");
  const [fNacim, setFNacim] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");

  const [empleadoFound, setEmpleadoFound] = useState(false);

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
    }, 4000);
  };

  const evaluate = () => {
    if (nombre !== "") {
      setNombre("");
      setEmpleadoFound(false);
    }
  };

  //búsqueda del departamento
  const searchDepartamento = async (depto) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/departamentos/${depto}`
      );
      setDepto(data.departamentoFound.nombre);
      setIsSuccess(true);
      showSuccess();
    } catch (error) {
      setEmpleadoFound(false);
      setIsError(true);
    }
  };

  //busqueda del empleado
  const searchEmpleado = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:4000/empleados/find/${busqueda}`
      );
      searchDepartamento(data.empleadoFound.idDepto);

      setEmpleadoId(data.empleadoFound._id);
      setNombre(data.empleadoFound.nombre);
      setPApellido(data.empleadoFound.papellido);
      setSApellido(data.empleadoFound.sapellido);
      setUser(data.empleadoFound.user);
      setCedula(data.empleadoFound.cedula);
      setFNacim(moment(data.empleadoFound.fNacim).format("YYYY-MM-DD"));
      setFechaInicio(
        moment(data.empleadoFound.fechaInicio).format("YYYY-MM-DD")
      );

      setEmpleadoFound(true);
      setMessage(data.message);
    } catch (error) {
      setEmpleadoFound(false);
      setIsError(true);
      setMessage("error");
      showError();
    }
  };

  //submit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:4000/empleados/edit/${empleadoId}`,
        {
          departamento: departamento.toLocaleLowerCase(),
          nombre: nombre.toLocaleLowerCase(),
          papellido: papellido.toLocaleLowerCase(),
          sapellido: sapellido.toLocaleLowerCase(),
          cedula: cedula,
          fNacim: fNacim,
          fechaInicio: fechaInicio,
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
              Editar un empleado
            </h2>

            <div className="frow">
              <input
                type="text"
                id="editar"
                placeholder="cedula del empleado"
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
                onClick={searchEmpleado}
              >
                <i className="material-symbols-outlined">search</i> &nbsp;
              </button>
            </div>

            <div className="column">
              <br />
              {empleadoFound && (
                <form id="editarEmpleado" method="get" onSubmit={onSubmit}>
                  <div className="frow">
                    <div className="frow" style={{ marginRight: "30px" }}>
                      <i className="material-symbols-outlined">diversity_3</i>
                      &nbsp;
                      <input
                        type="text"
                        id="departamento"
                        placeholder="departamento"
                        required={true}
                        autoComplete="off"
                        value={departamento}
                        onChange={(event) => {
                          setDepto(event.target.value);
                        }}
                      />
                    </div>
                    <div className="frow">
                      <i className="material-symbols-outlined">edit</i> &nbsp;
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
                      />
                    </div>
                  </div>
                  <br />
                  <div className="frow">
                    <div className="frow" style={{ marginRight: "30px" }}>
                      <i className="material-symbols-outlined">edit</i> &nbsp;
                      <input
                        type="text"
                        id="primer_apellido"
                        placeholder="primer apellido"
                        required={true}
                        autoComplete="off"
                        value={papellido}
                        onChange={(event) => {
                          setPApellido(event.target.value);
                        }}
                      />
                    </div>
                    <div className="frow">
                      <i className="material-symbols-outlined">edit</i> &nbsp;
                      <input
                        type="text"
                        id="segundo_apellido"
                        placeholder="segundo apellido"
                        required={true}
                        autoComplete="off"
                        value={sapellido}
                        onChange={(event) => {
                          setSApellido(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="frow">
                    <div className="frow" style={{ marginRight: "30px" }}>
                      <i className="material-symbols-outlined">badge</i> &nbsp;
                      <input
                        type="text"
                        id="cedula"
                        placeholder="cedula"
                        required={true}
                        autoComplete="off"
                        value={cedula}
                        //contentEditable="false"
                      />
                    </div>
                    <div className="frow">
                      <i className="material-symbols-outlined">
                        account_circle
                      </i>{" "}
                      &nbsp;
                      <input
                        type="text"
                        id="user"
                        placeholder="usuario"
                        required={true}
                        autoComplete="off"
                        value={user}
                        onChange={(event) => {
                          setUser(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="frow">
                    <div
                      className="frow"
                      style={{ width: "262px", marginRight: "10px" }}
                    >
                      <i className="material-symbols-outlined">cake</i> &nbsp;
                      <input
                        type="date"
                        id="fNacim"
                        placeholder="fecha nacimiento"
                        required={true}
                        autoComplete="off"
                        value={fNacim}
                        onChange={(event) => {
                          setFNacim(event.target.value);
                        }}
                      />
                    </div>
                    <div className="frow" style={{ width: "254px" }}>
                      <i className="material-symbols-outlined">work</i> &nbsp;
                      <input
                        type="date"
                        id="fechaInicio"
                        placeholder="fecha de entrada"
                        required={true}
                        autoComplete="off"
                        value={fechaInicio}
                        onChange={(event) => {
                          setFechaInicio(event.target.value);
                        }}
                      />
                    </div>
                  </div>
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

export default EditarEmpleado;
