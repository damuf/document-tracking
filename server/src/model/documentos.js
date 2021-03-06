import { Schema, model } from "mongoose";

const documentosSchema = new Schema({
    idCaso: {ref:"casos", type: Schema.Types.ObjectId, required: true},
    idTramite: {ref:"tramites", type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true, lowercase: true},
    estado: {type: String, required: true, lowercase: true},
    medio: {type: String, required: true, lowercase: true},
    ruta: {type: String, required: true}
}, { versionKey: false })

export default model('documentos', documentosSchema)