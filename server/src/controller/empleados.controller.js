import empleados from "../model/empleados";
import departamentos from "../model/departamentos";

export const createEmpleados = async (req, res) => {
    try {
        const {departamento, nombre, papellido, sapellido, user, password, cedula, fNacim, fechaInicio, fechaFin} = req.body;

        const deptoFound = await departamentos.findOne({nombre: req.body.departamento});
        if(!deptoFound) return res.status(400).json({message: "el departamento no existe"})
        
        const userFound = await empleados.findOne({user: req.body.user});
        if(userFound) return res.status(400).json({message: "el nombre de usuario no está disponible"})

        const cedulaFound = await empleados.findOne({cedula: req.body.cedula});
        if(cedulaFound) return res.status(400).json({message: "el número de cedula ya existe en el sistema"})

        const newEmpleado = new empleados({
            idDepto: deptoFound._id,
            nombre, papellido, sapellido,
            user, password: await empleados.encryptPassword(password), 
            cedula, fNacim, fechaInicio, fechaFin
        })

        const empleadoSaved = await newEmpleado.save();
        res.status(200).json({empleadoSaved, message: "empleado guardado"})

    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error creando un empleado"});
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