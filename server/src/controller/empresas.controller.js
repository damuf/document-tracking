import empresas from "../model/empresas";

export const createEmpresas = async (req, res) => {
    console.log("create empresas")
    const { nombre, ubicacion, telefonos, correos} = req.body

    const empresaFound = await empresas.findOne({nombre: req.body.nombre});
    if(empresaFound) return res.status(400).json({message: 'el nombre de la empresa ya existe en el sistema'})

    const newEmpresa = new empresas({ nombre, ubicacion, telefonos, correos })

    const empresaSaved = await newEmpresa.save()
    if(!empresaSaved) return res.status(400).json({message: 'ocurrió un problema en el sistema'})

    res.status(200).json({empresaSaved, message: 'empresa registrada correctamente'})
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