import casos from "..model/casos";

export const createCasos = async (req, res) => {
    const { idTramite, numCaso, fechaApertura, fechaFinal, estado, ciclo: {deptos, orden} } = req.body
    const newCaso = new casos({ idTramite, numCaso, fechaApertura, fechaFinal, estado, ciclo })
    const casoSaved = await newCaso.save()
    res.status(201).json(casoSaved)
};