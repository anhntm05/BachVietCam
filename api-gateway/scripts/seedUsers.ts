import mongoose from 'mongoose';
import { User } from '../src/models/User';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const users = [
  {
    name: 'Linh Nguyễn',
    userId: 'BVC-2024-001',
    email: 'linh.nguyen@vcam.vn',
    role: 'Artisan',
    status: 'Active',
    joinDate: new Date('2023-10-12'),
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGZ5LS91_iMLbokljQWX8nWB71nI_EzNXpvmCMBP1e8dl7Jko3lBoTgvnvpE74C-rcnP5MGfM0m8UTUlBsn3UTowu1K6d5pAhL61cPxH8pKcewLfI9swTQqOQQtg-eeBaywiZvqtqzlqoysTV7KeH-lTSpCj-Qoijpzl_RoCWdRlcYhTQqsGJ-bGf89TytPcKfwaMFLVW5T2_Hs2F7Mwq_HNWk8iJQeewt6hbtTdSMdN1oeK5VbwD3OaULz-JgefuafFowrjAYTu0S',
  },
  {
    name: 'Minh Trần',
    userId: 'BVC-2024-042',
    email: 'm.tran@cultural-arts.org',
    role: 'Member',
    status: 'Active',
    joinDate: new Date('2024-01-05'),
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZebhyvl50pfYWR9in6XxRQ95DKOY2n9efDTo0UKQCeJBjneykWbXsvhK4YmCxlYshbNziQrFmLObMEvYvETuTIsed-iIEB4GnVowJAM-FVCeLwPisuBZlYUYGv495vZrC64ypjgyCj11W7J0uvDCx0psJzPN6S-kvRqHXBvLKHq9pubS78bIrBe2bLreBwx0sS2CjZvtQT0oDYaceZo0A0NalYgtB40ikswutMZaJp0NnLpjEsdqmvHfp_v19uFONGoxA1eWtcWG9',
  },
  {
    name: 'Anh Đỗ',
    userId: 'BVC-2023-118',
    email: 'anh.do@vcam-admin.com',
    role: 'Admin',
    status: 'Banned',
    joinDate: new Date('2023-11-20'),
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcMdbJGbIn-iGcd8X8nxAXLwEwaaNIFQLVvOqEJ4YmDJRMXCBot8-VoMB5Jd1DFj-k0Kl4poz2ph_lX6nG2IT3wyUv-Kbmg4TC9eNFfSdfNzfZhxLlau6Ao1gEhqipJJoVYnhhPWBWmIH43IeRxPk1Ed1jvvA4PfDuwxsZsx4Uz2_fjU6a41bEjfzDcUG3tbZ2aayYDdkh6Mhbk0zfevwwQDrnJ2gnQkk6cHDPJUAZsm_lc_gp-8ZAmkm3nAMqLBPj4e6t3eQ5e0tU',
  },
  {
    name: 'Phương Lê',
    userId: 'BVC-2024-088',
    email: 'p.le@cultural-exchange.vn',
    role: 'Member',
    status: 'Active',
    joinDate: new Date('2024-02-14'),
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDj7XZmqjKTf5VRGkLexyyVS5xLCb6jftsyKBjrysYToe6p6DvnxlCAgocWBbaXuwO4jyziSlfjaMfkBy7a6QkrLj1LREN5h4nFf-Tud9K9ocfBr29gKd4cCBFP2Uu4S5ZKPZ71xO3TARtB_LCYyf_72eEbb3zxtGMe31CBhMyZtIHFpUg6_8DNMFnKaMz-xX28N9sezkqLm06Z61s9et9ZTUwtcCNiqr5sUYoi27RfSGeIY_Mb9jeXE6M_nDK5DfBDt3Tfx3ttdTU',
  }
];

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
