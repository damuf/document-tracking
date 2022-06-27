import pic from "../../../assets/women-on-wheel-chair.png";

function EditarEmpresa() {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <div className="containerMantenimiento" style={{userSelect: "none"}}>

        <div className="frow">
        </div>

        <div className="frow">

            <div id="icon">
                <img src={pic} alt="man-icon" width= '320px'  height= '450px' style={{pointerEvents:'none', marginRight: '50px'}}/>
            </div>

            <div className="fcolumn">
                <h2 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Editar una empresa</h2>

                <div className="frow">
                    <input type="text" id="nombre" placeholder="nombre de la empresa" autoComplete="off" style={{width:'250px'}}/>
                    <button className="buscar" style={{marginLeft: '5px'}}>
                        <i className="material-symbols-outlined">search</i> &nbsp;
                    </button>
                </div>

            </div>
        </div>
    
    </div>

    </>
  )
}

export default EditarEmpresa