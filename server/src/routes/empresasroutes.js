import {Router} from "express";
import * as empresas from '../controller/empresas.controller';

const router = Router();

router.post('/', empresas.createEmpresas)
router.get('/', empresas.getEmpresas)
router.get('/:empresaId', empresas.getEmpresaById)
router.put('/:empresaId', empresas.updateEmpresaById)
router.delete('/:empresaId', empresas.deleteEmpresaById)

export default router;