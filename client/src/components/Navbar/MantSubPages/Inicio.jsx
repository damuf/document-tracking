import pic from "../../../assets/bald-man-holding-phone.png"
import '../../Navbar/NavbarComponents.css'

function Inicio() {
  return (
    <>
      <div className="containerMantenimiento" style={{userSelect: "none", minWidth: '800px', maxWidth: '800px'}}>

        <div className="frow">

          <div id="icon">
            <img src={pic} alt="man-icon" width= '320px'  height= '450px' style={{pointerEvents:'none', marginRight: '50px'}}/>
          </div>

          <div className="fcolumn">
              <h1 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Hey!</h1>
              <h2 style={{textShadow: 'red -2px 0, cyan 2px 0'}}>Que gusto verte por acá, bienvenido a Document Tracking,
              un sofware diseñado para la gestión de documentos.
              </h2>
          </div>

        </div>

      </div>
    </>
  );
}

export default Inicio;