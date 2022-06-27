import Encabezado from "../MantComponents/Encabezados/EncabezadoMant"
import Insertar from "../MantComponents/MantCasos/InsertarCaso"
import Eliminar from "../MantComponents/MantCasos/EliminarCaso"


function Casos() {

  return (
    <>
        <Encabezado title={"Mantenimiento de casos"} description={"Esta sección permite la inserción, edición, eliminación y actualización de los casos de la organización"} />
        <Insertar/>
        <Eliminar/>
    </>
  );
}

export default Casos;