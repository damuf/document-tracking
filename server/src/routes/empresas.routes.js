import {Router} from "express";
import * as empresas from '../controller/empresas.controller';

const router = Router();

router.post('/', empresas.createEmpresas)
router.get('/', empresas.getEmpresas)
router.get('/:empresaId', empresas.getEmpresaById)
router.put('/edit/:empresaName', empresas.updateEmpresaByNombre)
router.delete('/delete/:empresaName', empresas.deleteEmpresaByNombre)
router.get("/find/:empresaName", empresas.getEmpresaByName);

export default router;