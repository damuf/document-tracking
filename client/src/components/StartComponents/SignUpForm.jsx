import './StartComponents.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/lady-wearing-blazer.png";

function SignUpForm() {

    const navigate = useNavigate();
    const goToSignin = () => {
        navigate("/", {replace: false}) //sirve pa devolverse de pag
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

            <div className="container" style={{userSelect: "none", height: "550px"}}>
            
            <div id="icon">
            <img src={pic} alt="man-icon" width= '300px'  height= '550px' style={{pointerEvents:'none'}}/>
            </div>

            <div id="form" className="fcolumn" style={{width: "520px"}}>
            <h1 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Document Tracking</h1>

            <form id="sigupform" method="get">

                <div className="frow">
                    <div className="frow" style={{marginRight: '30px'}}>
                        <i className="material-symbols-outlined">diversity_3</i>&nbsp;
                        <input type="text" id="departamento" placeholder="departamento" required={true} autocomplete="off"/>
                    </div> 
                    <div className="frow">    
                        <i className="material-symbols-outlined">edit</i> &nbsp;
                        <input type="text" id="nombre" placeholder="nombre" required={true} autocomplete="off"/>
                    </div>
                </div>
                <br />
                <div className="frow" >
                    <div className="frow" style={{marginRight: '30px'}}>
                        <i className="material-symbols-outlined">edit</i> &nbsp;
                        <input type="text" id="primer_apellido" placeholder="primer apellido" required={true} autocomplete="off"/>
                    </div>
                    <div className="frow">
                        <i className="material-symbols-outlined">edit</i> &nbsp;
                        <input type="text" id="segundo_apellido" placeholder="segundo apellido" required={true} autocomplete="off"/>
                    </div>
                </div>
                <br />
                <div className="frow">
                    <div className="frow" style={{marginRight: '30px'}}>
                        <i className="material-symbols-outlined">account_circle</i> &nbsp;
                        <input type="text" id="user" placeholder="usuario" required={true} autocomplete="off"/>
                    </div>
                    <div className="frow">
                        <i className="material-symbols-outlined">lock</i> &nbsp;
                        <input type={passwordShown ? "text" : "password"} id="password" placeholder="contraseña" required={true} />
                        <i id="togglePassword" className="material-symbols-outlined" onClick={togglePassword} style={{marginLeft: '-30px', cursor: 'pointer'}}>{passwordShown ? "visibility_off" : "visibility"}</i>
                    </div>
                </div>
                <br />
                <div className="frow" style={{display: '-webkit-inline-flex', marginLeft:'18px'}}>
                    <div className="frow">
                        <i className="material-symbols-outlined">badge</i> &nbsp;
                        <input type="text" id="cedula" placeholder="cedula" required={true} autocomplete="off"/>
                    </div>
                    <div className="frow" style={{width: '262px', marginLeft:'18px'}}>
                        <i className="material-symbols-outlined">cake</i> &nbsp;
                        <input type="date" id="fnacim" placeholder="fecha nacimiento" required={true} autocomplete="off"/>
                    </div>
                </div>
                <br />
                <div className="frow" style={{marginTop:'4%'}}>
                    <button type="submit">registrarse</button>
                </div>
                
            </form>

            <div className="frow">
                <p>¿Ya tienes cuenta? &nbsp; &nbsp;</p>
                <p style={{color: '#003049', textDecoration: 'underline'}} onClick={goToSignin}>Inicia Sesión</p>
            </div>

            </div>

        </div>

        </>
    )
}

export default SignUpForm