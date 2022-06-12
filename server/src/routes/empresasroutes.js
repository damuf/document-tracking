import {Router} from "express";
import * as empresas from '../controller/empresas.controller';

const router = Router();

router.post('/', empresas.createEmpresas)
export default router;