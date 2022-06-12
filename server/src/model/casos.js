import { Schema, model } from "mongoose";

const casosSchema = new Schema({
    idTramite: {type: String, required: true},  //debe ser ObjectId
    numCaso: {type: Number, required: true}, 
    fechaApertura: {type: Date, required: true},
    fechaFinal: {type: Date, required: false},
    estado: {type: String, required: true},
    ciclo: {
        deptos: {type: [String], required: true},  //debe ser ObjectId
        orden: {type: [String], required: true}
    }
}, { versionKey: false })

export default model('casos', casosSchema)