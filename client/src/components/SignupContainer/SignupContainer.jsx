import './SignupContainer.css'
import { useNavigate } from "react-router-dom";

function SignupContainer() {

    const navigate = useNavigate();

    const handleOa = () => {
        navigate("/signin", {replace: false}) //sirve pa devolverse de pag
    }

    return (
        <>
            <h1>SignupContainer</h1>
            <button onClick = {handleOa}>oa</button>
        </>
    )
}

export default SignupContainer