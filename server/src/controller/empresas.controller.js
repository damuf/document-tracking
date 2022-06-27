import empresas from "../model/empresas";

export const createEmpresas = async (req, res) => {
    try {
        const {nombre, ubicacion, telefonos, correos} = req.body

        const empresaFound = await empresas.findOne({nombre: req.body.nombre});
        if(empresaFound) return res.status(400).json({message: 'el nombre de la empresa ya existe en el sistema'})
    
        const newEmpresa = new empresas({ nombre, ubicacion, telefonos, correos })
    
        const empresaSaved = await newEmpresa.save()
        if(!empresaSaved) return res.status(400).json({message: 'ocurrió un problema en el sistema'})
    
        res.status(200).json({empresaSaved, message: 'empresa registrada correctamente'})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error creando una empresa"});
    }
};

export const getEmpresas = async (req, res) => {
    try {
        const empresas = await empresas.find();
        res.json(empresas)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando todas las empresas"});
    }
};

export const getEmpresaById = async (req, res) => {
    try {
        const empresaId = await empresas.findById(req.params.empresaId);
        res.json(200).json(empresaId)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando empresa por ID"});
    }
};

export const updateEmpresaByNombre = async (req, res) => {
    try {
        const {nombre, ubicacion, telefonos, correos} = req.body
        const updatedEmpresa = await empresas.findOneAndUpdate({nombre: req.params.empresaName}, {nombre, ubicacion, telefonos, correos}, {new: true});
        if(!updatedEmpresa) return res.status(400).json({message: "la empresa no existe"})
        res.status(200).json({updatedEmpresa, message: "información de la empresa modificada con éxito"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error actualizando empresa por nombre"});
    }
};

export const deleteEmpresaByNombre = async (req, res) => {
    try {
        const empresaFound = await empresas.findOne({nombre: req.params.empresaName});
        if(!empresaFound) return res.status(400).json({message: "la empresa no existe"})
        await empresas.findByIdAndDelete(empresaFound)
        res.status(204).json({message: "empresa borrada con éxito"});
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error borrando empresa por nombre"});
    }
};

export const getEmpresaByName = async (req, res) => {
    try {
        const empresaFound = await empresas.findOne({nombre: req.params.empresaName});
        if(!empresaFound) return res.status(400).json({message: "la empresa no existe"})
        res.status(200).json({empresaFound, message: "empresa encontrada"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error buscando un departamento por nombre"});
    }
};