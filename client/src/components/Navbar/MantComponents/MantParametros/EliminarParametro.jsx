import { useState } from "react";
import axios from "axios";
import pic from "../../../../assets/man-holding-leg-up.png";
import "../../NavbarComponents.css";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";

function EliminarParametro() {
  //búsqueda
  const [busqueda, setBusqueda] = useState("");
  const [parametroId, setParametroId] = useState("");

  //atributos
  const [empresa, setEmpresa] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [parametroFound, setParametroFound] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

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

    setTimeout(() => {}, 3000);
  };

  const evaluate = () => {
    if (busqueda !== "") {
      setBusqueda("");
      setParametroFound(false);
    }
  };

  //eliminar parámetro
  const deleteParametro = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/parametros/delete/${parametroId}`
      );
      console.log(data.message);
      setConfirmDelete(true);
      setIsSuccess(true);
      setMessage("parámetro borrado con éxito");
      showSuccess();
      evaluate();
    } catch (error) {
      setParametroFound(false);
      setIsError(true);
      setMessage(error.response.data.message);
      showError();
    }
  };

  //búsqueda de la empresa
  const searchEmpresa = async (empresa) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/empresas/${empresa}`
      );
      setEmpresa(data.empresaId.nombre);
      setIsSuccess(true);
      showSuccess();
    } catch (error) {
      setParametroFound(false);
      setIsError(true);
    }
  };

  //busqueda del parametro
  const searchParametro = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:4000/parametros/find/${busqueda}`
      );
      searchEmpresa(data.parametroFound.idEmpresa);

      setParametroId(data.parametroFound._id);
      setNombre(data.parametroFound.nombre);
      setDescripcion(data.parametroFound.descripcion);

      setParametroFound(true);
      setMessage(data.message);
    } catch (error) {
      setParametroFound(false);
      setIsError(true);
      setMessage("error buscando parámetro");
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
              Eliminar un parámetro
            </h2>

            <div className="frow">
              <input
                type="text"
                id="eliminar"
                placeholder="nombre parámetro"
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
                onClick={searchParametro}
              >
                <i className="material-symbols-outlined">search</i> &nbsp;
              </button>
            </div>

            <br />

            {parametroFound && (
              <>
                <div className="containerDelete">
                  <div className="frow">
                    <p>Datos del parámetro</p>
                  </div>
                  <div className="frow">
                    <p>Empresa: {empresa}</p>
                  </div>
                  <div className="frow">
                    <p>Nombre: {nombre}</p>
                  </div>
                  <div className="frow">
                    <p>Descripción: {descripcion}</p>
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
                        onClick={deleteParametro}
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

export default EliminarParametro;
