import empleados from "../model/empleados";

export const createEmpleados = async (req, res) => {
    const { idDepto, nombre, papellido, sapellido, cedula, fechaNacim, fechaInicio, fechaFin } = req.body
    const newEmpleado = new empleados({ idDepto, nombre, papellido, sapellido, cedula, fechaNacim, fechaInicio, fechaFin });
    const empleadoSaved = await newEmpleado.save()
    res.status(201).json(empleadoSaved)
};

export const getEmpleados = async (req, res) => {
    const empleados = await empleados.find();
    res.json(empleados)
};

export const getEmpleadoById = async (req, res) => {
    const empleadoId = await empleados.findById(req.params.empleadoId);
    res.json(200).json(empleadoId)
};

export const updateEmpleadoById = async (req, res) => {
    const updatedEmpleado = await empleados.findByIdAndUpdate(req.params.empleadoId, req.body, {new: true})
    res.status(200).json(updatedEmpleado)
};

export const deleteEmpleadoById = async (req, res) => {
    const {empleadoIdDelete} = req.params
    await empleados.findByIdAndDelete(empleadoIdDelete)
    res.status(204).json
};