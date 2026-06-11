'use client';

import React, { useEffect, useState } from 'react';

interface Instrument {
  _id: string;
  name: string;
  category: string;
  description: string;
  era: string;
  narrative: string;
  structuralSpecs: string;
  performanceSpecs: string;
  imageUrl: string;
}

export default function InstrumentsPage() {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000';
        const res = await fetch(`${apiUrl}/api/admin/instruments`);
        if (res.ok) {
          const data = await res.json();
          setInstruments(data);
          if (data.length > 0) {
            setSelectedInstrument(data[0]);
          }
        }
      } catch (error) {
        console.error('Failed to fetch instruments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstruments();
  }, []);

  return (
    <div className="flex-1 p-10 max-w-[1400px] mx-auto w-full relative">
      <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[600px] opacity-[0.04] pointer-events-none -z-10">
        <svg className="text-primary w-full h-full" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 10 C50 10 40 40 10 50 C40 60 50 90 50 90 C50 90 60 60 90 50 C60 40 50 10 50 10 Z"></path>
        </svg>
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-md text-headline-md text-primary mb-2">Instrument Collections</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl">Curating the timeless sounds of the Vietnamese spirit. Manage metadata, pedagogical records, and teacher reference materials for the digital atelier.</p>
        </div>
        <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl flex items-center gap-3 font-bold hover:shadow-lg transition-all hover:-translate-y-1 active:scale-95 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>
          <span className="material-symbols-outlined">add_circle</span>
          <span className="font-label-sm uppercase tracking-wider">Add New Instrument</span>
        </button>
      </div>

      {/* Bento Grid of Instruments */}
      <div className="grid grid-cols-12 gap-6 mb-16">
        {loading ? (
          <div className="col-span-12 text-center text-on-surface-variant">Loading instruments...</div>
        ) : (
          instruments.map((inst) => (
            <div 
              key={inst._id} 
              onClick={() => setSelectedInstrument(inst)}
              className={`col-span-12 md:col-span-4 bg-surface-container-lowest rounded-2xl overflow-hidden group transition-all hover:ring-2 ring-primary/20 hover:shadow-xl flex flex-col cursor-pointer border border-amber-500/20 shadow-sm ${selectedInstrument?._id === inst._id ? 'ring-2 ring-primary' : ''}`}
            >
              <div className="h-64 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={inst.imageUrl} alt={inst.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{inst.name}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">{inst.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{inst.category}</span>
                  <button className="text-primary flex items-center gap-1 font-bold text-sm group-hover:gap-2 transition-all">
                    Edit Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit/Form Section */}
      {selectedInstrument && (
        <section className="bg-white/40 backdrop-blur-md rounded-[32px] p-10 mb-16 shadow-2xl relative border-t-2 border-primary-container">
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            {/* Column 1: Metadata & Form */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
                <h3 className="font-headline-md text-headline-md">Editing: {selectedInstrument.name} Collection</h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 focus-within:text-primary">
                    <label className="font-label-sm text-xs uppercase tracking-widest text-primary transition-colors">Instrument Name</label>
                    <input className="w-full bg-surface-container-lowest border-b-2 border-primary-container border-x-0 border-t-0 focus:ring-0 focus:border-primary font-body-md py-3 text-lg transition-colors" type="text" defaultValue={selectedInstrument.name} />
                  </div>
                  <div className="space-y-2 focus-within:text-primary">
                    <label className="font-label-sm text-xs uppercase tracking-widest text-primary transition-colors">Historical Era</label>
                    <select className="w-full bg-surface-container-lowest border-b-2 border-primary-container border-x-0 border-t-0 focus:ring-0 focus:border-primary font-body-md py-3 text-lg transition-colors" defaultValue={selectedInstrument.era}>
                      <option>Hồng Bàng Period</option>
                      <option>Lý-Trần Dynasties</option>
                      <option>Lê Dynasty (Imperial Modern)</option>
                      <option>Contemporary Digital</option>
                      <option>{selectedInstrument.era}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 focus-within:text-primary">
                  <label className="font-label-sm text-xs uppercase tracking-widest text-primary transition-colors">Historical Narrative</label>
                  <textarea className="w-full bg-surface-container-lowest border-b-2 border-primary-container border-x-0 border-t-0 focus:ring-0 focus:border-primary font-body-md py-3 resize-none transition-colors" rows={4} defaultValue={selectedInstrument.narrative}></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 focus-within:text-primary">
                    <label className="font-label-sm text-xs uppercase tracking-widest text-primary transition-colors">Structural Specs</label>
                    <textarea className="w-full bg-surface-container-lowest border-b-2 border-primary-container border-x-0 border-t-0 focus:ring-0 focus:border-primary font-body-md py-3 resize-none text-sm transition-colors" rows={3} defaultValue={selectedInstrument.structuralSpecs}></textarea>
                  </div>
                  <div className="space-y-2 focus-within:text-primary">
                    <label className="font-label-sm text-xs uppercase tracking-widest text-primary transition-colors">Technical Performance</label>
                    <textarea className="w-full bg-surface-container-lowest border-b-2 border-primary-container border-x-0 border-t-0 focus:ring-0 focus:border-primary font-body-md py-3 resize-none text-sm transition-colors" rows={3} defaultValue={selectedInstrument.performanceSpecs}></textarea>
                  </div>
                </div>
              </form>
            </div>

            {/* Column 2: Audio & Assets Management */}
            <div className="w-full lg:w-96 space-y-8">
              <div className="bg-surface-container-lowest rounded-2xl p-6 border border-primary-container/20">
                <h4 className="font-label-sm text-xs uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">mic</span> Master Audio References
                </h4>
                <div className="space-y-4">
                  {/* Audio Item */}
                  <div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined">play_arrow</span>
                    </button>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-xs font-bold truncate">Master_Example.wav</p>
                      <p className="text-[10px] opacity-60">Classical Modal Example • 4:22</p>
                    </div>
                    <button className="text-on-surface-variant hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </button>
                  </div>

                  <div className="mt-4">
                    <label className="cursor-pointer group">
                      <div className="border-2 border-dashed border-primary-container/40 rounded-xl p-8 flex flex-col items-center justify-center gap-2 group-hover:bg-primary-container/5 transition-colors">
                        <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
                        <span className="text-xs font-bold text-primary">Upload Audio File</span>
                      </div>
                      <input className="hidden" type="file" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">Save Changes</button>
                <button className="w-full border-2 border-outline-variant text-on-surface-variant py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-all">Discard Edits</button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex items-center gap-4 relative z-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <span className="material-symbols-outlined text-primary opacity-40">filter_vintage</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
        </section>
      )}

      {/* Advanced Settings / Meta Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-surface-container-lowest p-8 rounded-2xl border border-amber-500/20 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary">analytics</span>
            <h4 className="font-bold text-sm uppercase tracking-wide">Usage Analytics</h4>
          </div>
          <p className="text-sm text-on-surface-variant mb-6">Instrument profile has been viewed 1,240 times this month. Pedagogy videos played 450 times.</p>
          <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full"></div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-2xl border border-amber-500/20 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary">school</span>
            <h4 className="font-bold text-sm uppercase tracking-wide">Teacher Reviews</h4>
          </div>
          <p className="text-sm text-on-surface-variant mb-4">3 teachers have submitted revisions for the 'Technique' section.</p>
          <button className="text-primary font-bold text-xs underline underline-offset-4 decoration-primary-container hover:decoration-primary transition-all">Review Submissions</button>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-2xl border border-amber-500/20 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary">language</span>
            <h4 className="font-bold text-sm uppercase tracking-wide">Translations</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary-container/20 text-primary text-[10px] font-bold rounded-full border border-primary/20">Vietnamese (Main)</span>
            <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded-full">English</span>
            <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded-full">French</span>
            <button className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center"><span className="material-symbols-outlined text-xs">add</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}
