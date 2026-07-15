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
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const newUsers = await User.countDocuments({ joinDate: { $gte: startOfDay } });
    
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

const formatExactTime = (date: Date) => {
  const pad = (n: number) => n.toString().padStart(2, '0');
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const dd = pad(date.getDate());
  const MM = pad(date.getMonth() + 1);
  const yyyy = date.getFullYear();
  return `${hh}:${mm} ${dd}/${MM}/${yyyy}`;
};

export const getActivities = async (_req: Request, res: Response) => {
  try {
    const evaluations = await Evaluation.find()
      .populate('user', 'name')
      .sort({ timestamp: -1 })
      .limit(10);
      
    const activities = evaluations.map(evalDoc => ({
      _id: evalDoc._id,
      action: 'AI Evaluation',
      user: (evalDoc.user as any)?.name || 'Unknown User',
      instrument: evalDoc.instrument,
      score: evalDoc.score,
      time: formatExactTime(evalDoc.timestamp),
      icon: 'psychology'
    }));

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
