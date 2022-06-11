import {Router} from "express";
import * as Empleados from '../controller/empleados.controller';

const router = Router();

router.post('/', Empleados.createEmpleados)
export default router;