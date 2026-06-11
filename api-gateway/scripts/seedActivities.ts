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
        status: 'EXCELLENT',
        time: '2 mins ago',
        icon: 'mic'
      },
      {
        action: 'New Registration',
        user: 'Linh Đặng',
        instrument: 'Đàn Bầu',
        status: 'VERIFIED',
        time: '15 mins ago',
        icon: 'person_add'
      },
      {
        action: 'Content Update',
        user: 'Admin Việt',
        instrument: 'Sáo Trúc',
        status: 'DRAFT',
        time: '42 mins ago',
        icon: 'edit'
      },
      {
        action: 'AI Evaluation',
        user: 'Minh Tuấn',
        instrument: 'Đàn Tỳ Bà',
        status: 'GOOD',
        time: '1 hour ago',
        icon: 'mic'
      },
      {
        action: 'System Warning',
        user: 'System',
        instrument: 'N/A',
        status: 'LOW DISK',
        time: '3 hours ago',
        icon: 'error'
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
