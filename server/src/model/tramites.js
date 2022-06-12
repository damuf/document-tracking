import { Schema, model } from "mongoose";

const tramitesSchema = new Schema({
    idDepto: {type: String, required: true},
    //idDepto: {type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true}, 
    orden: {
        deptos: {type: [String], required: true},
        //deptos: {type: [Schema.Types.ObjectId], required: true},
        orden: {type: [String], required: true}
    }

}, { versionKey: false })

export default model('tramites', tramitesSchema)