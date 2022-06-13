import {Router} from "express";
import * as departamentos from '../controller/departamentos.controller';

const router = Router();

router.post('/', departamentos.createDepartamentos)
router.get('/', departamentos.getDepartamentos)
router.get('/:departamentoId', departamentos.getDepartamentoById)
router.put('/:departamentoId', departamentos.updateDepartamentoById)
router.delete('/:departamentoId', departamentos.deleteDepartamentoById)

export default router;