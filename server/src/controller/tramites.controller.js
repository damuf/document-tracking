import tramites from "../model/tramites";

export const createTramites = async (req, res) => {
    const { idDepto, nombre, deptos, orden} = req.body
    const newTramite = new tramites({ idDepto, nombre, deptos, orden });
    const tramiteSaved = await newTramite.save()
    res.status(201).json(tramiteSaved)
};

export const getTramites = async (req, res) => {
    const tramites = await tramites.find();
    res.json(tramites)
};

export const getTramiteById = async (req, res) => {
    const tramiteId = await tramites.findById(req.params.tramiteId);
    res.json(200).json(tramiteId)
};

export const updateTramiteById = async (req, res) => {
    const updatedTramite = await tramites.findByIdAndUpdate(req.params.tramiteId, req.body, {new: true})
    res.status(200).json(updatedTramite)
};

export const deleteTramiteById = async (req, res) => {
    const {tramiteIdDelete} = req.params
    await tramites.findByIdAndDelete(tramiteIdDelete)
    res.status(204).json
};