import { Schema, model } from "mongoose";

const departamentosSchema = new Schema({
    idGerencia: {type: String, required: true},  //debe ser ObjectId
    nombre: {type: String, required: true},
    jefeDepto: {type: String, required: true},   //debe ser ObjectId
    empleados: {type: [String], required: true},  //debe ser ObjectId
    infoContacto: {
        telefonos: {type: [Number], required: true},
        correos: {type: [String], required: true}
    }
}, { versionKey: false })

export default model('departamentos', departamentosSchema)