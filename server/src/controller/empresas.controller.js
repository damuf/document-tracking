import empresas from "..model/empresas";

export const createEmpresas = async (req, res) => {
    const { nombre, ubicacion, infoContacto: {telefonos, correos} } = req.body
    const newEmpresa = new empresas({ nombre, ubicacion, infoContacto })
    const empresaSaved = await newEmpresa.save()
    req.status(201).json(empresaSaved)
};