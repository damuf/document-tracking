import { Schema, model } from "mongoose";

const gerenciasSchema = new Schema({
    idEmpresa: {ref:"empresas", type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true},
    deptos: {ref:"departamentos", type: [Schema.Types.ObjectId], required: true}
}, { versionKey: false })

export default model('gerencias', gerenciasSchema)