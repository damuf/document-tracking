import gerencias from "..model/gerencias";

export const createGerencias = async (req, res) => {
    const { idEmpresa, nombre, deptos } = req.body
    const newGerencia = newGerencia({ idEmpresa, nombre, deptos })
    const gerenciaSaved = await newGerencia.save()
    req.status(201).json(gerenciaSaved)
};