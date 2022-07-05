import Encabezado from "../MantComponents/Encabezados/EncabezadoMant"
import Insertar from "../MantComponents/MantTramites/InsertarTramite"
import Editar from "../MantComponents/MantTramites/EditarTramite"
import Eliminar from "../MantComponents/MantTramites/EliminarTramite"

function Tramites(){

  return (
    <>
      <Encabezado title={"Mantenimiento de tramites"} description={"Esta sección permite la inserción, edición, eliminación y actualización de los tramites de la organización"} />
      <Insertar/>
      <Eliminar/>
      {/* <Editar/> */}
     
    </>
  );

}

export default Tramites;