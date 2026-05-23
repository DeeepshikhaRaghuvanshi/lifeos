import React from 'react';

const CircularProgress = ({ value, label, sublabel, colorClass, strokeClass }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const safeValue = isNaN(value) ? 0 : Math.min(Math.max(value, 0), 100);
  const offset = circumference - (safeValue / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="relative flex items-center justify-center mb-3">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle 
            className="text-slate-100" 
            strokeWidth="8" 
            stroke="currentColor" 
            fill="transparent" 
            r={radius} 
            cx="48" cy="48" 
          />
          <circle 
            className={`transition-all duration-1000 ease-out ${strokeClass}`} 
            strokeWidth="8" 
            strokeDasharray={circumference} 
            strokeDashoffset={offset} 
            strokeLinecap="round" 
            stroke="currentColor" 
            fill="transparent" 
            r={radius} cx="48" cy="48" 
          />
        </svg>
        <span className={`absolute text-xl font-bold ${colorClass}`}>
          {Math.round(safeValue)}%
        </span>
      </div>
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</h3>
      {sublabel && <p className="text-[10px] text-slate-400 mt-1.5 font-medium">{sublabel}</p>}
    </div>
  );
};

export default function ProgressOverview({ weeks, completedItems, streak }) {
  let gtmeTotal = 0;
  let gtmeDone = 0;
  let habitsTotal = 0;
  let habitsDone = 0;

  const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  weeks.forEach(week => {
    DAYS_OF_WEEK.forEach(dayName => {
      // GTME
      const gtmeDay = week.days.find(d => d.day === dayName);
      if (gtmeDay) {
        gtmeDay.instructions.forEach((_, idx) => {
          gtmeTotal++;
          if (completedItems[`w${week.weekNumber}-${dayName}-i${idx}`]) {
            gtmeDone++;
          }
        });
      }

      // Habits
      ['dsa', 'meditation', 'affirmation', 'exercise'].forEach(habit => {
        habitsTotal++;
        if (completedItems[`habit-w${week.weekNumber}-${dayName}-${habit}`]) {
          habitsDone++;
        }
      });
    });
  });

  const gtmeProgress = gtmeTotal > 0 ? (gtmeDone / gtmeTotal) * 100 : 0;
  const habitsProgress = habitsTotal > 0 ? (habitsDone / habitsTotal) * 100 : 0;
  const overallProgress = (gtmeTotal + habitsTotal) > 0 ? ((gtmeDone + habitsDone) / (gtmeTotal + habitsTotal)) * 100 : 0;
  const momentum = streak.current > 0 ? Math.min((streak.current / 7) * 100, 100) : 0; // Relative to a 7-day perfect streak

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <CircularProgress 
        value={momentum} 
        label="Momentum" 
        sublabel={`${streak.current} Day Streak`} 
        colorClass="text-orange-500" 
        strokeClass="text-orange-400" 
      />
      <CircularProgress 
        value={gtmeProgress} 
        label="GTME Path" 
        sublabel={`${gtmeDone}/${gtmeTotal} Tasks`} 
        colorClass="text-indigo-600" 
        strokeClass="text-indigo-500" 
      />
      <CircularProgress 
        value={habitsProgress} 
        label="Daily Habits" 
        sublabel={`${habitsDone}/${habitsTotal} Habits`} 
        colorClass="text-emerald-600" 
        strokeClass="text-emerald-500" 
      />
      <CircularProgress 
        value={overallProgress} 
        label="Phase Progress" 
        sublabel="Overall Completion" 
        colorClass="text-blue-600" 
        strokeClass="text-blue-500" 
      />
    </div>
  );
}
