export class AuthController {
    userAuthService;
    constructor(userAuthService) {
        this.userAuthService = userAuthService;
    }
    register = async (req, res) => {
        const { name, email, password, role } = req.body;
        try {
            const user = await this.userAuthService.register(name, email, password, role);
            return res.status(201).send(user);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).send(err.message);
            }
            else {
                return res.status(500).send('Internal Server Error');
            }
        }
    };
    login = async (req, res) => {
        res.status(200).send('Login here');
    };
    logout = async (req, res) => {
        res.status(200).send('Log out here');
    };
}
//# sourceMappingURL=Auth.js.map