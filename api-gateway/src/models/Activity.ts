import mongoose, { Document, Schema } from 'mongoose';

export interface IActivity extends Document {
  action: string;
  user: string;
  instrument?: string;
  status: string;
  time: string;
  icon: string;
  createdAt: Date;
}

const ActivitySchema: Schema = new Schema({
  action: { type: String, required: true },
  user: { type: String, required: true },
  instrument: { type: String },
  status: { type: String, required: true },
  time: { type: String, required: true },
  icon: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Activity = mongoose.models.Activity || mongoose.model<IActivity>('Activity', ActivitySchema);
