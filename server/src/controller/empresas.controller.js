import empresas from "../model/empresas";

export const createEmpresas = async (req, res) => {
    try {
        const { nombre, ubicacion, telefonos, correos} = req.body

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

export const updateEmpresaById = async (req, res) => {
    try {
        const updatedEmpresa = await empresas.findByIdAndUpdate(req.params.empresaId, req.body, {new: true})
        res.status(200).json(updatedEmpresa)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error actualizando empresa por ID"});
    }
};

export const deleteEmpresaById = async (req, res) => {
    console.log("entro delete")
    console.log("1 params:" + req.params.empresaId)
    try {
        const empresaIdDelete = await empresas.findOne({_id: req.params.empresaId});
        if(!empresaIdDelete) return res.status(400).json({message: "la empresa no existe"})
        await empresas.findByIdAndDelete(empresaIdDelete)
        res.status(204).json({msg: "empresa borrada con éxito"});
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error borrando empresa por ID"});
    }
};

export const getEmpresaByName = async (req, res) => {
    try {
        const nombreEmpresa = await empresas.findOne({nombre: req.params.empresaName});
        if(!nombreEmpresa) return res.status(400).json({message: "la empresa no existe"})
        console.log(nombreEmpresa)
        res.status(200).json({nombreEmpresa, message: "empresa encontrada"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error buscando un departamento por nombre"});
    }
};