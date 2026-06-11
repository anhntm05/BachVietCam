import mongoose from 'mongoose';
import { config } from './env';

export const connectDB = async () => {
  try {
    if (!config.mongoUri) {
      console.warn('MongoDB URI is not defined. Skipping database connection.');
      return;
    }
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${(error as Error).message}`);
    process.exit(1);
  }
};
