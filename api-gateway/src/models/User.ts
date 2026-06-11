import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  userId: string;
  email: string;
  password?: string;
  role: 'Admin' | 'Customer';
  status: 'Active' | 'Banned';
  joinDate: Date;
  avatarUrl: string;
  resetOtp?: string;
  resetOtpExpire?: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, enum: ['Admin', 'Customer'], default: 'Customer' },
  status: { type: String, enum: ['Active', 'Banned'], default: 'Active' },
  joinDate: { type: Date, default: Date.now },
  avatarUrl: { type: String, required: true },
  resetOtp: { type: String },
  resetOtpExpire: { type: Date },
});

export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
