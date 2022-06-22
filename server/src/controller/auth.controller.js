import empleados from '../model/empleados';
import departamentos from '../model/departamentos';
import jwt from 'jsonwebtoken';
import config from '../config';

export const ola = async (req, res) => {
    res.json("autenficación desde auth controller")
}

export const signup = async (req, res) => {
    const {idDepto, nombre, papellido, sapellido, user, password, cedula, fechaNacim, fechaInicio, fechaFin} = req.body;

    const userFound = await empleados.findOne({user: req.body.user});
    if(userFound) return res.status(400).json({message: "usuario ya existente"})

    //const deptoFound = await departamentos.findOne({departamento: req.body.departamento});
    //if(!deptoFound) return res.status(400).json({message: "no existe el departamento"})

    const cedulaFound = await empleados.findOne({cedula: req.body.cedula});
    if(cedulaFound) return res.status(400).json({message: "numero de cedula ya existente"})

    const newEmpleado = new empleados({
        idDepto: "62af601f71bfd24bb4f55d32", nombre, papellido, sapellido,
        user, password: await empleados.encryptPassword(password), 
        cedula, fechaNacim: "2022-06-21", fechaInicio: "2022-06-21", fechaFin: null
    })

    const empleadoSaved = await newEmpleado.save();

    const token = jwt.sign({id: empleadoSaved}, config.SECRET, {
        expiresIn: 86400 // el token expira en un día (seg)
    })

    res.status(200).json({token})
};

export const signin = async (req, res) => {
    
    const userFound = await empleados.findOne({user: req.body.user});

    if(!userFound) return res.status(400).json({message: "no se encontró el usuario"})
    
    const matchPassword = await empleados.comparePassword(req.body.password,  userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: 'contraseña incorrecta'})
    
    const token = jwt.sign({id: userFound._id}, config.SECRET, {expiresIn: 86400})

    console.log(userFound)

    res.json({token})
};