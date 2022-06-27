import Encabezado from "../MantComponents/Encabezados/EncabezadoMant"
import Insertar from "../MantComponents/MantEmpresas/InsertarEmpresa"
import Editar from "../MantComponents/MantEmpresas/EditarEmpresa"
import Eliminar from "../MantComponents/MantEmpresas/EliminarEmpresa"

function Empresas() {

  return (
    <>
      <Encabezado title={"Mantenimiento de empresas"} description={"Esta sección permite la inserción, edición, eliminación y actualización de las empresas de la organización"} />
      <Insertar/>
      <Editar/>
      <Eliminar/>
    </>
  );
}

export default Empresas;
