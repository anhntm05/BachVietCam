import mongoose from 'mongoose';
import { User } from '../src/models/User';
import { Evaluation } from '../src/models/Evaluation';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const instruments = ['Đàn Tranh', 'Đàn Bầu', 'Sáo Trúc', 'Đàn Tỳ Bà', 'Đàn Nhị'];
const nuances = [
  'Excellent emotional expression',
  'Good technique but lacks traditional feel',
  'Authentic style',
  'Needs more vibrato (rung)',
  'Perfect timing and ornamentation'
];

const seedEvaluationsToday = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined in .env');
    }
    
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Fetch all customers
    const users = await User.find({ role: 'Customer' });
    if (users.length === 0) {
      console.log('No customers found to seed evaluations.');
      process.exit(0);
    }

    // Today's boundaries
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const endOfNow = now.getTime();

    const evaluationsToInsert = [];

    // Distribute 100 turns
    for (let i = 0; i < 100; i++) {
      const user = users[Math.floor(Math.random() * users.length)];
      
      const randomTime = startOfDay + Math.random() * (endOfNow - startOfDay);
      const timestamp = new Date(randomTime);

      const score = Math.floor(Math.random() * 51) + 50; // 50-100
      const instrument = instruments[Math.floor(Math.random() * instruments.length)];
      
      evaluationsToInsert.push({
        timestamp,
        user: user._id,
        instrument,
        score,
        audioUrl: 'https://example.com/audio.mp3',
        aiInsights: 'Generated AI insights for the performance.',
        pitchAccuracy: Math.floor(Math.random() * 21) + 80,
        rhythmicIntegrity: Math.floor(Math.random() * 21) + 80,
        culturalNuance: nuances[Math.floor(Math.random() * nuances.length)],
      });
    }

    await Evaluation.insertMany(evaluationsToInsert);

    console.log(`Inserted ${evaluationsToInsert.length} evaluations for today.`);

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding evaluations:', error);
    process.exit(1);
  }
};

seedEvaluationsToday();
