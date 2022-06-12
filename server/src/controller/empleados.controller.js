import empleados from "../model/empleados";

export const createEmpleados = async (req, res) => {
    const { idDepto, nombre, papellido, sapellido, cedula, fechaNacim, fechaInicio, fechaFin } = req.body
    const newEmpleado = new empleados({ idDepto, nombre, papellido, sapellido, cedula, fechaNacim, fechaInicio, fechaFin });
    const empleadoSaved = await newEmpleado.save()
    res.status(201).json(empleadoSaved)
};