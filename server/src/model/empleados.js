import { Schema, model } from "mongoose";

const empleadosSchema = new Schema({
    idDepto: {type: String, required: true}, //{ref:"departamentos", type:Schema.Types.ObjectId},
    nombre: {type: String, required: true},
    papellido: {type: String, required: true},
    sapellido: {type: String, required: true},
    cedula: {type: String, required: true},
    fechaNacim: {type: Date, required: true},
    fechaInicio: {type: Date, required: true},
    fechaFin: {type: Date, required: false},
}, { versionKey: false })

export default model('empleados', empleadosSchema)