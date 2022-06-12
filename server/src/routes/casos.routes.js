import {Router} from "express";
import * as casos from '../controller/casos.controller';

const router = Router();

router.post('/', casos.createCasos)
export default router;