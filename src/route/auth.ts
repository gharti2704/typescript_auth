import { Router } from 'express';
import { AuthController } from '../controller/Auth.js';
import { registerValidator, validate } from '../validator/index.js';
import { UserAuthService } from '../service/implementation/UserAuthService.js';

const router = Router();
const userAuthService = new UserAuthService();
const authController = new AuthController(userAuthService);

router.post('/register', registerValidator, validate, authController.register);
router.get('/login', authController.login);
router.get('/logout', authController.logout);

export default router;
