import {Router} from "express";
import * as documentos from '../controller/documentos.controller';

const router = Router();

router.post('/', documentos.createDocumentos)
router.get('/', documentos.getDocumentos)
router.get('/:documentoId', documentos.getDocumentoById)
router.put('/:documentoId', documentos.updateDocumentoById)
router.delete('/:documentoId', documentos.deleteDocumentoById)

export default router;