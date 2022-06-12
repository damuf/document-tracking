import { Schema, model } from "mongoose";

const gerenciasSchema = new Schema({
    idEmpresa: {type: String, required: true},  //debe ser ObjectId
    nombre: {type: String, required: true},
    deptos: {type: [String], required: true} //debe ser ObjectId
}, { versionKey: false })

export default model('gerencias', gerenciasSchema)