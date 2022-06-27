import documentos from "../model/documentos";

export const createDocumentos = async (req, res) => {
    try {
        const { idCaso, idTramite, nombre, ruta } = req.body
        const newDocumento = new documentos({ idCaso, idTramite, nombre, ruta});
        const documentoSaved = await newDocumento.save()
        res.status(201).json(documentoSaved)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error creando un documento"});
    }
};

export const getDocumentos = async (req, res) => {
    try {
        const documentos = await documentos.find();
        res.json(documentos)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando todos los documentos"});
    }
};

export const getDocumentoById = async (req, res) => {
    try {
        const documentoId = await documentos.findById(req.params.documentoId);
        res.json(200).json(documentoId)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error buscando documento por ID"});
    }
};

export const updateDocumentoById = async (req, res) => {
    try {
        const updatedDocumento = await documentos.findByIdAndUpdate(req.params.documentoId, req.body, {new: true})
        res.status(200).json(updatedDocumento)   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error actualizando documentos por ID"});
    }
};

export const deleteDocumentoById = async (req, res) => {
    try {
        const {documentoIdDelete} = req.params
        await documentos.findByIdAndDelete(documentoIdDelete)
        res.status(204).json   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error borrando documento por ID"});
    }
};