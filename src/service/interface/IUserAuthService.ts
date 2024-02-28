import { Role } from '../../data/model/interface/IUser.js';

export interface IUserAuthService {
  register: (
    name: string,
    email: string,
    password: string,
    role: Role
  ) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
}
