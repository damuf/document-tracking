import {Router} from "express";
import * as casos from '../controller/casos.controller';

const router = Router();

router.post('/', casos.createCasos2)
router.get('/', casos.getCasos)
router.get('/:casoId', casos.getCasoById)
router.put('/:casoId', casos.updateCasoById)
router.delete('/:casoId', casos.deleteCasoById)
router.post('/numAlpha', casos.crearCodigoAlphanumerico)

export default router;