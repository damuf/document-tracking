import { Schema, model } from "mongoose";

const parametrosSchema = new Schema({
    idEmpresa: {ref:"empresas", type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true, lowercase: true, unique: true}, 
    descripcion: {type: String, required: true, lowercase: true}
}, { versionKey: false, _id: true})

export default model('parametros', parametrosSchema)