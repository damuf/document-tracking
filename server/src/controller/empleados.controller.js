import empleados from "../model/empleados";

export const createEmpleados = async (req, res) => {
    try {
        const { idDepto, nombre, papellido, sapellido, user, password,cedula, fNacim, fechaInicio, fechaFin } = req.body
        const newEmpleado = new empleados({ idDepto, nombre, papellido, sapellido, user, password, cedula, fNacim, fechaInicio, fechaFin });
        const empleadoSaved = await newEmpleado.save()
        res.status(201).json(empleadoSaved)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error creando un empleado"});
    }
};

export const getEmpleados = async (req, res) => {
    try {
        const empleados = await empleados.find();
        res.json(empleados)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando todos los empleados"});
    }
};

export const getEmpleadoById = async (req, res) => {
    try {
        const empleadoId = await empleados.findById(req.params.empleadoId);
        res.json(200).json(empleadoId)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando empleado por ID"});
    }
};

export const updateEmpleadoById = async (req, res) => {
    try {
        const updatedEmpleado = await empleados.findByIdAndUpdate(req.params.empleadoId, req.body, {new: true})
        res.status(200).json(updatedEmpleado)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error actualizando empleado por ID"});
    }
};

export const deleteEmpleadoById = async (req, res) => {
    try {
        const {empleadoIdDelete} = req.params
        await empleados.findByIdAndDelete(empleadoIdDelete)
        res.status(204).json   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error borrando empleado por ID"});
    }
};

export const getEmpleadoByCedula = async (req, res) => {
    try {
        const empleadoFound = await empleados.findOne({cedula: req.params.empleadoCed});
        if(!empleadoFound) return res.status(400).json({message: "el empleado no existe"})
        console.log(empleadoFound)
        res.status(200).json({empleadoFound, message: "empleado encontrado"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error buscando un empleado por cedula"});
    }
};