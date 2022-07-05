import {Router} from "express";
import * as tramites from '../controller/tramites.controller';

const router = Router();

router.post('/', tramites.createTramites)
router.get('/', tramites.getTramites)
router.get('/find/:tramiteId', tramites.getTramiteById)
router.get('/findname/:nombre', tramites.getTramiteByNombre)
router.put('/:tramiteId', tramites.updateTramiteById)
router.delete('/:tramiteId', tramites.deleteTramiteById)
router.delete('/delete/:nombre', tramites.deleteTramiteByNombre)


export default router;