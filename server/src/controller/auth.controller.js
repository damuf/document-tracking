import empleados from '../model/empleados';
import jwt from 'jsonwebtoken';
import config from '../config';

export const ola = async (req, res) => {
    res.json("autenficación desde auth controller")
}

export const signup = async (req, res) => {
    const {user, password, cedula} = req.body;

    //const empleadoFoud = empleados.find({user}) 
    //faltan validaciones

    const newEmpleado = new empleados({
        user,
        password: await empleados.encryptPassword(password), 
        cedula
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