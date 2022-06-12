import departamentos from "..model/departamentos";

export const createDepartamentos = async (req, res) => {
    const { idGerencia, nombre, jefeDepto, empleados, infoContacto: {telefonos, correos} } = req.body
    const newDepartamento = newDepartamento({ idGerencia, nombre, jefeDepto, empleados, infoContacto })
    const departamentoSaved = await newDepartamento.save()
    req.status(201).json(departamentoSaved)
};