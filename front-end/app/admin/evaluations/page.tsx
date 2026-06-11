'use client';

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface UserInfo {
  _id: string;
  name: string;
  avatarUrl?: string;
}

interface Evaluation {
  _id: string;
  timestamp: string;
  user: UserInfo;
  instrument: string;
  score: number;
  audioUrl?: string;
  aiInsights?: string;
  pitchAccuracy?: number;
  rhythmicIntegrity?: number;
  culturalNuance?: string;
}

export default function EvaluationsPage() {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEval, setSelectedEval] = useState<Evaluation | null>(null);

  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000';
        const headers = { Authorization: `Bearer ${Cookies.get('token')}` };
        const res = await fetch(`${apiUrl}/api/admin/evaluations`, { headers });
        if (res.ok) {
          const data = await res.json();
          setEvaluations(data);
          if (data.length > 0) {
            setSelectedEval(data[0]);
          }
        }
      } catch (error) {
        console.error('Failed to fetch evaluations:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvaluations();
  }, []);

  // Helper to get initials
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  // Helper for score styling
  const getScoreStyle = (score: number) => {
    if (score >= 90) return 'bg-primary-container/20 text-primary';
    if (score >= 75) return 'bg-secondary-container/20 text-secondary';
    return 'bg-error-container/20 text-error';
  };

  return (
    <div className="flex-1 p-8 bg-[radial-gradient(#d4af3710_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-headline-md text-headline-md text-primary">AI Evaluation Logs</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Review digital craftsmanship and performance accuracy across traditional instruments.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-lg border-2 border-outline-variant text-tertiary font-label-sm text-label-sm hover:bg-surface-container-high transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-body-md">delete_sweep</span>
            Bulk Delete
          </button>
          <button className="px-6 py-2.5 rounded-lg bg-primary-container text-on-tertiary-container font-semibold font-label-sm text-label-sm hover:brightness-110 shadow-sm transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-body-md">filter_list</span>
            Filter Results
          </button>
        </div>
      </div>

      {/* Bento Grid Layout for Content */}
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Table Container (Bento Box) */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl border border-primary-container/20 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Timestamp</th>
                  <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Instrument</th>
                  <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-center">Score</th>
                  <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Playback</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-on-surface-variant">Loading evaluations...</td>
                  </tr>
                ) : evaluations.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-on-surface-variant">No evaluation logs found.</td>
                  </tr>
                ) : (
                  evaluations.map((evalItem) => {
                    const isSelected = selectedEval?._id === evalItem._id;
                    return (
                      <tr 
                        key={evalItem._id} 
                        className={`transition-colors cursor-pointer group ${isSelected ? 'bg-primary-container/10' : 'hover:bg-primary-container/5'}`}
                        onClick={() => setSelectedEval(evalItem)}
                      >
                        <td className="px-6 py-4 font-body-md text-body-md text-on-surface">
                          {new Date(evalItem.timestamp).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold text-[10px]">
                              {getInitials(evalItem.user?.name || 'Unknown')}
                            </div>
                            <span className="font-body-md text-body-md">{evalItem.user?.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-body-md text-body-md">{evalItem.instrument}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${getScoreStyle(evalItem.score)}`}>
                            {evalItem.score}%
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${isSelected ? 'bg-primary text-white' : 'bg-surface-container border border-outline-variant/30 text-primary hover:bg-primary-container hover:text-white'}`}>
                            <span className="material-symbols-outlined">{isSelected ? 'pause' : 'play_arrow'}</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Inspector & Audio Player (Bento Box) */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          {/* Audio Player Glass Panel */}
          <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border-t-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-symbols-outlined text-6xl">music_note</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Now Reviewing</h3>
            <div className="mb-6 z-10 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">{selectedEval?.instrument || 'Instrument'} Performance</span>
                <span className="text-xs font-semibold text-primary">0:00 / 2:12</span>
              </div>
              <div className="h-1.5 bg-outline-variant/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 z-10 relative">
              <div className="flex items-center justify-around py-4 bg-surface-container-low/40 rounded-xl">
                <button className="text-tertiary hover:scale-110 transition-transform"><span className="material-symbols-outlined">skip_previous</span></button>
                <button className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-3xl">play_arrow</span>
                </button>
                <button className="text-tertiary hover:scale-110 transition-transform"><span className="material-symbols-outlined">skip_next</span></button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-2">
                <button className="flex flex-col items-center gap-1 p-4 rounded-xl border border-error/20 bg-error-container/5 text-error hover:bg-error-container/10 transition-all group">
                  <span className="material-symbols-outlined group-hover:fill-1 transition-all">flag</span>
                  <span className="font-label-sm text-[11px] font-bold uppercase tracking-tighter">Flag Bad Audio</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-4 rounded-xl border border-primary/20 bg-primary-container/5 text-primary hover:bg-primary-container/10 transition-all group">
                  <span className="material-symbols-outlined">analytics</span>
                  <span className="font-label-sm text-[11px] font-bold uppercase tracking-tighter">Detailed Analysis</span>
                </button>
              </div>
            </div>
          </div>

          {/* AI Insights Summary */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 shadow-sm">
            <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Evaluation Context</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                <span className="text-body-md text-on-surface-variant">Pitch Accuracy</span>
                <span className="font-bold text-primary">{selectedEval?.pitchAccuracy || 0}/100</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                <span className="text-body-md text-on-surface-variant">Rhythmic Integrity</span>
                <span className="font-bold text-primary">{selectedEval?.rhythmicIntegrity || 0}/100</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-body-md text-on-surface-variant">Cultural Nuance</span>
                <span className="font-bold text-primary">{selectedEval?.culturalNuance || 'N/A'}</span>
              </div>
              
              <div className="mt-6 pt-4 border-t border-primary-container/20">
                <p className="text-[11px] italic text-on-surface-variant leading-relaxed">
                  "{selectedEval?.aiInsights || 'No insights available.'}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer / Signature */}
      <footer className="mt-12 p-8 text-center border-t border-outline-variant/10">
        <p className="font-label-sm text-label-sm text-outline tracking-widest uppercase">© Bách Việt Cầm Digital Atelier 2024</p>
      </footer>
    </div>
  );
}
