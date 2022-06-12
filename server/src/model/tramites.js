import { Schema, model } from "mongoose";

const tramitesSchema = new Schema({
    idDepto: {type: String, required: true},  //debe ser ObjectId
    nombre: {type: String, required: true}, 
    orden: {
        deptos: {type: [String], required: true},  //debe ser ObjectId
        orden: {type: [String], required: true}
    }

}, { versionKey: false })

export default model('tramites', tramitesSchema)