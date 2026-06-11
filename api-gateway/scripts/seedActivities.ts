import mongoose from 'mongoose';
import { Activity } from '../src/models/Activity';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const seedActivities = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined in .env');
    }
    
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const activities = [
      {
        action: 'AI Evaluation',
        user: 'Hoàng Anh',
        instrument: 'Đàn Tranh',
        score: 95,
        time: '2 mins ago',
        icon: 'mic'
      },
      {
        action: 'AI Evaluation',
        user: 'Linh Đặng',
        instrument: 'Đàn Bầu',
        score: 88,
        time: '15 mins ago',
        icon: 'mic'
      },
      {
        action: 'AI Evaluation',
        user: 'Admin Việt',
        instrument: 'Sáo Trúc',
        score: 42,
        time: '42 mins ago',
        icon: 'mic'
      },
      {
        action: 'AI Evaluation',
        user: 'Minh Tuấn',
        instrument: 'Đàn Tỳ Bà',
        score: 75,
        time: '1 hour ago',
        icon: 'mic'
      },
      {
        action: 'AI Evaluation',
        user: 'System',
        instrument: 'Đàn Nhị',
        score: 60,
        time: '3 hours ago',
        icon: 'mic'
      }
    ];

    await Activity.deleteMany({});
    console.log('Cleared existing activities');

    await Activity.insertMany(activities);
    console.log('Inserted sample activities');

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding activities:', error);
    process.exit(1);
  }
};

seedActivities();
