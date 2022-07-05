import casos from "../model/casos";
import tramites from '../model/tramites';
import departamentos from '../model/departamentos';

export const createCasos = async (req, res) => {
    try {
        const {tramite, numCaso, fechaApertura, fechaFinal, estado, deptos, orden } = req.body
        let text = "";
        text += numCaso + "-"
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 30; i++){ //cantidad de letras y numeros agregados aleatoriamente
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        console.log("text: " + text)
        console.log("numcaso: " + numCaso)
        const tramiteFound = await tramites.findOne({nombre: req.body.tramite}).exec()
        if(!tramiteFound) return res.status(400).json({message: "el tramite no existe"});
        
        const newCaso = new casos({ 
            idTramite: tramiteFound._id, 
            numCaso : text, 
            fechaApertura, 
            fechaFinal, 
            estado, 
            deptos, 
            orden });

        const casoSaved = await newCaso.save()
        res.status(201).json(casoSaved)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "error creando un caso2"});
    }
};

export const getCasos = async (req, res) => {
    try {
        const casosSave = await casos.find();
        res.json(casosSave)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error});
    }
};

export const getCasoById = async (req, res) => {
    try {
        const casoId = await casos.findById(req.params.casoId);
        res.json(200).json(casoId)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error});
    }
};

export const updateCasoById = async (req, res) => {
    try {
        const updatedCaso = await casos.findByIdAndUpdate(req.params.casoId, req.body, {new: true})
        res.status(200).json(updatedCaso)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error});
    }
};

export const deleteCasoById = async (req, res) => {
    try {
        const {casoIdDelete} = req.params
        await casos.findByIdAndDelete(casoIdDelete)
        res.status(204).json   
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error});
    }
};

export const crearCodigoAlphanumerico = async (req, res) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 30; i++){ //cantidad de letras y numeros agregados aleatoriamente
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    try {
        const { idTramite, numCaso, fechaApertura, fechaFinal, estado, deptos, orden } = req.body
        const newCaso = new casos({ idTramite, numCaso, fechaApertura, fechaFinal, estado, deptos, orden });
        const casoSaved = await newCaso.save()
        res.status(201).json(casoSaved)    
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error});
    }
}

export const getCasoByNumCaso = async (req, res) => {
    try {
        const casoFound = await casos.findOne({numCaso: req.params.numCaso});
        if(!casoFound) return res.status(400).json({message: "el caso no existe"})

        const tramiteFound = await tramites.findById(casoFound.idTramite)
        if(!tramiteFound) return res.status(400).json({message: "el tramite no existe"})

        const depasFound = await departamentos.findById(casoFound.deptos)
        if(!depasFound) return res.status(400).json({message: "el departamento no existe"})

        res.status(200).json({casoFound, message: "caso encontrado"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error buscando un caso por numero"});
    }
}

export const deleteCasoByNumCaso = async (req, res) => {
    try {
        const casoFound = await casos.findOne({numCaso: req.params.numCaso});
        if(!casoFound) return res.status(400).json({message: "el caso no existe"})
        await casos.findByIdAndDelete(casoFound)
        res.status(204).json({message: "caso borrado con éxito"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error eliminando un caso por numero de caso"});
    }
}

export const updateCasoByNumCaso = async (req, res) => {
    try {
        const {tramite, numCaso, fechaApertura, fechaFinal, estado, deptos, orden} = req.body
        
        const tramitefound = await tramites.findById({nombre: updatedCaso.idTramite})
        if(!tramitefound) return res.status(400).json({message: "el tramite no existe"})

        const deptoFound = await departamentos.find({nombre: updatedCaso.departamentos})
        
        if(!deptoFound) return res.status(400).json({message: "el departamento no existe"})



        const updatedCaso = await empresas.findOneAndUpdate({numCaso: req.params.numCaso}, {tramite, numCaso, fechaApertura, fechaFinal, estado, deptos, orden}, {new: true});
        if(!updatedCaso) return res.status(400).json({message: "el caso no existe"})
        


        res.status(200).json({updatedEmpresa, message: "información del caso modificado con éxito"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error actualizando caso por numero de caso"});
    }
};