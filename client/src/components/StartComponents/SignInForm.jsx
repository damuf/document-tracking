import "./StartComponents.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import pic from "../../assets/curly-hair-man-holding-smartphone.png";
import Error from '../Alerts/Error'

function SignInForm() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  //alerts
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const showError = () => {
    setTimeout( () => {
      setIsError(false)
    }, 5000);
  }

  //navigate
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup", {replace: false}) //sirve pa devolverse de pag
  }

  const goToHome = () => {
    navigate("/home/*", {replace: true}) //sirve pa devolverse de pag
  }

  //state password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  //submit
  const onSubmit = async(e)=> {
    e.preventDefault()
    try{
      const {data} = await axios.post(`http://localhost:4000/auth/signin`, {
        user: user.toLocaleLowerCase(), password})
      console.log(data.message)
      goToHome()
    } catch (error) {
      setIsError(true)
      showError()
      setMessage(error.response.data.message)
    }
  }

  return (
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <div className="containerStart" style={{userSelect: "none"}}>

          <div id="divAlert" className="frow">
            {isError && <Error msg={message}/>}
          </div>
          
          <div className="frow">
            <div id="icon">
              <img src={pic} alt="man-icon" width= '300px'  height= '400px'/>
            </div>

            <div id="form" className="fcolumn" style={{width: '500px',  height: '500px'}}>
              <h1 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Document Tracking</h1>

              <form id="siginform" method="get" onSubmit={onSubmit}>

                <div className="frow">
                  <i className="material-symbols-outlined">account_circle</i> &nbsp;
                  <input type="text" id="user" placeholder="usuario" required={true} autoComplete="off" value={user} onChange={event => {setUser(event.target.value)}}/>
                </div>
                <br />
                <div className="frow">
                  <i className="material-symbols-outlined">lock</i> &nbsp;
                  <input type={passwordShown ? "text" : "password"} id="password" placeholder="contraseña" required={true} autoComplete="off" value={password} onChange={event => {setPassword(event.target.value)}}/>
                  <i id="togglePassword" className="material-symbols-outlined" onClick={togglePassword} style={{marginLeft: '-30px', cursor: 'pointer'}}>{passwordShown ? "visibility_off" : "visibility"}</i>
                </div>
                <br />
                
                <div className="frow">
                  <button className="buttonStart" type="submit">iniciar sesión</button>
                </div>
              
              </form>

              <div className="frow">
                <p>¿No tienes cuenta? &nbsp; &nbsp;</p>
                <p style={{color: '#003049', textDecoration: 'underline', cursor: 'pointer'}} onClick={goToSignup}>Regístrate</p>
              </div>
            </div> 

          </div>

        </div>

    </>
  );

}

export default SignInForm;
