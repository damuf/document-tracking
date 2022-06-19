import { Schema, model } from "mongoose";

const tramitesSchema = new Schema({
    idDepto: {ref:"departamentos", type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true}, 
    deptos: {ref:"departamentos", type: [Schema.Types.ObjectId], required: true},
    orden: {type: [String], required: true}
}, { versionKey: false })

export default model('tramites', tramitesSchema)