import { useState } from "react";
import moment from "moment";
import pic from "../../../../assets/cycling.png";
import Error from "../../../Alerts/Error";
import Success from "../../../Alerts/Success";

function InsertarGerencia() {
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
                Añadir una nueva gerencia
              </h2>
            </div>
  
            <div id="icon">
              <img
                src={pic}
                alt="man-icon"
                width="500px"
                height="550px"
                style={{ pointerEvents: "none" }}
              />
            </div>
  
          </div>
        </div>
      </>
  )
}

export default InsertarGerencia