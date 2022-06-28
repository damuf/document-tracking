import Encabezado from "../MantComponents/Encabezados/EncabezadoMant"
import Insertar from "../MantComponents/MantEmpleados/InsertarEmpleado"
import Editar from "../MantComponents/MantEmpleados/EditarEmpleado"
import Eliminar from "../MantComponents/MantEmpleados/EliminarEmpleado"

function Empleados() {
  return (
    <div>
        <Encabezado title={"Mantenimiento de empleados"} description={"Esta sección permite la inserción, edición, eliminación y actualización de los empleados de la organización"} />
        <Insertar/>
        <Editar/>
        <Eliminar/>
    </div>
  )
}

export default Empleados