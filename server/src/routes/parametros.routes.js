import {Router} from "express";
import * as parametros from '../controller/parametros.controller';

const router = Router();

router.post('/', parametros.createParametros)
router.get('/', parametros.getParametros)
router.get('/:parametroId', parametros.getParametroById)
router.put('/edit/:parametroId', parametros.updateParametroById)
router.delete('/delete/:parametroId', parametros.deleteParametroById)
router.get('/find/:parametroName', parametros.getParametroByName)

export default router;