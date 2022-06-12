import { Schema, model } from "mongoose";

const documentosSchema = new Schema({
    idCaso: {type: String, required: true},  //debe ser ObjectId
    idTramite: {type: String, required: true},  //debe ser ObjectId
    nombre: {type: String, required: true},
    ruta: {type: String, required: true}
}, { versionKey: false })

export default model('documentos', documentosSchema)