import { Router } from 'express';
import { AuthController } from '../controller/auth.js';

const router = Router();
const authController = new AuthController();

router.get('/register', authController.register);

export default router;
