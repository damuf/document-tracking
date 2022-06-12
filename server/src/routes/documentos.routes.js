import {Router} from "express";
import * as documentos from '../controller/documentos.controller';

const router = Router();

router.post('/', documentos.createDocumentos)
export default router;