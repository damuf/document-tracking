import parametros from "../model/parametros";

export const createParametros = async (req, res) => {
    const { idEmpresa, nombre, descripcion } = req.body
    const newParametro = new parametros({ idEmpresa, nombre, descripcion });
    const parametroSaved = await newParametro.save()
    res.status(201).json(parametroSaved) 
};

export const getParametros = async (req, res) => {
    const parametros = await parametros.find();
    res.json(parametros)
};

export const getParametroById = async (req, res) => {
    const parametroId = await parametros.findById(req.params.parametroId);
    res.json(200).json(parametroId)
};

export const updateParametroById = async (req, res) => {
    const updatedParametro = await parametros.findByIdAndUpdate(req.params.parametroId, req.body, {new: true})
    res.status(200).json(updatedParametro)
};

export const deleteParametroById = async (req, res) => {
    const {parametroIdDelete} = req.params
    await parametros.findByIdAndDelete(parametroIdDelete)
    res.status(204).json
};