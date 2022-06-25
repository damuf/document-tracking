import departamentos from "../model/departamentos";

export const createDepartamentos = async (req, res) => {
    const { idGerencia, nombre, jefeDepto, empleados, telefonos, correos} = req.body
    const newDepartamento = new departamentos({ idGerencia, nombre, jefeDepto, empleados, telefonos, correos});
    const departamentoSaved = await newDepartamento.save()
    res.status(201).json(departamentoSaved)
};

export const getDepartamentos = async (req, res) => {
    const departamentosSave = await departamentos.find();
    res.json(departamentosSave)
};

export const getDepartamentoById = async (req, res) => {
    const departamentoId = await departamentos.findById(req.params.departamentoId);
    res.status(200).json(departamentoId)
};

export const updateDepartamentoById = async (req, res) => {
    const updatedDepartamento = await departamentos.findByIdAndUpdate(req.params.departamentoId, req.body, {new: true})
    res.status(200).json(updatedDepartamento)
};

export const deleteDepartamentoById = async (req, res) => {
    const {departamentoIdDelete} = req.params
    await departamentos.findByIdAndDelete(departamentoIdDelete)
    res.status(204).json
};

export const getDepartamentoByName = async (req, res) => {
    const nombreDepto = await departamentos.findOne({nombre: req.params.departamentoName});
    
    if(!nombreDepto) return res.status(400).json("el departamento no existe")
    
    res.status(200).json(nombreDepto)
};