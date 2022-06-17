import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const empleadosSchema = new Schema({
    //idDepto: {type: String, required: true},
    //idDepto: {ref:"departamentos", type: Schema.Types.ObjectId, required: true},
    //nombre: {type: String, required: true},
    //papellido: {type: String, required: true},
    //sapellido: {type: String, required: true},
    user: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cedula: {type: String, required: true, unique: true},
    //fechaNacim: {type: Date, required: true},
    //fechaInicio: {type: Date, required: true},
    //fechaFin: {type: Date, required: false},
}, { versionKey: false })

empleadosSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}
 
empleadosSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
    //return true or false, si las contraseñas coinciden (true) y si no (false)
}

export default model('empleados', empleadosSchema)