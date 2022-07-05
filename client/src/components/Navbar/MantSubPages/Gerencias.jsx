import Encabezado from "../MantComponents/Encabezados/EncabezadoMant"
import Insertar from "../MantComponents/MantGerencias/InsertarGerencia"
import Eliminar from "../MantComponents/MantGerencias/EliminarGerencia"
import Editar from "../MantComponents/MantGerencias/EditarGerencia"

function Gerencias() {
  return (
    <>
      <Encabezado title={"Mantenimiento de gerencias"} description={"Esta sección permite la inserción, edición, eliminación y actualización de las gerencias de la organización"} />
      <Insertar/>
      <Editar/>
      <Eliminar/>
    </>
  )
}

export default Gerencias