import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, { useEffect } from 'react'
import SignUp from './pages/StartPages/SignUp';
import SignIn from "./pages/StartPages/SignIn";

function App() {

  useEffect(() => {
    document.title = "Document Tracking"
  }, [])

  return (
    <Router>
      <Routes>
          <Route path="/signup" element = {<SignUp />} />
          <Route path="/" element = {<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
