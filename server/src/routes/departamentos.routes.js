import { Console } from "console";
import {Router} from "express";
import { getDepartamentosByName } from "../controller/departamentos.controller";
import * as departamentos from '../controller/departamentos.controller';
// import departamentos from "../model/departamentos";
const router = Router();

router.post('/', departamentos.createDepartamentos)
router.get('/', departamentos.getDepartamentos)
router.get('/:departamentoId', departamentos.getDepartamentoById)
router.put('/:departamentoId', departamentos.updateDepartamentoById)
router.delete('/:departamentoId', departamentos.deleteDepartamentoById)
//router.get('/idk/:departamentoName', departamentos.getDepartamentosByName)

router.get("/find/:departamentoName", departamentos.getDepartamentosByName);
  
export default router;