import './StartComponents.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import pic from "../../assets/lady-wearing-blazer.png";
import Error from '../Alerts/Error'
import Success from '../Alerts/Success'

function SignUpForm() {

    const [departamento, setDepto] = useState('');
    const [nombre, setNombre] = useState('');
    const [papellido, setPApellido] = useState('');
    const [sapellido, setSApellido] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [cedula, setCedula] = useState('');
    const [fNacim, setFNacim] = useState('');

    const hoy = new Date()
    var mes = hoy.getMonth() + 1
    if(mes < 10) mes = '0' + mes
    const fechaInicio = hoy.getFullYear() + '-' + mes + '-' +  hoy.getDate();

    //alerts
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const showError = () => {
        setTimeout( () => {
        setIsError(false)
        }, 5000);
    }

    const showSuccess = () => {
        setTimeout( () => {
            setIsSuccess(false)
        }, 4000);

        setTimeout( () => {
            goToSignin()
        }, 3000);
    }

    //navigate
    const navigate = useNavigate();

    const goToSignin = () => {
        navigate("/", {replace: false}) //sirve pa devolverse de pag
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
            const {data} = await axios.post(`http://localhost:4000/auth/signup`, {
                departamento: departamento.toLowerCase(),
                nombre: nombre.toLocaleLowerCase(),
                papellido: papellido.toLocaleLowerCase(),
                sapellido: sapellido.toLocaleLowerCase(),
                user: user.toLocaleLowerCase(),
                password, cedula: cedula.toLocaleLowerCase(), fNacim, fechaInicio})
            
            console.log(data.message)
            setIsSuccess(true)
            setMessage(data.message)
            showSuccess()
        } catch (error){
            setIsError(true)
            setMessage(error.response.data.message)
            showError()
        }
    }

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            
            <div className="containerStart" style={{userSelect: "none"}}>

            <div className="frow">
                {isError && <Error msg={message}/>}
                {isSuccess && <Success msg={message}/>}
            </div>

            <div className="frow">
                <div id="icon">
                    <img src={pic} alt="man-icon" width= '300px'  height= '550px' style={{pointerEvents:'none'}}/>
                </div>

                <div id="form" className="fcolumn" style={{width: "520px"}}>
                <h1 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Document Tracking</h1>

                <form id="sigupform" method="get" onSubmit={onSubmit}>

                    <div className="frow">
                        <div className="frow" style={{marginRight: '30px'}}>
                            <i className="material-symbols-outlined">diversity_3</i>&nbsp;
                            <input type="text" id="departamento" placeholder="departamento" required={true} autoComplete="off" value={departamento} onChange={event => {setDepto(event.target.value)}}/>
                        </div> 
                        <div className="frow">    
                            <i className="material-symbols-outlined">edit</i> &nbsp;
                            <input type="text" id="nombre" placeholder="nombre" required={true} autoComplete="off" value={nombre} onChange={event => {setNombre(event.target.value)}}/>
                        </div>
                    </div>
                    <br />
                    <div className="frow" >
                        <div className="frow" style={{marginRight: '30px'}}>
                            <i className="material-symbols-outlined">edit</i> &nbsp;
                            <input type="text" id="primer_apellido" placeholder="primer apellido" required={true} autoComplete="off" value={papellido} onChange={event => {setPApellido(event.target.value)}}/>
                        </div>
                        <div className="frow">
                            <i className="material-symbols-outlined">edit</i> &nbsp;
                            <input type="text" id="segundo_apellido" placeholder="segundo apellido" required={true} autoComplete="off" value={sapellido} onChange={event => {setSApellido(event.target.value)}}/>
                        </div>
                    </div>
                    <br />
                    <div className="frow">
                        <div className="frow" style={{marginRight: '30px'}}>
                            <i className="material-symbols-outlined">account_circle</i> &nbsp;
                            <input type="text" id="user" placeholder="usuario" required={true} autoComplete="off" value={user} onChange={event => {setUser(event.target.value)}}/>
                        </div>
                        <div className="frow">
                            <i className="material-symbols-outlined">lock</i> &nbsp;
                            <input type={passwordShown ? "text" : "password"} id="password" placeholder="contraseña" required={true} />
                            <i id="togglePassword" className="material-symbols-outlined" onClick={togglePassword} style={{marginLeft: '-30px', cursor: 'pointer'}} value={password} onChange={event => {setPassword(event.target.value)}}>{passwordShown ? "visibility_off" : "visibility"}</i>
                        </div>
                    </div>
                    <br />
                    <div className="frow" style={{display: '-webkit-inline-flex', marginLeft:'18px'}}>
                        <div className="frow">
                            <i className="material-symbols-outlined">badge</i> &nbsp;
                            <input type="text" id="cedula" placeholder="cedula" required={true} autoComplete="off" value={cedula} onChange={event => {setCedula(event.target.value)}}/>
                        </div>
                        <div className="frow" style={{width: '262px', marginLeft:'18px'}}>
                            <i className="material-symbols-outlined">cake</i> &nbsp;
                            <input type="date" id="fNacim" placeholder="fecha nacimiento" required={true} autoComplete="off" value={fNacim} onChange={event => {setFNacim(event.target.value)}}/>
                        </div>
                    </div>
                    <br />
                    <div className="frow" style={{marginTop:'4%'}}>
                        <button className="buttonStart" type="submit">registrarse</button>
                    </div>
                
                </form>

                <div className="frow">
                    <p>¿Ya tienes cuenta? &nbsp; &nbsp;</p>
                    <p style={{color: '#003049', textDecoration: 'underline', cursor: 'pointer'}} onClick={goToSignin}>Inicia Sesión</p>
                </div>

                </div>

            </div>

        </div>

        </>
    )
}

export default SignUpForm