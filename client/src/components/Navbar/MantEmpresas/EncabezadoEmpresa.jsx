import React from 'react'

function EncabezadoEmpresa() {
  return (
    <>
        <div className="containerMantenimiento" style={{userSelect: "none"}}>
          <h1 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Mantenimiento de empresas</h1>
          <h4>Esta sección permite la insersión, edición, eliminación y modificación de las empresas de la organización</h4>
      </div>
    </>
  );
}

export default EncabezadoEmpresa