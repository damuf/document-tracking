import './SignupForm.css'
import { useNavigate } from "react-router-dom";

function SignupForm() {

    const navigate = useNavigate();

    const handleOa = () => {
        navigate("/signin", {replace: false}) //sirve pa devolverse de pag
    }

    return (
        <>
            <h1>SignupForm</h1>
            <button onClick = {handleOa}>oa</button>
        </>
    )
}

export default SignupForm