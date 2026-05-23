import React from 'react';
import ProgressOverview from './ProgressOverview';
import MonthHeatmap from './MonthHeatmap';
import WeeklyChecklist from './WeeklyChecklist';
import { scheduleData } from '../../data/scheduleData';
import { sweData } from '../../data/sweData';

export default function DashboardView({ 
  activePhase, 
  completedItems,
  streak,
  toggleHabit, 
  getDayProgress,
  setSelectedDay 
}) {
  const currentPhaseData = scheduleData[activePhase];
  const swePhaseData = sweData[activePhase];

  return (
    <div className="space-y-6">
      <ProgressOverview 
        weeks={currentPhaseData.weeks} 
        sweWeeks={swePhaseData.weeks}
        completedItems={completedItems} 
        streak={streak} 
      />

      <MonthHeatmap 
        weeks={currentPhaseData.weeks}
        sweWeeks={swePhaseData.weeks}
        completedItems={completedItems} 
        getDayProgress={getDayProgress} 
      />

      <div className="space-y-6">
        {currentPhaseData.weeks.map((week, idx) => (
          <WeeklyChecklist 
            key={week.weekNumber}
            week={week}
            sweWeek={swePhaseData.weeks[idx]}
            completedItems={completedItems}
            toggleHabit={toggleHabit}
            getDayProgress={getDayProgress}
            setSelectedDay={setSelectedDay}
          />
        ))}
      </div>
    </div>
  );
}
