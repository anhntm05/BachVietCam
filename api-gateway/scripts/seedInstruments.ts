import mongoose from 'mongoose';
import { Instrument } from '../src/models/Instrument';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const seedInstruments = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined in .env');
    }
    
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const instruments = [
      {
        name: 'Đàn Bầu',
        category: 'Zither Family',
        description: 'The haunting soul of Vietnamese music, this monochord instrument produces ethereal harmonics mirroring the human voice.',
        era: 'Lê Dynasty (Imperial Modern)',
        narrative: 'The origin of the đàn bầu is a legend involving a blind woman who played for her husband\'s return. Historically, it is documented as a folk instrument that evolved into a centerpiece of the Hue Imperial Court music.',
        structuralSpecs: 'Gourd resonator, silk string (modern steel), bamboo handle (cần đàn), water buffalo horn components.',
        performanceSpecs: 'Pressure-based pitch modulation, natural harmonics, tremolo using handle manipulation.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKTcWb9rv4lUIFNCXsAjoKDApWVfFIMx3iexX8VtEVdyoVoCglBpnk-MC3SIAd1xEJQqayUqpQggRdPu-H6r8fFl8Vb5XcSeXqX03xTSytSEUymAga8boqdl8rQetdUV_AGpIUrelSrRaKYx6km7YpibfgAhOD4Dy8pzWZtBYAgWbRJIuRiYQEGuFPSBuM85x2JxOTiQfu_78xgcQqu5SAsDxEqk-FHIAPCqr6JRCvRFxLv1XaAz11iOwPh9tac7a27DbzyeamkNvx'
      },
      {
        name: 'Đàn Tranh',
        category: 'Plucked Strings',
        description: 'A plucked zither with 16 to 22 strings, known for its bright, cascading melodic runs and crystalline clarity.',
        era: 'Lý-Trần Dynasties',
        narrative: 'Related to other Asian zithers like the Guzheng, the Đàn Tranh was a staple of chamber music and royal court ensembles.',
        structuralSpecs: 'Long wooden soundboard, 16-22 steel strings, movable wooden bridges.',
        performanceSpecs: 'Right-hand plucking with plectrums, left-hand pitch bending on the non-playing side of the bridge.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClAnlDLHhcqzXfhmRrgr-IlrZxY-zau1yFoWMeA3b4OScWwZoHn9iMX5592TcigAfWOVxxEqKFpqCQmgw138mtSq2-20BMLfJeCrFRt3j7UXmfGzydg_44CRI_6bThtrHG36XQEWCtLpgEbJZA9psbI_hQK4uV2G4-85fgJ1DjernU3J1B670GlE_bbeYBRgG6VshLk-X9sz4WNO_K5Ei1i8SXPD-7qPof8TlFP5q1__zqkxDyFT9X0jjPvx_bWG6ubfIXvvsI7-PC'
      },
      {
        name: 'Đàn Tỳ Bà',
        category: 'Lute Family',
        description: 'The pear-shaped lute, essential for chamber music and royal court performances with its percussive, agile tone.',
        era: 'Lê Dynasty (Imperial Modern)',
        narrative: 'Often played in royal court music, the Tỳ Bà represents elegance and sophistication in Vietnamese traditional music.',
        structuralSpecs: 'Pear-shaped wooden body, four strings, multiple frets raised off the neck.',
        performanceSpecs: 'Played upright. Right hand plucks with a plectrum or fingernails, left hand presses strings against frets to produce precise pitches.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEgejQIHnU_8FlHixPE6A23L4xvJPfUiTEnzvTsFfSUg1uC07vzKhzWGKtF7WDTX2vR4rtOl_PhHuTzc2Bfpodkwe7FPCWpBHqpnYjhJ5rVAsA_Fp31xDMzUQMKuUf80Ak7seFhgIE7G2i2yZVhQq9R9KnmcvLuqUfcUuneyouol28Xz3rSLZnHLplMtOF3dPrEniM9EvJ00R7HQQJ92DNxZMgjIkFjYyRxiUmFsYWsRAgxhvkHEc6YnvP6fjncUuXjwEODOMiSA18'
      }
    ];

    await Instrument.deleteMany({});
    console.log('Cleared existing instruments');

    await Instrument.insertMany(instruments);
    console.log('Inserted sample instruments');

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding instruments:', error);
    process.exit(1);
  }
};

seedInstruments();
