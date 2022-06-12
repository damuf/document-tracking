import documentos from "..model/documentos";

export const createDocumentos = async (req, res) => {
    const { idCaso, idTramite, nombre, ruta } = req.body
    const newDocumento = new documentos({ idCaso, idTramite, nombre, ruta})
    const documentoSaved = await newDocumento.save()
    req.status(201).json(documentoSaved)
};