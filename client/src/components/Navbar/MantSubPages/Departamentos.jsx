import Encabezado from "../MantComponents/Encabezados/EncabezadoMant"
import Insertar from "../MantComponents/MantDepartamentos/InsertarDepartamento"
import Eliminar from "../MantComponents/MantDepartamentos/EliminarDepartamento"
import Editar from "../MantComponents/MantDepartamentos/EditarDepartamento"

function Departamentos() {
  return (
    <>
      <Encabezado title={"Mantenimiento de departamentos"} description={"Esta sección permite la inserción, edición, eliminación y actualización de los departamentos de la organización"} />
      <Insertar/>
      <Editar/>
      <Eliminar/>
    </>
  )
}

export default Departamentos