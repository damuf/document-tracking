import {Router} from "express";
import * as gerencias from '../controller/gerencias.controller';

const router = Router();

router.post('/', gerencias.createGerencias)
router.get('/', gerencias.getGerencias)
router.get('/:gerenciaId', gerencias.getGerenciaById)
router.put('/:gerenciaId', gerencias.updateGerenciaById)
router.delete('/:gerenciaId', gerencias.deleteGerenciaById)

export default router;