import {Router} from "express";
import * as empleados from '../controller/empleados.controller';

const router = Router();

router.post('/', empleados.createEmpleados)
router.get('/', empleados.getEmpleados)
router.get('/:empleadoId', empleados.getEmpleadoById)
router.put('/:empleadoId', empleados.updateEmpleadoById)
router.delete('/:empleadoId', empleados.deleteEmpleadoById)

export default router;