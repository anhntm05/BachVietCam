import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import TopNav from '@/components/admin/TopNav';

export const metadata = {
  title: 'Bách Việt Cầm Admin Dashboard',
  description: 'Cultural Atelier Admin Dashboard',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background font-body-md text-on-surface flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col relative">
        <TopNav />
        {children}
      </div>
    </div>
  );
}
