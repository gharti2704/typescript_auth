import { Router } from 'express';
import { AuthController } from '../controller/Auth.js';

const router = Router();
const authController = new AuthController();

router.get('/register', authController.register);

export default router;
