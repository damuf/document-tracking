import Encabezado from "../MantComponents/Encabezados/EncabezadoMant"
import Insertar from "../MantComponents/MantDocumentos/InsertarDocumento"
import Editar from "../MantComponents/MantDocumentos/EditarDocumento"
import Eliminar from "../MantComponents/MantDocumentos/EliminarDocumento"


function Documentos(){

  return (
    <>
      <Encabezado title={"Mantenimiento de documentos"} description={"Esta sección permite la inserción, edición, eliminación y actualización de los documentos de la organización"} />
      <Insertar/>
      <Editar/>
      <Eliminar/>
    </>
  );

}

export default Documentos;