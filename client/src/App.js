import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignupContainer from './components/SignupContainer/SignupContainer';
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/signup" element = {<SignupContainer />} />
          <Route path="/signin" element = {<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
