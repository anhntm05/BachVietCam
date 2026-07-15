import mongoose from 'mongoose';
import { User } from '../src/models/User';
import { Evaluation } from '../src/models/Evaluation';
import { Activity } from '../src/models/Activity';
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

const formatTimeAgo = (date: Date) => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + ' years ago';
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + ' months ago';
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + ' days ago';
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + ' hours ago';
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + ' minutes ago';
  return Math.floor(seconds) + ' seconds ago';
};

const seedEvaluations = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined in .env');
    }
    
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Clear existing evaluations and activities
    await Evaluation.deleteMany({});
    await Activity.deleteMany({});
    console.log('Cleared existing evaluations and activities');

    // Fetch all customers
    const users = await User.find({ role: 'Customer' });
    if (users.length === 0) {
      console.log('No customers found to seed evaluations.');
      process.exit(0);
    }

    // Distribute 200 turns among customers, max 4 per customer
    const userTurns = new Array(users.length).fill(0);
    let remainingTurns = 200;
    while (remainingTurns > 0) {
      const userIndex = Math.floor(Math.random() * users.length);
      if (userTurns[userIndex] < 4) {
        userTurns[userIndex]++;
        remainingTurns--;
      }
    }

    const evaluationsToInsert = [];
    const activitiesToInsert = [];

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const turns = userTurns[i];
      
      for (let j = 0; j < turns; j++) {
        // Random timestamp between user joinDate and now
        const start = user.joinDate.getTime();
        const end = Date.now();
        const randomTime = start + Math.random() * (end - start);
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

        activitiesToInsert.push({
          action: 'AI Evaluation',
          user: user.name,
          instrument,
          score,
          time: formatTimeAgo(timestamp),
          icon: 'psychology',
          createdAt: timestamp
        });
      }
    }

    await Evaluation.insertMany(evaluationsToInsert);
    await Activity.insertMany(activitiesToInsert);

    console.log(`Inserted ${evaluationsToInsert.length} evaluations and activities.`);

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding evaluations:', error);
    process.exit(1);
  }
};

seedEvaluations();
