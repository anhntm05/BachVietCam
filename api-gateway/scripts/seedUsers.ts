import mongoose from 'mongoose';
import { User } from '../src/models/User';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
};

const generateUsers = () => {
  const generatedUsers = [];
  const start = new Date('2026-06-08T00:00:00Z').getTime();
  const end = new Date('2026-06-18T23:59:59Z').getTime();
  const firstNames = ['Linh', 'Minh', 'Anh', 'Phương', 'Hải', 'Bảo', 'Tuấn', 'Hùng', 'Hương', 'Lan'];
  const lastNames = ['Nguyễn', 'Trần', 'Đỗ', 'Lê', 'Phạm', 'Hoàng', 'Huỳnh', 'Phan', 'Vũ', 'Võ'];

  // Add 1 admin account
  generatedUsers.push({
    name: 'Minh Anh Nguyen',
    userId: 'BVC-2026-000',
    email: 'nguyenminhanh@vcam.vn',
    role: 'Admin',
    status: 'Active',
    joinDate: new Date('2026-06-08T00:00:00Z'),
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGZ5LS91_iMLbokljQWX8nWB71nI_EzNXpvmCMBP1e8dl7Jko3lBoTgvnvpE74C-rcnP5MGfM0m8UTUlBsn3UTowu1K6d5pAhL61cPxH8pKcewLfI9swTQqOQQtg-eeBaywiZvqtqzlqoysTV7KeH-lTSpCj-Qoijpzl_RoCWdRlcYhTQqsGJ-bGf89TytPcKfwaMFLVW5T2_Hs2F7Mwq_HNWk8iJQeewt6hbtTdSMdN1oeK5VbwD3OaULz-JgefuafFowrjAYTu0S',
  });

  for (let i = 1; i <= 100; i++) {
    const randomTime = start + Math.random() * (end - start);
    const joinDate = new Date(randomTime);
    const role = 'Customer';
    const status = 'Active';
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    const cleanFirstName = removeAccents(firstName).toLowerCase().replace(/\s/g, '');
    const cleanLastName = removeAccents(lastName).toLowerCase().replace(/\s/g, '');
    const randomNumber = Math.floor(Math.random() * 100000) + 1;
    const email = `${cleanLastName}${cleanFirstName}${randomNumber}@vcam.vn`;

    generatedUsers.push({
      name: `${firstName} ${lastName}`,
      userId: `BVC-2026-${i.toString().padStart(3, '0')}`,
      email,
      role,
      status,
      joinDate,
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGZ5LS91_iMLbokljQWX8nWB71nI_EzNXpvmCMBP1e8dl7Jko3lBoTgvnvpE74C-rcnP5MGfM0m8UTUlBsn3UTowu1K6d5pAhL61cPxH8pKcewLfI9swTQqOQQtg-eeBaywiZvqtqzlqoysTV7KeH-lTSpCj-Qoijpzl_RoCWdRlcYhTQqsGJ-bGf89TytPcKfwaMFLVW5T2_Hs2F7Mwq_HNWk8iJQeewt6hbtTdSMdN1oeK5VbwD3OaULz-JgefuafFowrjAYTu0S',
    });
  }
  return generatedUsers;
};

const users = generateUsers();

import bcrypt from 'bcryptjs';

const seedUsers = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined in .env');
    }
    
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    await User.deleteMany({});
    console.log('Cleared existing users');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('123456', salt);

    const usersWithPasswords = users.map(user => ({
      ...user,
      role: user.role === 'Admin' ? 'Admin' : 'Customer',
      password: hashedPassword
    }));

    await User.insertMany(usersWithPasswords);
    console.log('Inserted sample users with hashed passwords');

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
};

seedUsers();
