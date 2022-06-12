import { Schema, model } from "mongoose";

const parametrosSchema = new Schema({
    idEmpresa: {type: String, required: true},
    //idEmpresa: {type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true}, 
    descripcion: {type: String, required: true}
}, { versionKey: false })

export default model('parametros', parametrosSchema)