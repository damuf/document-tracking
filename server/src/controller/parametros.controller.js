import parametros from "../model/parametros";
import empresas from "../model/empresas";

export const createParametros = async (req, res) => {
    try {
        const { empresa, nombre, descripcion } = req.body

        const empresaFound = await empresas.findOne({nombre: req.body.empresa});
        if(!empresaFound) return res.status(400).json({message: "la empresa no existe"})

        const nombreParametro = await parametros.findOne({nombre: req.body.nombre});
        if(nombreParametro) return res.status(400).json({message: "el nombre del parámetro ya existe en el sistema"})

        const newParametro = new parametros({ 
            idEmpresa: empresaFound._id, nombre, descripcion 
        });
        const parametroSaved = await newParametro.save()
        res.status(201).json({parametroSaved, message: "parámetro guardado"});    
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error creando un parametro"});
    }
};

export const getParametros = async (req, res) => {
    try {
        const parametros = await parametros.find();
        res.json(parametros)   
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error buscando todos los parametros"});
    }
};

export const getParametroById = async (req, res) => {
    try {
        const parametroId = await parametros.findById(req.params.parametroId);
        res.status(200).json({parametroId, message: "parámetro encontrado"})   
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error buscando un parametro por ID"});
    }
};

export const updateParametroById = async (req, res) => {
    try {
        const updatedParametro = await parametros.findByIdAndUpdate(req.params.parametroId, req.body, {new: true})
        res.status(200).json({updatedParametro, message: "parámetro actualizado"})   
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error actualizando un parametro por ID"});
    }
};

export const deleteParametroById = async (req, res) => {
    try {
        const parametroFound = await parametros.findByIdAndDelete(req.params.parametroId);
        res.status(204).json({message: "parámetro borrado con éxito"});
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error borrando un parametro por ID"});
    }
};

export const getParametroByName = async (req, res) => {
    try {
        const parametroFound = await parametros.findOne({nombre: req.params.parametroName});
        if(!parametroFound) return res.status(400).json({message: "el parámetro no existe"})
        console.log(parametroFound)
        res.status(200).json({parametroFound, message: "parámetro encontrado"})   
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error buscando un parámetro por nombre"});
    }
};