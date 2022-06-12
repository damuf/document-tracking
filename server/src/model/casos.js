import { Schema, model } from "mongoose";

const casosSchema = new Schema({
    idTramite: {type: String, required: true},
    //idTramite: {type: Schema.Types.ObjectId, required: true},
    numCaso: {type: Number, required: true, unique: true}, 
    fechaApertura: {type: Date, required: true},
    fechaFinal: {type: Date, required: false},
    estado: {type: String, required: true},
    ciclo: {
        deptos: {type: [String], required: true},
        //deptos: {type: [Schema.Types.ObjectId], required: true},
        orden: {type: [String], required: true}
    }
}, { versionKey: false })

export default model('casos', casosSchema)