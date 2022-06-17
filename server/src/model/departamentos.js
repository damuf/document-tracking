import { Schema, model } from "mongoose";

const departamentosSchema = new Schema({
    idGerencia: {type: String, required: true},
    //idGerencia: {type: Schema.Types.ObjectId, required: true},
    nombre: {type: String, required: true},
    jefeDepto: {type: String, required: true},
    //jefeDepto: {type: Schema.Types.ObjectId, required: true},
    empleados: {type: [String], required: true},  //empleados: {type: [Schema.Types.ObjectId], required: true},
    infoContacto: {
        telefonos: {type: [Number], required: true, unique: true},
        correos: {type: [String], required: true, unique: true}
    }
}, { versionKey: false })

export default model('departamentos', departamentosSchema)