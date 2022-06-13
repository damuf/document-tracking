import departamentos from "..model/departamentos";

export const createDepartamentos = async (req, res) => {
    const { idGerencia, nombre, jefeDepto, empleados, infoContacto: {telefonos, correos} } = req.body
    const newDepartamento = newDepartamento({ idGerencia, nombre, jefeDepto, empleados, infoContacto })
    const departamentoSaved = await newDepartamento.save()
    req.status(201).json(departamentoSaved)
};

export const getDepartamentos = async (req, res) => {
    const departamentos = await departamentos.find();
    res.json(departamentos)
};

export const getDepartamentoById = async (req, res) => {
    const departamentoId = await departamentos.findById(req.params.departamentoId);
    res.json(200).json(departamentoId)
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