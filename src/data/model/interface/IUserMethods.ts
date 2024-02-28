export interface IUserMethods {
  encryptPassword: (password: string) => string;
  makeSalt: () => string;
  authenticate: (plainText: string) => boolean;
}
