import {Router} from "express";
import * as parametros from '../controller/parametros.controller';

const router = Router();

router.post('/', parametros.createParametros)
router.get('/', parametros.getParametros)
router.get('/:parametroId', parametros.getParametroById)
router.put('/:parametroId', parametros.updateParametroById)
router.delete('/:parametroId', parametros.deleteParametroById)

export default router;