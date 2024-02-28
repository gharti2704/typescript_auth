import { IUserService } from '../interface/IUserService.js';
import { userModel } from '../../data/index.js';

export class UserService implements IUserService {
  public register = async (
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<any> => {
    try {
      userModel.create({ name, email, password, role });
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
