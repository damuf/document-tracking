import pic from "../../../assets/bald-man-holding-phone.png"
import '../../Navbar/NavbarComponents.css'

function Inicio() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div className="containerMantenimiento" style={{userSelect: "none", minWidth: '800px', maxWidth: '800px'}}>

        <div className="frow">

          <div id="icon">
            <img src={pic} alt="man-icon" width= '320px'  height= '450px' style={{pointerEvents:'none'}}/>
          </div>

          <div className="saludo">

              <h1 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Hey!</h1>
              <h2>Que gusto verte por acá, bienvenido a Document Tracking, un sofware diseñado para la gestión de documentos.</h2>
              <i style={{textShadow: 'red -2px 0, cyan 2px 0', fontSize: '25px'}} class="material-symbols-outlined">favorite</i>  
              
          </div>

        </div>

      </div>
    </>
  );
}

export default Inicio;