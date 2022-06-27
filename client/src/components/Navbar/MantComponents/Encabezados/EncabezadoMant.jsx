import React from 'react'

function EncabezadoMant(props) {
  return (
    <>
        <div className="containerMantenimiento" style={{userSelect: "none"}}>
          <h1 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>{props.title}</h1>
          <h4>{props.description}</h4>
      </div>
    </>
  );
}

export default EncabezadoMant