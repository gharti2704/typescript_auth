import { userModel } from '../../data/index.js';
export class UserService {
    register = async (name, email, password, role) => {
        try {
            //First check if the user already exists by email
            const user = await userModel.findOne({ email });
            if (user) {
                throw new Error('User already exists');
            }
            const newUser = userModel.create({ name, email, password, role });
            return newUser;
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