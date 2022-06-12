import { Schema, model } from "mongoose";

const empresasSchema = new Schema({
    nombre: {type: String, required: true},
    ubicacion: {type: String, required: true},
    infoContacto: {
        telefonos: {type: [Number], required: true},
        correos: {type: [String], required: true},
    }
}, { versionKey: false })

export default model('empresas', empresasSchema)