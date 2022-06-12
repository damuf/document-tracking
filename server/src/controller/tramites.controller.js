import tramites from "..model/tramites";

export const createTramites = async (req, res) => {
    const { idDepto, nombre, orden: {deptos, orden}} = req.body
    const newTramite = newTramite({ idDepto, nombre, orden })
    const tramiteSaved = await newTramite.save()
    req.status(201).json(tramiteSaved)
};