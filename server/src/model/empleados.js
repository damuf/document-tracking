import { Schema, model } from "mongoose";

const empleadosSchema = new Schema({
    idDepto:String,//{ref:"departamentos", type:Schema.Types.ObjectId},
    nombre:String,
    papellido:String,
    sapellido:String,
    cedula:String,
    fechaNacim:Date,
    fechaInicio:Date,
    fechaFin:Date
},{
    versionKey:false
})
export default model('empleados', empleadosSchema)
