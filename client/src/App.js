import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignupForm from './components/SignupForm/SignupForm';
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/signup" element = {<SignupForm />} />
          <Route path="/" element = {<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
