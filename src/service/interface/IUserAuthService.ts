import { IReturnUser, Role } from '../../data/model/interface/IUser.js';

export interface IUserAuthService {
  register: (
    name: string,
    email: string,
    password: string,
    role: Role
  ) => Promise<IReturnUser>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
}
