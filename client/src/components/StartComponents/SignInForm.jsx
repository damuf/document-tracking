import "./StartComponents.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/curly-hair-man-holding-smartphone.png";

function SignInForm() {

  const navigate = useNavigate();
  const goToSignup = () => {
      navigate("/signup", {replace: false}) //sirve pa devolverse de pag
  }

  //state password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <div className="container" style={{userSelect: "none"}}>
        
          <div id="icon">
            <img src={pic} alt="man-icon" width= '300px'  height= '400px'/>
          </div>

          <div id="form" className="fcolumn" style={{width: '500px',  height: '500px'}}>
            <h1 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Document Tracking</h1>

            <form id="siginform" method="get">

              <div className="frow">
                <i className="material-symbols-outlined">account_circle</i> &nbsp;
                <input type="text" id="user" placeholder="usuario" required={true} autocomplete="off"/>
              </div>
              <br />
              <div className="frow">
                <i className="material-symbols-outlined">lock</i> &nbsp;
                <input type={passwordShown ? "text" : "password"} id="password" placeholder="contraseña" required={true} autocomplete="off"/>
                <i id="togglePassword" className="material-symbols-outlined" onClick={togglePassword} style={{marginLeft: '-30px', cursor: 'pointer'}}>{passwordShown ? "visibility_off" : "visibility"}</i>
              </div>
              <br />
              <div className="frow">
                <button type="submit">iniciar sesión</button>
              </div>
            
            </form>

            <div className="frow">
              <p>¿No tienes cuenta? &nbsp; &nbsp;</p>
              <p style={{color: '#003049', textDecoration: 'underline'}} onClick={goToSignup}>Regístrate</p>
            </div>

          </div>

        </div>

    </>
  );

}

export default SignInForm;
