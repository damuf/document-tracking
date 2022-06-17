import documentos from "../model/documentos";

export const createDocumentos = async (req, res) => {
    const { idCaso, idTramite, nombre, ruta } = req.body
    const newDocumento = new documentos({ idCaso, idTramite, nombre, ruta})
    const documentoSaved = await newDocumento.save()
    req.status(201).json(documentoSaved)
};

export const getDocumentos = async (req, res) => {
    const documentos = await documentos.find();
    res.json(documentos)
};

export const getDocumentoById = async (req, res) => {
    const documentoId = await documentos.findById(req.params.documentoId);
    res.json(200).json(documentoId)
};

export const updateDocumentoById = async (req, res) => {
    const updatedDocumento = await documentos.findByIdAndUpdate(req.params.documentoId, req.body, {new: true})
    res.status(200).json(updatedDocumento)
};

export const deleteDocumentoById = async (req, res) => {
    const {documentoIdDelete} = req.params
    await documentos.findByIdAndDelete(documentoIdDelete)
    res.status(204).json
};