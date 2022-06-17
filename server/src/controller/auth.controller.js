import empleados from '../model/empleados';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signup = async (req, res) => {
    console.log("idkkkkkkkk")
    const {user, password} = req.body;

    const newEmpleado = new empleados({
        user,
        password: await empleados.encryptPassword(password)
    })

    const empleadoSaved = await newEmpleado.save();
    console.log(empleadoSaved);

    const token = jwt.sign({id: empleadoSaved}, config.SECRET, {
        expiresIn: 86400
    })

    res.status(200).json({token})
};

export const signin = async (req, res) => {
    
    const userFound = await empleados.findOne({user: req.body.user});

    if(!userFound) return res.status(400).json({message: "User not found"})
    
    console.log(userFound)

    res.json({token: ''})
};