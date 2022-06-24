import { Route, Routes } from "react-router-dom";
import Documentos from "./DocumentosPage";
import Empresas from "./EmpresasPage";
import Inicio from "./InicioPage";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer'
import './NavarPage.css'

function NavbarPage() {
  return (
    <div className="body-NavPage">
      <Navbar />
      <div className="containerNav">
        <Routes>
          <Route path="*/documentos" element={<Documentos />} />
          <Route path="*/empresas" element={<Empresas />} />
          <Route path="*/home" element={<Inicio />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default NavbarPage;
