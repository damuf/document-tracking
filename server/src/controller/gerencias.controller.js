import gerencias from "..model/gerencias";

export const createGerencias = async (req, res) => {
    const { idEmpresa, nombre, deptos } = req.body
    const newGerencia = newGerencia({ idEmpresa, nombre, deptos })
    const gerenciaSaved = await newGerencia.save()
    req.status(201).json(gerenciaSaved)
};

export const getGerencias = async (req, res) => {
    const gerencias = await gerencias.find();
    res.json(gerencias)
};

export const getGerenciaById = async (req, res) => {
    const gerenciaId = await gerencias.findById(req.params.gerenciaId);
    res.json(200).json(gerenciaId)
};

export const updateGerenciaById = async (req, res) => {
    const updatedGerencia = await gerencias.findByIdAndUpdate(req.params.gerenciaId, req.body, {new: true})
    res.status(200).json(updatedGerencia)
};

export const deleteGerenciaById = async (req, res) => {
    const {gerenciaIdDelete} = req.params
    await gerencias.findByIdAndDelete(gerenciaIdDelete)
    res.status(204).json
};