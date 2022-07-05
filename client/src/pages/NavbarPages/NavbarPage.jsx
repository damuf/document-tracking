import { Route, Routes } from "react-router-dom";
import Documentos from "./DocumentosPage";
import Empresas from "./EmpresasPage";
import Empleados from "./EmpleadosPage";
import Casos from "./CasosPage";
import Parametros from "./ParametrosPage";
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
          <Route path="/*" element={<Inicio />} />
          <Route path="*/empresas" element={<Empresas />} />
          <Route path="*/empleados" element={<Empleados />} />
          <Route path="*/documentos" element={<Documentos />} />
          <Route path="*/casos" element={<Casos />} />
          <Route path="*/parametros" element={<Parametros />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default NavbarPage;
