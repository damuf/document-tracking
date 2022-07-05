import Encabezado from "../MantComponents/Encabezados/EncabezadoMant"
import Insertar from "../MantComponents/MantParametros/InsertarParametro"
import Editar from "../MantComponents/MantParametros/EditarParametro"
import Eliminar from "../MantComponents/MantParametros/EliminarParametro"

function Parametros() {
  return (
    <div>
        <Encabezado title={"Mantenimiento de parámetros"} description={"Esta sección permite la inserción, edición, eliminación y actualización de los parámetros del sistema"} />
        <Insertar/>
        <Editar/>
        <Eliminar/>
    </div>
  )
}

export default Parametros