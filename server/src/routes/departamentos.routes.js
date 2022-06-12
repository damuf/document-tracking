import {Router} from "express";
import * as departamentos from '../controller/departamentos.controller';

const router = Router();

router.post('/', departamentos.createDepartamentos)
export default router;