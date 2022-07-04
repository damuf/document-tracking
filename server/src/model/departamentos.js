import { Schema, model } from "mongoose";

const departamentosSchema = new Schema({
    idGerencia: {ref:"gerencias", type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true},
    jefeDepto: {ref:"empleados",type: Schema.Types.ObjectId, required: true},
    empleados: {ref:"empleados", type: [Schema.Types.ObjectId], required: true},
    telefonos: {type: [Number], required: true, unique:true},
    correos: {type: [String], required: true, unique:true}
}, { versionKey: false})

export default model('departamentos', departamentosSchema)