import parametros from "..model/parametros";

export const createParametros = async (req, res) => {
    const { idEmpresa, nombre, descripcion } = req.body
    const newParametro = newParametro({ idEmpresa, nombre, descripcion })
    const parametroSaved = await newParametro.save()
    req.status(201).json(parametroSaved) 
};