import casos from "../model/casos";

export const createCasos = async (req, res) => {
    const { idTramite, numCaso, fechaApertura, fechaFinal, estado, ciclo: {deptos, orden} } = req.body
    const newCaso = new casos({ idTramite, numCaso, fechaApertura, fechaFinal, estado, ciclo })
    const casoSaved = await newCaso.save()
    res.status(201).json(casoSaved)
};

export const getCasos = async (req, res) => {
    const casos = await casos.find();
    res.json(casos)
};

export const getCasoById = async (req, res) => {
    const casoId = await casos.findById(req.params.casoId);
    res.json(200).json(casoId)
};

export const updateCasoById = async (req, res) => {
    const updatedCaso = await casos.findByIdAndUpdate(req.params.casoId, req.body, {new: true})
    res.status(200).json(updatedCaso)
};

export const deleteCasoById = async (req, res) => {
    const {casoIdDelete} = req.params
    await casos.findByIdAndDelete(casoIdDelete)
    res.status(204).json
};