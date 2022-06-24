import SignInForm from '../../components/StartComponents/SignInForm'
import Footer from '../../components/Footer/Footer'
import './StartPage.css'

function SignIn() {
  return (
    <div className='body-StartPage'>
       <SignInForm/>
       <Footer/>
    </div>
  )
}

export default SignIn