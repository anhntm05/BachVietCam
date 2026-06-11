'use client';

import React from 'react';

export default function TopNav() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-surface/60 dark:bg-inverse-surface/60 backdrop-blur-xl border-b border-outline-variant/20 dark:border-outline-variant/10 flex justify-between items-center px-8 w-full h-16 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md group focus-within:ring-1 ring-primary rounded-lg transition-all">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            className="w-full bg-surface-container-low border-none focus:ring-0 rounded-lg pl-10 text-body-md py-2" 
            placeholder="Search instruments or students..." 
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 ml-8">
        <button 
          className="p-2 hover:bg-primary-container/10 rounded-full transition-colors" 
          onClick={toggleDarkMode} 
          title="Toggle Dark Mode"
        >
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
        <button className="p-2 hover:bg-primary-container/10 rounded-full transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-primary-container/10 rounded-full transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
    </header>
  );
}
