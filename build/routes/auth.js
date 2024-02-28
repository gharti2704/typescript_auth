import { Router } from 'express';
import { AuthController } from '../controllers/auth.js';
const router = Router();
const authController = new AuthController();
router.get('/register', authController.register);
export default router;
//# sourceMappingURL=auth.js.map