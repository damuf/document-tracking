import parametros from "../model/parametros";

export const createParametros = async (req, res) => {
    try {
        const { idEmpresa, nombre, descripcion } = req.body
        const newParametro = new parametros({ idEmpresa, nombre, descripcion });
        const parametroSaved = await newParametro.save()
        res.status(201).json(parametroSaved)    
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error creando un parametro"});
    }
};

export const getParametros = async (req, res) => {
    try {
        const parametros = await parametros.find();
        res.json(parametros)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando todos los parametros"});
    }
};

export const getParametroById = async (req, res) => {
    try {
        const parametroId = await parametros.findById(req.params.parametroId);
        res.json(200).json(parametroId)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando un parametro por ID"});
    }
};

export const updateParametroById = async (req, res) => {
    try {
        const updatedParametro = await parametros.findByIdAndUpdate(req.params.parametroId, req.body, {new: true})
        res.status(200).json(updatedParametro)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error actualizando un parametro por ID"});
    }
};

export const deleteParametroById = async (req, res) => {
    try {
        const {parametroIdDelete} = req.params
        await parametros.findByIdAndDelete(parametroIdDelete)
        res.status(204).json   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error borrando un parametro por ID"});
    }
};