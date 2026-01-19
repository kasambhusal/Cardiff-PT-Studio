'use client';

import React, { useState } from 'react';
import Button from './Button'; // Import your consistent button

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
const CLASS_DURATION_MIN = 45;

const classes = [
  { day: 'Monday', start24: '18:15', trainer: 'Joe', name: 'Functionally Fit' },
  { day: 'Wednesday', start24: '06:30', trainer: 'John', name: 'Metcon Circuits', online: true },
  { day: 'Saturday', start24: '08:15', trainer: 'John', name: 'Metcon Circuits', online: true },
  { day: 'Monday', start24: '18:30', trainer: 'John', name: 'Boxfit' },
  { day: 'Tuesday', start24: '18:30', trainer: 'Hector', name: 'HIIT Circuits' },
  { day: 'Thursday', start24: '18:45', trainer: 'Martin', name: 'MRT metcon' },
];

const formatRange = (start24: string) => {
  const [h, m] = start24.split(':').map(Number);
  const endMin = (h * 60 + m) + CLASS_DURATION_MIN;
  const pad = (n: number) => String(Math.floor(n)).padStart(2, '0');
  return `${pad(h)}:${pad(m)} - ${pad((endMin / 60) % 24)}:${pad(endMin % 60)}`;
};

export default function ScheduleTable() {
  const [openDay, setOpenDay] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <header className="mb-8 text-center lg:text-left">
        <h2 className="text-5xl md:text-7xl font-black text-[var(--primary-black)] uppercase italic leading-none tracking-tighter mb-6">
          Training <span className="text-[var(--primary-blue)]">Schedule</span>
        </h2>
        <p className="max-w-2xl text-gray-600 font-medium">
          Limited to 12 people per session. 45 minutes of high-intensity, results-driven coaching.
        </p>
      </header>

      {/* Desktop Grid Layout (Better than a table) */}
      <div className="hidden lg:grid grid-cols-7 gap-4">
        {weekdays.map((day) => (
          <div key={day} className="flex flex-col gap-4">
            <div className="bg-[var(--primary-black)] text-white py-3 px-2 text-center text-xs font-black uppercase italic tracking-widest">
              {day}
            </div>
            
            <div className="flex flex-col gap-3 min-h-[350px]">
              {classes.filter(c => c.day === day).map((slot, idx) => (
                <div key={idx} className="bg-white border-l-4 border-[var(--primary-blue)] p-4 shadow-md hover:shadow-xl transition-all group">
                  <p className="text-[10px] font-black text-[var(--primary-blue)] uppercase mb-1">{formatRange(slot.start24)}</p>
                  <h4 className="text-sm font-black text-[var(--primary-black)] uppercase leading-tight group-hover:text-[var(--primary-blue)] transition-colors">
                    {slot.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-tighter">Coach: {slot.trainer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="lg:hidden space-y-4 mb-6">
        {weekdays.map((day) => (
          <div key={day} className="border-b border-gray-200">
            <button 
              onClick={() => setOpenDay(openDay === day ? null : day)}
              className="w-full py-4 flex justify-between items-center"
            >
              <span className={`text-xl font-black uppercase italic ${openDay === day ? 'text-[var(--primary-blue)]' : 'text-[var(--primary-black)]'}`}>
                {day}
              </span>
              <span className="text-2xl">{openDay === day ? '−' : '+'}</span>
            </button>
            {openDay === day && (
              <div className="pb-4 space-y-3">
                {classes.filter(c => c.day === day).map((slot, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 border-l-4 border-[var(--primary-blue)]">
                    <p className="text-xs font-bold text-[var(--primary-blue)]">{formatRange(slot.start24)}</p>
                    <h4 className="font-black text-[var(--primary-black)] uppercase italic">{slot.name}</h4>
                    <p className="text-xs text-gray-500 uppercase">Trainer: {slot.trainer}</p>
                  </div>
                ))}
                {classes.filter(c => c.day === day).length === 0 && <p className="text-gray-400 italic text-sm">No classes scheduled.</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Workout Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#44444C] p-8 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black italic">WORKOUT</div>
          <h3 className="text-2xl font-black uppercase italic mb-6 text-blue-400 underline decoration-2 underline-offset-8">Daily Routine</h3>
          <ul className="space-y-3 text-sm font-semibold ">
            <li>15 Jumping Jacks</li>
            <li>10 Burpees</li>
            <li>20 Crunches</li>
            <li>10 Front Lunges</li>
            <li>20 Mountain Climbers</li>
            <li>10 Squats</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-[#44444C] p-8 text-[#44444C] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-black italic">RECOVERY</div>
          <h3 className="text-2xl font-black uppercase italic mb-6 underline decoration-2 underline-offset-8">Cool Down</h3>
          <ul className="space-y-3 text-sm font-semibold">
            <li>Reclining Twist (10s/side)</li>
            <li>Lower Back Stretch (30s)</li>
            <li>Child's Pose (30s)</li>
          </ul>
          <div className="mt-8">
            <Button variant="short" text="Book This Session" className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}