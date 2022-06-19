import '../SigninForm/SigninForm.css'
import { useNavigate } from "react-router-dom";
import pic from "../../assets/lady-wearing-blazer.png";

function SignupForm() {

    const navigate = useNavigate();
    const goToSignin = () => {
        navigate("/signin", {replace: false}) //sirve pa devolverse de pag
    }

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <div className="container" style={{userSelect: "none"}}>
            
            <div id="icon">
            <img src={pic} alt="man-icon" width= '300px'  height= '550px'/>
            </div>

            <div id="form" className="fcolumn" style={{width: '500px',  height: '700px'}}>
            <h1 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Document Tracking</h1>

            <form id= "sigunform" method="get">

                <div className="frow">
                    <i class="material-symbols-outlined">diversity_3</i> &nbsp; &nbsp;
                    <input type="text" id="departamento" placeholder="departamento" required={true}/>
                </div>
                <br />
                <div className="frow">
                    <i class="material-symbols-outlined">drive_file_rename_outline</i> &nbsp; &nbsp;
                    <input type="text" id="nombre" placeholder="nombre" required={true}/>  &nbsp; &nbsp;
                    <input type="text" id="primer_apellido" placeholder="primer apellido" required={true}/>  &nbsp; &nbsp;
                    <input type="text" id="segundo_apellido" placeholder="segundo apellido" required={true}/>
                </div>
                <br />
                <div className="frow">
                    <i class="material-symbols-outlined">account_circle</i> &nbsp; &nbsp;
                    <input type="text" id="user" placeholder="usuario" required={true}/>  &nbsp; &nbsp;
                    <i class="material-symbols-outlined">lock</i> &nbsp; &nbsp;
                    <input type="password" id="password" placeholder="contraseña" required={true} />
                </div>
                <br />
                <div className="frow">
                    <i class="material-symbols-outlined">cake</i> &nbsp; &nbsp;
                    <input type="text" id="cedula" placeholder="cedula" required={true}/>
                    <i class="material-symbols-outlined">badge</i> &nbsp; &nbsp;
                    <input type="date" id="fnacim" placeholder="fecha de nacimiento" required={true}/>
                </div>
                <br />
                <button type="submit">registrarse</button>

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

export default SignupForm