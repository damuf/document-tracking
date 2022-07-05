import axios from "axios";
import { useState } from "react";
import pic from "../../../../assets/geeky-man.png";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";
import "../../NavbarComponents.css";

function EditarParametro() {
  //búsqueda
  const [busqueda, setBusqueda] = useState("");
  const [parametroId, setParametroId] = useState("");

  //atributos
  const [empresa, setEmpresa] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [parametroFound, setParametroFound] = useState(false);

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

  //submit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:4000/parametros/edit/${parametroId}`,
        {
          empresa: empresa.toLocaleLowerCase(),
          nombre: nombre.toLocaleLowerCase(),
          descripcion: descripcion.toLocaleLowerCase(),
        }
      );
      setIsSuccess(true);
      setMessage(data.message);
      showSuccess();
      evaluate()
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
              Editar un parámetro
            </h2>

            <div className="frow">
              <input
                type="text"
                id="editar"
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

            <div className="column">
              <br />
              {parametroFound && (
                <form id="editarEmpleado" method="get" onSubmit={onSubmit}>
                  <div className="frow">
                    <i className="material-symbols-outlined">apartment</i>&nbsp;
                    <input
                      type="text"
                      id="empresa"
                      placeholder="empresa"
                      required={true}
                      autoComplete="off"
                      value={empresa}
                      onChange={(event) => {
                        setEmpresa(event.target.value);
                      }}
                    />
                  </div>
                  <br />

                  <div className="frow">
                    <i className="material-symbols-outlined">edit</i> &nbsp;
                    <input
                      type="text"
                      id="nombre"
                      placeholder="nombre parámetro"
                      required={true}
                      autoComplete="off"
                      value={nombre}
                      onChange={(event) => {
                        setNombre(event.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div className="frow">
                    <div className="frow">
                      <i className="material-symbols-outlined">description</i>{" "}
                      &nbsp;
                      <input
                        type="text"
                        id="descripcion"
                        placeholder="descripcion"
                        required={true}
                        autoComplete="off"
                        value={descripcion}
                        onChange={(event) => {
                          setDescripcion(event.target.value);
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

export default EditarParametro;
