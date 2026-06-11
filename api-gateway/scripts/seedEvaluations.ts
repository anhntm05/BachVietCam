import mongoose from 'mongoose';
import { User } from '../src/models/User';
import { Evaluation } from '../src/models/Evaluation';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const seedEvaluations = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined in .env');
    }
    
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Get users for referencing
    const users = await User.find();
    if (users.length === 0) {
      console.log('No users found. Please run seedUsers script first.');
      process.exit(1);
    }

    const evaluations = [
      {
        timestamp: new Date('2024-10-24T14:32:00'),
        user: users[0]._id, // Linh Nguyen (Artisan)
        instrument: 'Đàn Bầu',
        score: 94,
        pitchAccuracy: 96,
        rhythmicIntegrity: 92,
        culturalNuance: 'A',
        aiInsights: 'Excellent technique on the vibrating rod (Cần đàn). The vibrato is deeply emotive and matches historical masters.',
      },
      {
        timestamp: new Date('2024-10-24T13:15:00'),
        user: users[1]._id, // Minh Tran (Member)
        instrument: 'Đàn Nguyệt',
        score: 42,
        pitchAccuracy: 40,
        rhythmicIntegrity: 50,
        culturalNuance: 'C',
        aiInsights: 'Significant pitch drift detected. The fretting technique needs adjustment. Please refer to lesson 3 for correct left-hand positioning.',
      },
      {
        timestamp: new Date('2024-10-24T12:45:00'),
        user: users[3]._id, // Phuong Le (Member)
        instrument: 'Đàn Tranh',
        score: 88,
        pitchAccuracy: 92,
        rhythmicIntegrity: 85,
        culturalNuance: 'B+',
        aiInsights: 'The performance shows strong grasp of fundamental glissando techniques, though the tremolo on higher strings lacks the characteristic ethereal sustain.',
      },
      {
        timestamp: new Date('2024-10-24T11:20:00'),
        user: users[0]._id, // Linh Nguyen (Artisan)
        instrument: 'Sáo Trúc',
        score: 91,
        pitchAccuracy: 95,
        rhythmicIntegrity: 88,
        culturalNuance: 'A-',
        aiInsights: 'Great breath control and embouchure. The high notes are clear and piercing, very authentic to traditional northern style.',
      }
    ];

    await Evaluation.deleteMany({});
    console.log('Cleared existing evaluations');

    await Evaluation.insertMany(evaluations);
    console.log('Inserted sample evaluations');

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding evaluations:', error);
    process.exit(1);
  }
};

seedEvaluations();
