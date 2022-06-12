import {Router} from "express";
import * as parametros from '../controller/parametros.controller';

const router = Router();

router.post('/', parametros.createParametros)
export default router;