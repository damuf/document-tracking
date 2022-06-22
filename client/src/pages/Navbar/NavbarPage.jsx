import { Route, Routes } from "react-router-dom";
import React from "react";
import Documentos from "../../pages/Navbar/Documentos";
import Empresas from "../../pages/Navbar/Empresas";
import IDK from "../../pages/Navbar/Inicio";
import Navbar from "../../components/Navbar/NavbarComp";
import Footer from '../../components/Footer/Footer'

function NavbarF() {
  return (
    <>
      <Navbar />
      <div className="containerNav">
        <Routes>
          <Route path="*/documentos" element={<Documentos />} />
          <Route path="*/empresas" element={<Empresas />} />
          <Route path="*/home" element={<IDK />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default NavbarF;
