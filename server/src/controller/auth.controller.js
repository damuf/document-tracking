import empleados from '../model/empleados';
import departamentos from '../model/departamentos';
import jwt from 'jsonwebtoken';
import config from '../config';

export const ola = async (req, res) => {
    res.json("autenficación desde auth controller")
}

export const signup = async (req, res) => {
    const {idDepto, nombre, papellido, sapellido, user, password, cedula, fechaNacim, fechaInicio, fechaFin} = req.body;

    const deptoFound = await departamentos.findOne({nombre: req.body.idDepto});
    console.log(deptoFound)
    if(!deptoFound) return res.status(400).json({message: "el departamento no existe"})

    const userFound = await empleados.findOne({user: req.body.user});
    if(userFound) return res.status(400).json({message: "el nombre de usuario no está disponible"})

    const cedulaFound = await empleados.findOne({cedula: req.body.cedula});
    if(cedulaFound) return res.status(400).json({message: "el número de cedula ya existe en el sistema"})

    const newEmpleado = new empleados({
        idDepto: deptoFound._id,
        nombre, papellido, sapellido,
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

    if(!userFound) return res.status(400).json({message: 'el nombre de usuario no existe'})
    
    const matchPassword = await empleados.comparePassword(req.body.password,  userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: 'la contraseña es incorrecta'})
    
    const token = jwt.sign({id: userFound._id}, config.SECRET, {expiresIn: 86400})

    console.log(userFound)

    res.status(200).json({token, message: 'usuario y contraseña correctos'})
};