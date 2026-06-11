'use client';

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface User {
  _id: string;
  name: string;
  userId: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  avatarUrl: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We will fetch from API later
    const fetchUsers = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000';
        const headers = { Authorization: `Bearer ${Cookies.get('token')}` };
        const res = await fetch(`${apiUrl}/api/admin/users`, { headers });
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        }
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  return (
    <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
      {/* Page Title & Header Actions */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display-lg text-headline-md text-on-surface">User Repository</h2>
          <p className="text-on-surface-variant max-w-xl">Oversee the digital lineage of our Bách Việt Cầm community. Manage academic roles and artisan profiles.</p>
        </div>
        <button className="bg-[#D4AF37] text-on-tertiary-container font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary-container/20">
          <span className="material-symbols-outlined" data-icon="person_add">person_add</span>
          <span className="font-label-sm text-label-sm">Enroll New Member</span>
        </button>
      </div>

      {/* Bento Grid Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        <div className="md:col-span-8 bg-surface-container-lowest p-6 rounded-2xl flex flex-wrap gap-4 items-center border border-amber-500/20">
          <div className="flex flex-col gap-1">
            <span className="font-label-sm text-[10px] uppercase tracking-widest text-outline">Filter by Role</span>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-medium text-label-sm">All</button>
              <button className="px-4 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant font-medium text-label-sm hover:bg-outline-variant/30 transition-colors">Admin</button>
              <button className="px-4 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant font-medium text-label-sm hover:bg-outline-variant/30 transition-colors">Member</button>
              <button className="px-4 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant font-medium text-label-sm hover:bg-outline-variant/30 transition-colors">Artisan</button>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-outline-variant/30 mx-2"></div>
          <div className="flex flex-col gap-1">
            <span className="font-label-sm text-[10px] uppercase tracking-widest text-outline">Account Status</span>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant font-medium text-label-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Active
              </button>
              <button className="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant font-medium text-label-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error"></span>
                Banned
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container-lowest p-6 rounded-2xl flex flex-col justify-center border border-amber-500/20">
          <span className="font-label-sm text-[10px] uppercase tracking-widest text-outline mb-2">Member Statistics</span>
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-headline-sm font-bold text-primary">{users.length || "1,284"}</span>
              <span className="text-[10px] text-on-surface-variant">Active Scholars</span>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant/30"></div>
            <div className="flex flex-col">
              <span className="text-headline-sm font-bold text-secondary">42</span>
              <span className="text-[10px] text-on-surface-variant">New this month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Complex Data Table Section */}
      <div className="bg-white/40 backdrop-blur-md border-t-2 border-primary-container rounded-3xl overflow-hidden shadow-xl shadow-black/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-5 font-label-sm text-label-sm text-outline uppercase tracking-wider">User</th>
                <th className="px-6 py-5 font-label-sm text-label-sm text-outline uppercase tracking-wider">Email Address</th>
                <th className="px-6 py-5 font-label-sm text-label-sm text-outline uppercase tracking-wider">Role</th>
                <th className="px-6 py-5 font-label-sm text-label-sm text-outline uppercase tracking-wider">Status</th>
                <th className="px-6 py-5 font-label-sm text-label-sm text-outline uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-5 font-label-sm text-label-sm text-outline uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20 bg-surface-container-lowest">
                          <img alt="Avatar" src={user.avatarUrl} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-semibold text-on-surface">{user.name}</p>
                          <p className="text-[11px] text-on-surface-variant">ID: {user.userId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded font-semibold text-[10px] uppercase tracking-tighter ${
                        user.role === 'Admin' ? 'bg-primary-container/20 text-on-primary-container' :
                        user.role === 'Artisan' ? 'bg-secondary-container/20 text-on-secondary-container' :
                        'bg-tertiary-container/20 text-on-tertiary-container'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`flex items-center gap-1.5 font-medium text-label-sm ${user.status === 'Active' ? 'text-green-700' : 'text-on-surface-variant'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-error'}`}></span>
                        {user.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant text-label-sm">{new Date(user.joinDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:text-primary transition-colors" title="View Profile"><span className="material-symbols-outlined" data-icon="visibility">visibility</span></button>
                        <button className="p-2 hover:text-primary transition-colors" title="Edit"><span className="material-symbols-outlined" data-icon="edit">edit</span></button>
                        <button className="p-2 hover:text-error transition-colors" title={user.status === 'Active' ? 'Ban' : 'Unban'}><span className="material-symbols-outlined" data-icon={user.status === 'Active' ? 'block' : 'undo'}>{user.status === 'Active' ? 'block' : 'undo'}</span></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-on-surface-variant">
                    {loading ? 'Loading users...' : 'No users found.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-8 py-5 bg-surface-container-low/50 flex justify-between items-center border-t border-outline-variant/10">
          <p className="text-label-sm text-on-surface-variant">Showing {users.length} entries</p>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-primary-container/10 text-on-surface-variant transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold text-label-sm">1</button>
            <button className="p-2 rounded-lg hover:bg-primary-container/10 text-on-surface-variant transition-colors">
              <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Decorative Lotus Motif */}
      <div className="mt-16 flex flex-col items-center opacity-10 pointer-events-none">
        <span className="material-symbols-outlined text-[48px] text-primary" data-icon="yard">yard</span>
        <div className="w-24 h-[1px] bg-primary mt-4"></div>
      </div>
    </div>
  );
}
