import {Router} from "express";
import * as empleados from '../controller/empleados.controller';

const router = Router();

router.post('/', empleados.createEmpleados)
export default router;