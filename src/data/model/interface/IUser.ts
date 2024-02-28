import { Document } from 'mongoose';
import { IUserMethods } from './IUserMethods.js';

export interface IUser extends Document, IUserMethods {
  id: string;
  name: string;
  email: string;
  hashed_password: string;
  salt: string;
  role: string;
  reset_password_link: string;
}
