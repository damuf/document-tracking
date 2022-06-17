import {Router} from "express";
import * as auth from '../controller/auth.controller';
import * as empleados from '../controller/empleados.controller';

const router = Router()

router.get('/', auth.ola)
router.post('/signup', auth.signup)
router.post('/signin', auth.signin)

export default router;