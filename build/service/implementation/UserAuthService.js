import { userModel } from '../../data/index.js';
export class UserAuthService {
    register = async (name, email, password, role) => {
        try {
            //First check if the user already exists by email
            const user = await userModel.findOne({ email });
            if (user) {
                throw new Error('User already exists');
            }
            const newUser = (await userModel.create({ name, email, password, role })).toObject();
            newUser.id = newUser._id;
            delete newUser.__v;
            delete newUser._id;
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
//# sourceMappingURL=UserAuthService.js.map