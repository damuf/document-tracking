import departamentos from "../model/departamentos";
import tramites from "../model/tramites";

export const createTramites = async (req, res) => {
    try {
        const { depto, nombre, deptos, orden} = req.body

        console.log("depto: "+JSON.stringify(depto))
        console.log("nombre: "+JSON.stringify(req.body.depto))
        const departamentoFound = await departamentos.findOne({nombre: req.body.depto}).exec()
        if(!departamentoFound) return res.status(400).json({message: "el departamento no existe"});


        const newTramite = new tramites({ 
            idDepto:departamentoFound._id, 
            nombre, 
            deptos, 
            orden });

        const tramiteSaved = await newTramite.save()
        res.status(201).json(tramiteSaved)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error creando un tramite"});
    }
};

export const getTramites = async (req, res) => {
    try {
        const tramites = await tramites.find();
        res.json(tramites)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando todos los tramites"});
    }
};

export const getTramiteById = async (req, res) => {
    try {
        const tramiteFound = await tramites.findById(req.params.tramiteId);
        if(!tramiteFound) return res.status(400).json({message: "el trámite no existe"})

        res.status(200).json({tramiteFound, message: "tramite encontrado"})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando tramite por ID"});
    }
};

export const getTramiteByNombre = async (req, res) => {
    try {
        const tramiteFound = await tramites.findOne({nombre: req.params.nombre})
        if(!tramiteFound) return res.status(400).json({message: "el tramite no existe"})
        res.status(200).json({tramiteFound, message: "tramite encontrado"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error buscando un caso por numero"});
    }
}

export const updateTramiteById = async (req, res) => {
    try {
        const updatedTramite = await tramites.findByIdAndUpdate(req.params.tramiteId, req.body, {new: true})
        res.status(200).json(updatedTramite)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error actualizando tramite por ID"});
    }
};

export const deleteTramiteById = async (req, res) => {
    try {
        const {tramiteIdDelete} = req.params
        await tramites.findByIdAndDelete(tramiteIdDelete)
        res.status(204).json   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error borrando tramite por ID"});
    }
};

export const deleteTramiteByNombre = async (req, res) => {
    try {
        const tramiteFound = await tramites.findOne({nombre: req.params.nombre});
        if(!tramiteFound) return res.status(400).json({message: "el tramite no existe"})
        await tramites.findByIdAndDelete(tramiteFound)
        res.status(204).json({message: "tramite borrado con éxito"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error eliminando un tramite por nombre"});
    }
}