import pic from "../../../../assets/bald-man.png";
import { useState } from "react";
import axios from "axios";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";
import "../../NavbarComponents.css";

function EditarTramite() {
  //atributos
  const [departamento, setDepartamento] = useState("");
  const [nombre, setNombre] = useState("");
  const [departamentos, setDepartamentos] = useState([""]);
  const [orden, setOrden] = useState([0]);

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
              width="350px"
              height="450px"
              style={{ pointerEvents: "none", marginRight: "50px" }}
            />
          </div>

          <div className="fcolumn">
            <h2 style={{ textShadow: "red -2px 0, cyan 2px 0" }}>
              Eliminar un trámite
            </h2>

            <div className="frow">
              <input
                type="text"
                id="nombre"
                placeholder="nombre de trámite"
                autoComplete="off"
                style={{ width: "250px" }}
                value={nombre}
                onChange={(event) => {
                  setNombre(event.target.value);
                }}
              />
              <button className="buscar" style={{ marginLeft: "5px" }}>
                <i className="material-symbols-outlined">search</i> &nbsp;
              </button>
            </div>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default EditarTramite;
