import { Document } from 'mongoose';

export type Role = 'admin' | 'user';
export interface IUserModel extends Document {
  name: string;
  email: string;
  hashed_password: string;
  salt: string;
  role: Role;
  reset_password_link: string;
  createdAt: Date;
  updatedAt: Date;
  encryptPassword: (password: string) => string;
  makeSalt: () => string;
  authenticate: (plainText: string) => boolean;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface IReturnUser {
  id?: string;
  name: string;
  email: string;
  role: Role;
  reset_password_link: string;
  createdAt: Date;
  updatedAt: Date;
}
