import { Schema, model } from "mongoose";

const documentosSchema = new Schema({
    idCaso: {type: String, required: true},
    //idCaso: {type: Schema.Types.ObjectId, required: true},
    idTramite: {type: String, required: true},
    //idTramite: {type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true},
    ruta: {type: String, required: true}
}, { versionKey: false })

export default model('documentos', documentosSchema)