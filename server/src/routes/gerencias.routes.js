import {Router} from "express";
import * as gerencias from '../controller/gerencias.controller';

const router = Router();

router.post('/', gerencias.createGerencias)
export default router;