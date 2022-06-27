import Encabezado from "./MantEmpresas/EncabezadoEmpresa"
import Insertar from "./MantEmpresas/InsertarEmpresa"
import Editar from "./MantEmpresas/EditarEmpresa"
import Eliminar from "./MantEmpresas/EliminarEmpresa"

function Empresas() {

  return (
    <>
      <Encabezado/>
      <Insertar/>
      <Editar/>
      <Eliminar/>
    </>
  );
}

export default Empresas;
