import {Router} from "express";
import * as tramites from '../controller/tramites.controller';

const router = Router();

router.post('/', tramites.createTramites)
export default router;