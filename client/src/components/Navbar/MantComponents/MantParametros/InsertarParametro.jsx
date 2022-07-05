import { useState } from "react";
import axios from "axios";
import pic from "../../../../assets/woman-sitting-in-japanese-culture.png";
import "../../NavbarComponents.css";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";

function InsertarParametro() {
  //atributos
  const [empresa, setEmpresa] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

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

  //submit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:4000/parametros`, {
        empresa: empresa.toLowerCase(),
        nombre: nombre.toLocaleLowerCase(),
        descripcion: descripcion.toLocaleLowerCase(),
      });
      console.log(data.message);
      setIsSuccess(true);
      setMessage(data.message);
      showSuccess();
      setEmpresa("")
      setNombre("")
      setDescripcion("")
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
          <div id="form" className="fcolumn" style={{ width: "520px" }}>
            <h2 style={{ textShadow: "red -2px 0, cyan 2px 0" }}>
              Añadir un nuevo parámetro
            </h2>

            <form id="insertarParametroform" method="get" onSubmit={onSubmit}>
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
                  <i className="material-symbols-outlined">description</i> &nbsp;
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
              <div className="frow" style={{ marginTop: "4%" }}>
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
              height="450px"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InsertarParametro;
