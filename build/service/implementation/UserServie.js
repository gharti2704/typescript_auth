import { userModel } from '../../data/index.js';
export class UserService {
    register = async (name, email, password, role) => {
        try {
            userModel.create({ name, email, password, role });
        }
        catch (err) {
            throw err;
        }
    };
    login = async (email, password) => {
        try {
            // your logic here
            return 'Login here';
        }
        catch (err) {
            throw err;
        }
    };
    logout = async () => {
        try {
            // your logic here
            return 'Log out here';
        }
        catch (err) {
            throw err;
        }
    };
}
//# sourceMappingURL=UserServie.js.map