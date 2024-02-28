export interface IUserService {
  register: (
    name: string,
    email: string,
    password: string,
    role: string
  ) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
}
