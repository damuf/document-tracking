import Encabezado from "../MantComponents/Encabezados/EncabezadoMant"
import Insertar from "../MantComponents/MantTramites/InsertarTramite"
import Editar from "../MantComponents/MantTramites/EditarTramite"
import Eliminar from "../MantComponents/MantTramites/EliminarTramite"

function Tramites(){

  return (
    <>
      <Encabezado title={"Mantenimiento de trámites"} description={"Esta sección permite la inserción, edición, eliminación y actualización de los trámites de la organización"} />
      <Insertar/>
      <Editar/>
      <Eliminar/>
    </>
  );

}

export default Tramites;