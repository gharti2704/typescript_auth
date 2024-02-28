import { IUserAuthService } from '../interface/IUserAuthService.js';
import { userModel } from '../../data/index.js';
import { Role, IReturnUser } from '../../data/model/interface/IUser.js';

export class UserAuthService implements IUserAuthService {
  public register = async (
    name: string,
    email: string,
    password: string,
    role: Role
  ): Promise<IReturnUser> => {
    try {
      //First check if the user already exists by email
      const user = await userModel.findOne({ email });
      if (user) {
        throw new Error('User already exists');
      }
      const newUser = (
        await userModel.create({ name, email, password, role })
      ).toObject();

      newUser.id = newUser._id;
      delete newUser.__v;
      delete newUser._id;

      return newUser;
    } catch (err) {
      throw err;
    }
  };

  public login = async (email: string, password: string): Promise<any> => {
    try {
      // your logic here
      return 'Login here';
    } catch (err) {
      throw err;
    }
  };

  public logout = async (): Promise<any> => {
    try {
      // your logic here
      return 'Log out here';
    } catch (err) {
      throw err;
    }
  };
}
