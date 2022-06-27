import departamentos from "../model/departamentos";

export const createDepartamentos = async (req, res) => {
    try {
        const { idGerencia, nombre, jefeDepto, empleados, telefonos, correos} = req.body
        const newDepartamento = new departamentos({ idGerencia, nombre, jefeDepto, empleados, telefonos, correos});
        const departamentoSaved = await newDepartamento.save()
        res.status(201).json(departamentoSaved)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error creando un departamento"});
    }
};

export const getDepartamentos = async (req, res) => {
    try {
        const departamentosSave = await departamentos.find();
        res.json(departamentosSave)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando todos los departamentos"});
    }
};

export const getDepartamentoById = async (req, res) => {
    try {
        const departamentoId = await departamentos.findById(req.params.departamentoId);
        res.status(200).json(departamentoId)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando un departamento por ID"});
    }
};

export const updateDepartamentoById = async (req, res) => {
    try {
        const updatedDepartamento = await departamentos.findByIdAndUpdate(req.params.departamentoId, req.body, {new: true})
        res.status(200).json(updatedDepartamento)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error actualizando un departamento por ID"});
    }
};

export const deleteDepartamentoById = async (req, res) => {
    try {
        const {departamentoIdDelete} = req.params
        await departamentos.findByIdAndDelete(departamentoIdDelete)
        res.status(204).json
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error borrando un departamento por ID"});
    }
};

export const getDepartamentoByName = async (req, res) => {
    try {
        const nombreDepto = await departamentos.findOne({nombre: req.params.departamentoName});
        if(!nombreDepto) return res.status(400).json("el departamento no existe")
        res.status(200).json(nombreDepto)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando un departamento por nombre"});
    }
};