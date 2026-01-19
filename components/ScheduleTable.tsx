// 'use client';

// import React, { useState } from 'react';

// type ClassData = { name: string; trainer: string; online?: boolean } | null;

// const weekdays = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ] as const;
// const CLASS_DURATION_MIN = 45;

// // Raw data (only what you provided) — times are local to Cardiff (UK)
// const classes = [
//   { day: 'Monday', start24: '18:15', trainer: 'Joe', name: 'Functionally Fit' },
//   {
//     day: 'Wednesday',
//     start24: '06:30',
//     trainer: 'John',
//     name: 'Metcon Circuits (Metabolic Conditioning)',
//     online: true,
//   },
//   {
//     day: 'Saturday',
//     start24: '08:15',
//     trainer: 'John',
//     name: 'Metcon Circuits (Metabolic Conditioning)',
//     online: true,
//   },
//   { day: 'Monday', start24: '18:30', trainer: 'John', name: 'Boxfit' },
//   { day: 'Tuesday', start24: '18:30', trainer: 'Hector', name: 'HIIT Circuits' },
//   { day: 'Thursday', start24: '18:45', trainer: 'Martin', name: 'MRT metcon' },
// ];

// // helper: format a start "HH:MM" into a range string "HH:MM - HH:MM" (duration = CLASS_DURATION_MIN)
// const formatRange = (start24: string) => {
//   const [h, m] = start24.split(':').map(Number);
//   const startMin = h * 60 + (m || 0);
//   const endMin = startMin + CLASS_DURATION_MIN;
//   const pad = (n: number) => String(Math.floor(n)).padStart(2, '0');
//   const sH = pad(h);
//   const sM = pad(m || 0);
//   const eH = pad(Math.floor(endMin / 60));
//   const eM = pad(endMin % 60);
//   return `${sH}:${sM} - ${eH}:${eM}`;
// };

// // unique sorted start times
// const uniqueStarts = Array.from(new Set(classes.map((c) => c.start24))).sort((a, b) => {
//   const an = Number(a.replace(':', ''));
//   const bn = Number(b.replace(':', ''));
//   return an - bn;
// });

// export default function ScheduleTable() {
//   const [openDay, setOpenDay] = useState<string | null>(null);

//   const dailyWorkout = [
//     '15 jumping jacks',
//     '10 burpees',
//     '20 crunches',
//     '10 front lunges',
//     '20 mountain climbers',
//     '10 squats',
//   ];

//   const coolDown = [
//     'Reclining twist - 10 seconds per side',
//     'Lower back stretch - 30 seconds',
//     "Child's pose - 30 seconds",
//   ];

//   return (
//     <section className="mx-6 mb-16 md:mx-10 lg:mx-20">
//       <header className="mb-6 text-center">
//         <p
//           className="mb-2 text-sm font-semibold tracking-wide"
//           style={{ color: 'var(--primary-blue)' }}
//         >
//           OUR GROUP SESSIONS
//         </p>
//         <h2 className="heading text-3xl font-bold md:text-4xl">Training Classes Schedule</h2>
//         <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-500">
//           Our classes are limited to 12 people, last 40–45 minutes, and are adaptable to all levels.
//           Instructors scale intensity so everyone can burn fat and build lean muscle.
//         </p>
//         <p className="mt-2 text-xs text-gray-500">Times shown are local to Cardiff (UK).</p>
//       </header>

//       {/* Desktop table */}
//       <div className="hidden overflow-x-auto rounded-lg shadow-lg lg:block">
//         <table className="w-full min-w-[900px] border border-gray-200 bg-white">
//           <thead className="tbl-header">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs font-semibold">Time</th>
//               {weekdays.map((d) => (
//                 <th key={d} className="px-4 py-3 text-center text-xs font-semibold">
//                   {d}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {uniqueStarts.map((start, idx) => (
//               <tr key={start} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                 <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-700">
//                   {formatRange(start)}
//                 </td>

//                 {weekdays.map((day) => {
//                   const slot = classes.find((c) => c.day === day && c.start24 === start) ?? null;
//                   return (
//                     <td key={day} className="border-l border-gray-100 p-0 align-top">
//                       <div
//                         className={`h-full w-full p-3 text-sm font-medium ${slot ? 'bg-white text-gray-800' : 'bg-white text-gray-400'}`}
//                       >
//                         {slot ? (
//                           <>
//                             <div className="mb-1 text-xs font-bold uppercase">
//                               {slot.name}
//                               {slot.online ? ' · (O)' : ''}
//                             </div>
//                             <div className="text-xs text-gray-600">{slot.trainer}</div>
//                           </>
//                         ) : (
//                           <div className="min-h-[48px]" />
//                         )}
//                       </div>
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile / Tablet: per-day accordion only (no time detection) */}
//       <div className="space-y-4 lg:hidden">
//         {weekdays.map((day) => {
//           const daySlots = classes
//             .filter((c) => c.day === day)
//             .sort(
//               (a, b) => Number(a.start24.replace(':', '')) - Number(b.start24.replace(':', ''))
//             );

//           return (
//             <div key={day} className="rounded-lg border border-gray-200 bg-white shadow-sm">
//               <button
//                 className="flex w-full items-center justify-between px-4 py-3 text-left"
//                 onClick={() => setOpenDay(openDay === day ? null : day)}
//               >
//                 <div>
//                   <div className="text-sm font-semibold">{day}</div>
//                   <div className="text-xs text-gray-500">
//                     {daySlots.length
//                       ? `${daySlots.length} class${daySlots.length > 1 ? 'es' : ''}`
//                       : 'No classes'}
//                   </div>
//                 </div>
//                 <div className="text-xs text-gray-500">{openDay === day ? 'Close' : 'Open'}</div>
//               </button>

//               {openDay === day && (
//                 <div className="px-4 pb-4">
//                   <ul className="mt-3 space-y-3">
//                     {daySlots.map((s) => (
//                       <li key={s.start24} className="rounded-lg bg-gray-50 p-3">
//                         <div className="flex items-center justify-between">
//                           <div className="text-sm font-semibold">
//                             {s.name}
//                             {s.online ? ' · (O)' : ''}
//                           </div>
//                           <div className="text-xs text-gray-700">{formatRange(s.start24)}</div>
//                         </div>
//                         <div className="mt-1 text-xs text-gray-600">{s.trainer}</div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* Daily workout & cool down (improved look) */}
//       <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
//         <div className="workout-card rounded-lg p-4 shadow-sm">
//           <div className="flex items-center justify-between">
//             <h3 className="heading text-lg font-semibold">Daily Workout</h3>
//             <span className="chip">Routine</span>
//           </div>

//           <ol className="mt-4 list-inside list-decimal space-y-2 text-sm text-gray-800">
//             {dailyWorkout.map((it, i) => (
//               <li key={i} className="leading-tight">
//                 {it}
//               </li>
//             ))}
//           </ol>

//           <div className="mt-4 text-xs text-gray-600">
//             All exercises are short; combine them into a circuit and repeat 2–4 times for a quick
//             session.
//           </div>
//         </div>

//         <div className="cooldown-card rounded-lg p-4 shadow-sm">
//           <div className="flex items-center justify-between">
//             <h3 className="heading text-lg font-semibold">Cool Down</h3>
//             <span className="chip">Recovery</span>
//           </div>

//           <ul className="mt-4 space-y-2 text-sm text-gray-800">
//             {coolDown.map((it, i) => (
//               <li key={i} className="leading-tight">
//                 {it}
//               </li>
//             ))}
//           </ul>

//           <div className="mt-4 text-xs text-gray-600">@CARDIFFPTSTUDIO</div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import React, { useState } from 'react';

type ClassData = { name: string; trainer: string; online?: boolean } | null;

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;
const CLASS_DURATION_MIN = 45;

const classes = [
  { day: 'Monday', start24: '18:15', trainer: 'Joe', name: 'Functionally Fit' },
  {
    day: 'Wednesday',
    start24: '06:30',
    trainer: 'John',
    name: 'Metcon Circuits (Metabolic Conditioning)',
    online: true,
  },
  {
    day: 'Saturday',
    start24: '08:15',
    trainer: 'John',
    name: 'Metcon Circuits (Metabolic Conditioning)',
    online: true,
  },
  { day: 'Monday', start24: '18:30', trainer: 'John', name: 'Boxfit' },
  { day: 'Tuesday', start24: '18:30', trainer: 'Hector', name: 'HIIT Circuits' },
  { day: 'Thursday', start24: '18:45', trainer: 'Martin', name: 'MRT metcon' },
];

const formatRange = (start24: string) => {
  const [h, m] = start24.split(':').map(Number);
  const startMin = h * 60 + (m || 0);
  const endMin = startMin + CLASS_DURATION_MIN;
  const pad = (n: number) => String(Math.floor(n)).padStart(2, '0');
  const sH = pad(h);
  const sM = pad(m || 0);
  const eH = pad(Math.floor((endMin / 60) % 24));
  const eM = pad(endMin % 60);
  return `${sH}:${sM} - ${eH}:${eM}`;
};

const classesByDay: Record<string, Array<(typeof classes)[number]>> = {};
weekdays.forEach((d) => (classesByDay[d] = []));
classes.forEach((c) => classesByDay[c.day].push(c));
weekdays.forEach((d) =>
  classesByDay[d].sort(
    (a, b) => Number(a.start24.replace(':', '')) - Number(b.start24.replace(':', ''))
  )
);
const maxRows = Math.max(...weekdays.map((d) => classesByDay[d].length));

export default function ScheduleTable() {
  const [openDay, setOpenDay] = useState<string | null>(null);

  const dailyWorkout = [
    '15 jumping jacks',
    '10 burpees',
    '20 crunches',
    '10 front lunges',
    '20 mountain climbers',
    '10 squats',
  ];

  const coolDown = [
    'Reclining twist - 10 seconds per side',
    'Lower back stretch - 30 seconds',
    "Child's pose - 30 seconds",
  ];

  return (
    <section className="mx-6 mb-16 md:mx-10 lg:mx-20">
      <header className="mb-6 text-center">
        <h2 className="mb-8 text-center text-[40px] leading-none font-extrabold tracking-wide text-[var(--primary-blue)] uppercase select-none sm:text-[48px] md:text-[60px]">
          Training Classes Schedule
        </h2>

        <p className="max-w-2x mx-auto mt-2 text-[var(--primary-black)]">
          Our classes are limited to 12 people, last 40–45 minutes, and are adaptable to all levels.
          Instructors scale intensity so everyone can burn fat and build lean muscle.
        </p>
        <p className="mt-2 text-xs text-gray-500">Times shown are local to Cardiff (UK).</p>
      </header>

      {/* Desktop */}
      <div className="hidden lg:block">
        {/* Outer wrapper draws the border, rounding and shadow so table contents can't overflow it */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-[var(--primary-blue)]">
                {weekdays.map((d) => (
                  <th
                    key={d}
                    className="px-4 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase"
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: Math.max(1, maxRows) }).map((_, rowIdx) => (
                <tr key={rowIdx}>
                  {weekdays.map((day, i) => {
                    const slot = classesByDay[day][rowIdx] ?? null;
                    return (
                      <td
                        key={day}
                        className="p-4 align-top"
                        style={
                          i === 0 ? undefined : { borderLeft: '1px solid var(--primary-light)' }
                        }
                      >
                        {slot ? (
                          /* CARD: column layout so Name -> Trainer -> Time (Time right aligned at bottom) */
                          <div className="flex h-full w-full flex-col justify-between rounded-lg bg-white p-3">
                            <div className="mb-2">
                              <div className="text-sm leading-snug font-bold break-words">
                                {slot.name}
                                {slot.online ? ' · (Online)' : ''}
                              </div>
                              <div className="mt-1 text-xs break-words text-gray-600">
                                {slot.trainer}
                              </div>
                            </div>

                            <div className="mt-3 flex items-center justify-end text-xs font-medium whitespace-nowrap text-gray-500">
                              <span className="inline-block rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs">
                                {formatRange(slot.start24)}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="min-h-[80px]" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile / Tablet: unchanged */}
      <div className="space-y-4 lg:hidden">
        {weekdays.map((day) => {
          const daySlots = classesByDay[day];

          return (
            <div key={day} className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <button
                className="flex w-full items-center justify-between px-4 py-3 text-left"
                onClick={() => setOpenDay(openDay === day ? null : day)}
              >
                <div>
                  <div className="text-sm font-semibold">{day}</div>
                  <div className="text-xs text-gray-500">
                    {daySlots.length
                      ? `${daySlots.length} class${daySlots.length > 1 ? 'es' : ''}`
                      : 'No classes'}
                  </div>
                </div>
                <div className="text-xs text-gray-500">{openDay === day ? 'Close' : 'Open'}</div>
              </button>

              {openDay === day && (
                <div className="px-4 pb-4">
                  <ul className="mt-3 space-y-3">
                    {daySlots.map((s) => (
                      <li key={s.start24} className="rounded-lg bg-gray-50 p-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold">
                            {s.name}
                            {s.online ? ' · (O)' : ''}
                          </div>
                          <div className="text-xs text-gray-700">{formatRange(s.start24)}</div>
                        </div>
                        <div className="mt-1 text-xs text-gray-600">{s.trainer}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Daily workout & cool down */}
      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="rounded-lg bg-[var(--primary-blue)] p-4">
          <div className="flex items-center justify-between text-white">
            <h3 className="heading text-lg font-semibold">Daily Workout</h3>
            <span className="chip">Routine</span>
          </div>

          <ol className="mt-4 list-inside list-decimal space-y-2 text-sm text-white">
            {dailyWorkout.map((it, i) => (
              <li key={i} className="leading-tight">
                {it}
              </li>
            ))}
          </ol>

          <div className="mt-4 text-xs text-gray-300">
            All exercises are short; combine them into a circuit and repeat 2–4 times for a quick
            session.
          </div>
        </div>

        <div className="rounded-lg bg-[var(--primary-blue)] p-4">
          <div className="flex items-center justify-between text-white">
            <h3 className="heading text-lg font-semibold">Cool Down</h3>
            <span className="chip">Recovery</span>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-white">
            {coolDown.map((it, i) => (
              <li key={i} className="leading-tight">
                {it}
              </li>
            ))}
          </ul>

          <div className="mt-4 text-xs text-gray-300">@CARDIFFPTSTUDIO</div>
        </div>
      </div>
    </section>
  );
}
