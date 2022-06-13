import empresas from "..model/empresas";

export const createEmpresas = async (req, res) => {
    const { nombre, ubicacion, infoContacto: {telefonos, correos} } = req.body
    const newEmpresa = new empresas({ nombre, ubicacion, infoContacto })
    const empresaSaved = await newEmpresa.save()
    req.status(201).json(empresaSaved)
};

export const getEmpresas = async (req, res) => {
    const empresas = await empresas.find();
    res.json(empresas)
};

export const getEmpresaById = async (req, res) => {
    const empresaId = await empresas.findById(req.params.empresaId);
    res.json(200).json(empresaId)
};

export const updateEmpresaById = async (req, res) => {
    const updatedEmpresa = await empresas.findByIdAndUpdate(req.params.empresaId, req.body, {new: true})
    res.status(200).json(updatedEmpresa)
};

export const deleteEmpresaById = async (req, res) => {
    const {empresaIdDelete} = req.params
    await empresas.findByIdAndDelete(empresaIdDelete)
    res.status(204).json
};