import { useState } from "react";
import axios from "axios";
import pic from "../../../../assets/boy-sitting-on-legs.png";
import "../../NavbarComponents.css";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";

function InsertarDocumento() {
  const [numCaso, setNumCaso] = useState("");
  const [nomTramite, setNomTramite] = useState("");
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("Activo");
  const [medio, setMedio] = useState("");
  const [ruta, setRuta] = useState("");

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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:4000/documentos`, {
        numCaso: numCaso,
        nomTramite: nomTramite,
        nombre: nombre,
        estado: estado,
        medio: medio,
        ruta: ruta,
      });
      setIsSuccess(true);
      setMessage(data.message);
      showSuccess();
      setNumCaso("");
      setNomTramite("");
      setNombre("");
      setEstado("Activo");
      setMedio("");
      setRuta("");
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

      <div className="containerMantenimiento" style={{ userSelect: "none" }}>
        <div className="frow">
          {isError && <Error msg={message} />}
          {isSuccess && <Success msg={message} />}
        </div>
        <div className="frow">
          
          <div id="form" className="fcolumn">
            <h2 style={{ textShadow: "red -2px 0, cyan 2px 0" }}>
              Añadir un nuevo documento
            </h2>
            <form id="crearEmpresas" method="get" onSubmit={onSubmit}>
              <div className="frow">
                <i className="material-symbols-outlined">work</i> &nbsp;
                <input
                  type="text"
                  id="numCaso"
                  placeholder="código caso"
                  required={true}
                  autoComplete="off"
                  value={numCaso}
                  onChange={(event) => {
                    setNumCaso(event.target.value);
                  }}
                />
              </div>
              <br />

              <div className="frow">
                <i className="material-symbols-outlined">apartment</i> &nbsp;
                <input
                  type="text"
                  id="nomTramite"
                  placeholder="nombre tramite"
                  required={true}
                  autoComplete="off"
                  value={nomTramite}
                  onChange={(event) => {
                    setNomTramite(event.target.value);
                  }}
                />
              </div>
              <br />

              <div className="frow">
                <i className="material-symbols-outlined">description</i> &nbsp;
                <input
                  type="text"
                  id="nombre"
                  placeholder="nombre documento"
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
                <i className="material-symbols-outlined">share_location</i>{" "}
                &nbsp;
                <input
                  type="text"
                  id="medio"
                  placeholder="medio"
                  required={true}
                  autoComplete="off"
                  value={medio}
                  onChange={(event) => {
                    setMedio(event.target.value);
                  }}
                />
              </div>
              <br />
              <div className="frow">
                <i className="material-symbols-outlined">folder</i> &nbsp;
                <input
                  type="file"
                  className=""
                  id=""
                  placeholder="ruta"
                  required={true}
                  autoComplete="off"
                  value={ruta}
                  onChange={(event) => {
                    setRuta(event.target.value);
                  }}
                  style={{}}
                />
              </div>
              <br />
              <div className="frow">
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
              width="350px"
              height="500px"
              style={{ pointerEvents: "none", marginLeft: "50px" }}
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default InsertarDocumento;
