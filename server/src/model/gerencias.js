import { Schema, model } from "mongoose";

const gerenciasSchema = new Schema({
    idEmpresa: {type: String, required: true},
    //idEmpresa: {type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true},
    deptos: {type: [String], required: true}
    //deptos: {type: [Schema.Types.ObjectId], required: true}
}, { versionKey: false })

export default model('gerencias', gerenciasSchema)