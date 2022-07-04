import {Router} from "express";
import * as empleados from '../controller/empleados.controller';

const router = Router();

router.post('/', empleados.createEmpleados)
router.get('/', empleados.getEmpleados)
router.get('/:empleadoId', empleados.getEmpleadoById)
router.put('/edit/:empleadoId', empleados.updateEmpleadoById)
router.delete('/delete/:empleadoCed', empleados.deleteEmpleadoByCedula)
router.get('/find/:empleadoCed', empleados.getEmpleadoByCedula)

export default router;