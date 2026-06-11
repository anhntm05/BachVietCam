import { Request, Response } from 'express';
import { User } from '../models/User';
import { Evaluation } from '../models/Evaluation';
import { Activity } from '../models/Activity';
import { Instrument } from '../models/Instrument';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().sort({ joinDate: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const getEvaluations = async (_req: Request, res: Response) => {
  try {
    const evaluations = await Evaluation.find()
      .populate('user', 'name avatarUrl')
      .sort({ timestamp: -1 });
    res.json(evaluations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch evaluations' });
  }
};

export const getDashboardMetrics = async (_req: Request, res: Response) => {
  try {
    const totalUsers = await User.countDocuments();
    // For demo purposes, we define 'newUsers' as those joined in last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const newUsers = await User.countDocuments({ joinDate: { $gte: thirtyDaysAgo } });
    
    const evaluationsDone = await Evaluation.countDocuments();
    
    res.json({
      totalUsers,
      newUsers,
      evaluationsDone,
      storageUsedMB: 200 // Hardcoded for demo as requested by user template
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard metrics' });
  }
};

export const getActivities = async (_req: Request, res: Response) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 }).limit(10);
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
};

export const getInstruments = async (_req: Request, res: Response) => {
  try {
    const instruments = await Instrument.find();
    res.json(instruments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch instruments' });
  }
};
