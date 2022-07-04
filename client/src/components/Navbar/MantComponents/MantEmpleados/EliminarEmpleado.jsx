import axios from "axios";
import { useState } from "react";
import moment from "moment";
import pic from "../../../../assets/girl.png";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";

function EliminarEmpleado() {
  //búsqueda
  const [empleadoId, setEmpleadoId] = useState("");

  //atributos
  const [departamento, setDepto] = useState("");
  const [nombre, setNombre] = useState("");
  const [papellido, setPApellido] = useState("");
  const [sapellido, setSApellido] = useState("");
  const [user, setUser] = useState("");
  const [cedula, setCedula] = useState("");
  const [fNacim, setFNacim] = useState("");

  const [empleadoFound, setEmpleadoFound] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const evaluate = () => {
    if (nombre !== "") {
      setNombre("");
      setEmpleadoFound(false);
      setConfirmDelete(false);
    }
  };

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

  //eliminar empleado
  const deleteEmpleado = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/empleados/delete/${cedula}`
      );
      console.log(data.message);
      setConfirmDelete(true);
      setIsSuccess(true);
      setMessage("empleado borrada con éxito");
      showSuccess();
      evaluate();
    } catch (error) {
      setEmpleadoFound(false);
      setIsError(true);
      setMessage(error.response.data.message);
      showError();
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
        `http://localhost:4000/empleados/find/${cedula}`
      );
      searchDepartamento(data.empleadoFound.idDepto);

      console.log(empleadoId);
      setEmpleadoId(data.empleadoFound._id);
      setNombre(data.empleadoFound.nombre);
      setPApellido(data.empleadoFound.papellido);
      setSApellido(data.empleadoFound.sapellido);
      setUser(data.empleadoFound.user);
      setCedula(data.empleadoFound.cedula);
      setFNacim(moment(data.empleadoFound.fNacim).format("YYYY-MM-DD"));

      setEmpleadoFound(true);
      setMessage(data.message);
    } catch (error) {
      setEmpleadoFound(false);
      setIsError(true);
      setMessage("error");
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
          {confirmDelete && <Success msg={message} />}
        </div>

        <div className="frow">
          <div className="fcolumn">
            <h2 style={{ textShadow: "red -2px 0, cyan 2px 0" }}>
              Eliminar un empleado
            </h2>

            <div className="frow">
              <input
                type="text"
                id="eliminar"
                placeholder="cedula del empleado"
                autoComplete="off"
                style={{ width: "250px" }}
                value={cedula}
                onChange={(event) => {
                  setCedula(event.target.value);
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

            <br />

            {empleadoFound && (
              <>
                <div className="containerDelete">
                  <div className="frow">
                    <p>Datos de la empleado</p>
                  </div>
                  <div className="frow">
                    <p>Departamento: {departamento}</p>
                  </div>
                  <div className="frow">
                    <p>Nombre: {nombre}</p>
                  </div>
                  <div className="frow">
                    <p>Primer apellido: {papellido}</p>
                  </div>
                  <div className="frow">
                    <p>Segundo apellido: {sapellido}</p>
                  </div>
                  <div className="frow">
                    <p>Usuario: {user}</p>
                  </div>
                  <div className="frow">
                    <p>Cedula: {cedula}</p>
                  </div>
                  <div className="frow">
                    <p>Fecha de nacimiento: {fNacim}</p>
                  </div>
                </div>

                <br />

                <div className="fcolumn">
                  <div className="frow">
                    <p>¿Está seguro que desea eliminar la empresa?</p>
                  </div>

                  <div className="frow">
                    <div className="frow">
                      <button
                        className="remove"
                        style={{ width: "100px", height: "50px" }}
                        onClick={deleteEmpleado}
                      >
                        sí
                      </button>
                    </div>

                    <div className="frow">
                      <button
                        className="add"
                        style={{ width: "100px", height: "50px" }}
                        onClick={evaluate}
                      >
                        no
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div id="icon">
            <img
              src={pic}
              alt="man-icon"
              width="350px"
              height="450px"
              style={{ pointerEvents: "none", marginLeft: "50px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EliminarEmpleado;
