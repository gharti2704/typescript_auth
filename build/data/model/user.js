const crypto = require('crypto');
import { Model, Schema } from 'mongoose';
export class User {
    userModel = (Model);
    constructor() {
        const userSchema = new Schema({
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
        }, { timestamps: true });
    }
}
//# sourceMappingURL=User.js.map