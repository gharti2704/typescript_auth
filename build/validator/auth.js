import { check, validationResult } from 'express-validator';
export class AuthValidator {
    register_validator;
    constructor() {
        this.register_validator = [
            check('name', 'Name is required').not().isEmpty(),
            check('email', 'Please include a valid email').isEmail(),
            check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 }),
            check('role', 'Role is required').not().isEmpty(),
            check('role').custom((value) => {
                if (value !== 'admin' && value !== 'user') {
                    throw new Error('Invalid role. Must be either admin or user');
                }
                return true;
            }),
        ];
    }
    validate = (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array()[0].msg });
        }
        next();
    };
    get registerValidator() {
        return this.register_validator;
    }
}
//# sourceMappingURL=Auth.js.map