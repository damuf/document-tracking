import {Router} from "express";
import * as auth from '../controller/auth.controller';

const router = Router()

router.post('/signup', auth.signup)
router.post('/signin', auth.signin)

export default router;