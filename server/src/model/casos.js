import { Schema, model } from "mongoose";

const casosSchema = new Schema({
    idTramite: {ref:"tramites", type: Schema.Types.ObjectId, required: true},
    numCaso: {type: String, required: true, unique: true}, 
    fechaApertura: {type: Date, required: true},
    fechaFinal: {type: Date, required: false},
    estado: {type: String, required: true, lowercase: true},
    deptos: {ref:"departamentos", type: [Schema.Types.ObjectId], required: true},
    orden: {type: [String], required: true, lowercase: true}
}, { versionKey: false })

export default model('casos', casosSchema)