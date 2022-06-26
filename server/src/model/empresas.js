import { Schema, model } from "mongoose";

const empresasSchema = new Schema({
    nombre: {type: String, required: true, lowercase: true},
    ubicacion: {type: String, required: true, lowercase: true},
    telefonos: {type: [Number], required: true, unique: true},
    correos: {type: [String], required: true, unique: true, lowercase: true}
}, { versionKey: false })

export default model('empresas', empresasSchema)