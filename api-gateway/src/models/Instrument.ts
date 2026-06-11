import mongoose, { Document, Schema } from 'mongoose';

export interface IInstrument extends Document {
  name: string;
  category: string;
  description: string;
  era: string;
  narrative: string;
  structuralSpecs: string;
  performanceSpecs: string;
  imageUrl: string;
}

const InstrumentSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  era: { type: String, required: true },
  narrative: { type: String, required: true },
  structuralSpecs: { type: String, required: true },
  performanceSpecs: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export const Instrument = mongoose.models.Instrument || mongoose.model<IInstrument>('Instrument', InstrumentSchema);
