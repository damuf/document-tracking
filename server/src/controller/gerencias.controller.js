import gerencias from "../model/gerencias";

export const createGerencias = async (req, res) => {
    try {
        const { idEmpresa, nombre, deptos } = req.body
        const newGerencia = new gerencias({ idEmpresa, nombre, deptos });
        const gerenciaSaved = await newGerencia.save()
        res.status(201).json(gerenciaSaved)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error creando una gerencia"});
    }
};

export const getGerencias = async (req, res) => {
    try {
        const gerencias = await gerencias.find();
        res.json(gerencias)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando todas las gerencias"});
    }
};

export const getGerenciaById = async (req, res) => {
    try {
        const gerenciaId = await gerencias.findById(req.params.gerenciaId);
        res.json(200).json(gerenciaId)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando una gerencia por ID"});
    }
};

export const updateGerenciaById = async (req, res) => {
    try {
        const updatedGerencia = await gerencias.findByIdAndUpdate(req.params.gerenciaId, req.body, {new: true})
        res.status(200).json(updatedGerencia)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error actualizando una gerencia por ID"});
    }
};

export const deleteGerenciaById = async (req, res) => {
    try {
        const {gerenciaIdDelete} = req.params
        await gerencias.findByIdAndDelete(gerenciaIdDelete)
        res.status(204).json   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error borrando una gerencia por ID"});
    }
};