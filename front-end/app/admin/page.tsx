'use client';

import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Cookies from 'js-cookie';

interface DashboardMetrics {
  totalUsers: number;
  newUsers: number;
  evaluationsDone: number;
  storageUsedMB: number;
}

interface Activity {
  _id: string;
  action: string;
  user: string;
  instrument: string;
  score: number;
  time: string;
  icon: string;
}

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalUsers: 0,
    newUsers: 0,
    evaluationsDone: 0,
    storageUsedMB: 200,
  });
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000';
        const headers = { Authorization: `Bearer ${Cookies.get('token')}` };
        
        const metricsRes = await fetch(`${apiUrl}/api/admin/dashboard/metrics`, { headers });
        if (metricsRes.ok) {
          const metricsData = await metricsRes.json();
          setMetrics(prev => ({ ...prev, ...metricsData }));
        }

        const activitiesRes = await fetch(`${apiUrl}/api/admin/dashboard/activities`, { headers });
        if (activitiesRes.ok) {
          const activitiesData = await activitiesRes.json();
          setActivities(activitiesData);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (loading) return;

    // Traffic Chart Configuration
    const trafficCanvas = document.getElementById('trafficChart') as HTMLCanvasElement;
    let trafficChart: Chart | null = null;
    if (trafficCanvas) {
      trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Active Users',
            data: [1200, 1900, 1700, 2100, 2500, 3200, 2800],
            borderColor: '#d4af37',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#735c00'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(0,0,0,0.05)' },
            },
            x: {
              grid: { display: false },
            }
          }
        }
      });
    }

    // Popularity Chart Configuration
    const popCanvas = document.getElementById('popularityChart') as HTMLCanvasElement;
    let popChart: Chart | null = null;
    if (popCanvas) {
      popChart = new Chart(popCanvas, {
        type: 'doughnut',
        data: {
          labels: ['Tranh', 'Sáo', 'Tỳ Bà', 'Nhị', 'Bầu'],
          datasets: [{
            data: [35, 25, 15, 15, 10],
            backgroundColor: [
              '#d4af37',
              '#895033',
              '#e9c349',
              '#eba280',
              '#735c00'
            ],
            borderWidth: 0,
            hoverOffset: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 20,
              }
            }
          },
          cutout: '70%'
        }
      });
    }

    return () => {
      if (trafficChart) trafficChart.destroy();
      if (popChart) popChart.destroy();
    };
  }, [loading]);

  return (
    <div className="p-8 max-w-[1400px] mx-auto w-full space-y-8 flex-1">
      {/* Welcome Section */}
      <section>
        <h2 className="font-headline-md text-headline-md text-primary mb-1">Bách Việt Cầm Canvas</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Welcome back to the Cultural Digital Atelier.</p>
      </section>

      {/* Metric Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform border border-amber-500/20 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined p-2 bg-primary-container/20 text-primary rounded-lg">group</span>
            <span className="text-emerald-600 font-label-sm">+12%</span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Users</p>
          <p className="font-headline-sm text-headline-sm mt-1">{loading ? '...' : metrics.totalUsers.toLocaleString()}</p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform border border-amber-500/20 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined p-2 bg-primary-container/20 text-primary rounded-lg">person_add</span>
            <span className="text-emerald-600 font-label-sm">+5%</span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">New Users</p>
          <p className="font-headline-sm text-headline-sm mt-1">{loading ? '...' : metrics.newUsers.toLocaleString()}</p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform border border-amber-500/20 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined p-2 bg-primary-container/20 text-primary rounded-lg">psychology</span>
            <span className="text-primary font-label-sm">Active</span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Evaluations Done</p>
          <p className="font-headline-sm text-headline-sm mt-1">{loading ? '...' : metrics.evaluationsDone.toLocaleString()}</p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform border border-amber-500/20 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined p-2 bg-primary-container/20 text-primary rounded-lg">database</span>
            <span className="text-amber-600 font-label-sm">84%</span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Storage Used</p>
          <p className="font-headline-sm text-headline-sm mt-1">{loading ? '...' : `${metrics.storageUsedMB} MB`}</p>
        </div>
      </section>

      {/* Main Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/40 backdrop-blur-md border-t-2 border-primary-container p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-sm text-headline-sm text-primary">Daily Cultural Traffic</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-label-sm bg-primary text-on-primary rounded-full">Week</button>
              <button className="px-3 py-1 text-xs font-label-sm hover:bg-primary-container/10 rounded-full transition-colors">Month</button>
            </div>
          </div>
          <div className="h-[300px]">
            <canvas id="trafficChart"></canvas>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur-md border-t-2 border-primary-container p-6 rounded-xl shadow-sm">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Instrument Usage</h3>
          <div className="h-[300px] flex items-center justify-center">
            <canvas id="popularityChart"></canvas>
          </div>
        </div>
      </section>

      {/* Recent Activities Section */}
      <section className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-amber-500/20">
        <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
          <h3 className="font-headline-sm text-headline-sm text-primary">Recent Atelier Activities</h3>
          <button className="text-tertiary font-label-sm hover:underline flex items-center gap-1">
            View All Logs <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-primary-container/5 text-on-surface-variant font-label-sm uppercase tracking-tighter">
              <tr>
                <th className="px-6 py-4">Action</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Instrument</th>
                <th className="px-6 py-4 text-center">Score</th>
                <th className="px-6 py-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {loading ? (
                <tr><td colSpan={5} className="px-6 py-4 text-center">Loading activities...</td></tr>
              ) : activities.map((act) => (
                <tr key={act._id} className="hover:bg-primary-container/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">{act.icon}</span>
                      <span className="font-body-md">{act.action}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{act.user}</td>
                  <td className="px-6 py-4">{act.instrument || 'N/A'}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      act.score >= 90 ? 'bg-primary-container/20 text-primary' :
                      act.score >= 75 ? 'bg-secondary-container/20 text-secondary' :
                      act.score >= 50 ? 'bg-amber-100 text-amber-800' :
                      'bg-error-container/20 text-error'
                    }`}>
                      {act.score !== undefined ? `${act.score}%` : 'N/A'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-on-surface-variant text-sm">{act.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
