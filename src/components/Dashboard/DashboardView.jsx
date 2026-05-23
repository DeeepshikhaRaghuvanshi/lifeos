import React from 'react';
import ProgressOverview from './ProgressOverview';
import MonthHeatmap from './MonthHeatmap';
import WeeklyChecklist from './WeeklyChecklist';
import { scheduleData } from '../../data/scheduleData';

export default function DashboardView({ 
  activePhase, 
  completedItems,
  streak,
  toggleHabit, 
  getDayProgress,
  setSelectedDay 
}) {
  const currentPhaseData = scheduleData[activePhase];

  return (
    <div className="space-y-6">
      <ProgressOverview 
        weeks={currentPhaseData.weeks} 
        completedItems={completedItems} 
        streak={streak} 
      />

      <MonthHeatmap 
        weeks={currentPhaseData.weeks} 
        completedItems={completedItems} 
        getDayProgress={getDayProgress} 
      />

      <div className="space-y-6">
        {currentPhaseData.weeks.map(week => (
          <WeeklyChecklist 
            key={week.weekNumber}
            week={week}
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
