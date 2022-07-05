import { Schema, model } from "mongoose";

const tramitesSchema = new Schema({
    idDepto: {ref:"departamentos", type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true, lowercase: true}, 
    deptos: {ref:"departamentos", type: [Schema.Types.ObjectId], required: true},
    orden: {type: [String], required: true, lowercase: true}
}, { versionKey: false, _id: true })

export default model('tramites', tramitesSchema)