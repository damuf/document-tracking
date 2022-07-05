import Encabezado from "../MantComponents/Encabezados/EncabezadoMant"
import Insertar from "../MantComponents/MantCasos/InsertarCaso"
import Eliminar from "../MantComponents/MantCasos/EliminarCaso"
import Editar from "../MantComponents/MantCasos/EditarCaso"

function Casos() {
  return (
    <>
      <Encabezado title={"Mantenimiento de casos"} description={"Esta sección permite la inserción, edición, eliminación y actualización de los casos de la organización"} />
      <Insertar/>
      <Editar/>
      <Eliminar/>
    </>
  );
}

export default Casos;