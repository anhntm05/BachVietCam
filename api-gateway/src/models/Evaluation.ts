import mongoose, { Document, Schema } from 'mongoose';

export interface IEvaluation extends Document {
  timestamp: Date;
  user: mongoose.Types.ObjectId;
  instrument: string;
  score: number;
  audioUrl?: string;
  aiInsights?: string;
  pitchAccuracy: number;
  rhythmicIntegrity: number;
  culturalNuance: string;
}

const EvaluationSchema: Schema = new Schema({
  timestamp: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  instrument: { type: String, required: true },
  score: { type: Number, required: true },
  audioUrl: { type: String },
  aiInsights: { type: String },
  pitchAccuracy: { type: Number, required: true },
  rhythmicIntegrity: { type: Number, required: true },
  culturalNuance: { type: String, required: true },
});

export const Evaluation = mongoose.models.Evaluation || mongoose.model<IEvaluation>('Evaluation', EvaluationSchema);
