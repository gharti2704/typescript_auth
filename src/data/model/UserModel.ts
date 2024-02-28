import * as crypto from 'crypto';
import { model, Model, Schema } from 'mongoose';
import { IUser } from './interface/IUser.js';

export class UserModel {
  private userModel = Model<IUser>;
  constructor() {
    const userSchema = new Schema<IUser>(
      {
        id: {
          type: String,
          unique: true,
          required: [true, 'id field is required'],
        },

        name: {
          type: String,
          trim: true,
          required: [true, 'Name is required'],
          max: 32,
        },

        email: {
          type: String,
          trim: true,
          lowercase: true,
          required: [true, 'Email is required'],
        },

        hashed_password: {
          type: String,
          required: true,
        },

        salt: String,

        role: {
          type: String,
          default: 'subscriber',
        },

        reset_password_link: {
          type: String,
          default: '',
        },
      },
      { timestamps: true }
    );

    //virtual property 'password' is not stored in the database
    userSchema
      .virtual('password')
      .set(function (password) {
        // this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
      })
      .get(function () {
        return this.hashed_password;
      });

    //methods that are dynamically created at runtime
    userSchema.methods = {
      encryptPassword: function (password: string): string {
        if (!password) return '';
        try {
          return crypto
            .createHmac('sha256', this.salt)
            .update(password)
            .digest('hex');
        } catch (err) {
          return '';
        }
      },

      makeSalt: function (): string {
        return Math.round(new Date().valueOf() * Math.random()) + '';
      },

      authenticate: function (plainText: string): boolean {
        return this.encryptPassword(plainText) === this.hashed_password;
      },
    };

    this.userModel = model<IUser>('user', userSchema);
  }

  public getUserModel(): Model<IUser> {
    return this.userModel as Model<IUser>;
  }
}
