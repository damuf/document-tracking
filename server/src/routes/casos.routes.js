import {Router} from "express";
import * as casos from '../controller/casos.controller';

const router = Router();

router.post('/', casos.createCasos2)
router.get('/', casos.getCasos)
router.get('/:casoId', casos.getCasoById)
router.put('/:casoId', casos.updateCasoById)
router.delete('/:casoId', casos.deleteCasoById)
router.post('/numAlpha', casos.crearCodigoAlphanumerico)
router.get("/find/:numCaso", casos.getCasoByNumCaso);
router.delete("/delete/:numCaso", casos.deleteCasoByNumCaso);
router.put('/edit/:numCaso', casos.updateCasoByNumCaso)




export default router;