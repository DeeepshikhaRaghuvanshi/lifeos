
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProgressOverview from './ProgressOverview';
import MonthHeatmap from './MonthHeatmap';
import WeeklyChecklist from './WeeklyChecklist';
import PhaseNavigation from './PhaseNavigation';
import { getCombinedWeeksForPhase } from '../../utils/trackMerger';

export default function DashboardView({ 
  state,
  setState,
  completedItems,
  streak,
  toggleHabit, 
  getDayProgress,
  setSelectedDay 
}) {
  const activePhase = state.phase;
  const activeWeekIndex = state.week;

  const combinedWeeks = getCombinedWeeksForPhase(activePhase);
  const currentWeek = combinedWeeks[activeWeekIndex] || combinedWeeks[0];

  const handlePrevWeek = () => {
    setState({ week: Math.max(0, activeWeekIndex - 1) });
  };

  const handleNextWeek = () => {
    setState({ week: Math.min(combinedWeeks.length - 1, activeWeekIndex + 1) });
  };

  const handlePhaseChange = (newPhase) => {
    setState({ phase: newPhase, week: 0 }); // Reset to first week of the month
  };

  return (
    <div className="space-y-6">
      <PhaseNavigation 
        activePhase={activePhase} 
        setActivePhase={handlePhaseChange} 
      />

      <ProgressOverview 
        combinedWeeks={combinedWeeks} 
        completedItems={completedItems} 
        streak={streak} 
      />

      <MonthHeatmap 
        combinedWeeks={combinedWeeks}
        completedItems={completedItems} 
        getDayProgress={getDayProgress} 
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white p-3 lg:p-4 rounded-xl border border-slate-200 shadow-sm sticky top-[72px] lg:static z-20">
          <h3 className="font-bold text-slate-800 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            Weekly Execution
            <span className="text-[10px] lg:text-xs font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wider w-fit">
              Week {activeWeekIndex + 1} of {combinedWeeks.length}
            </span>
          </h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrevWeek}
              disabled={activeWeekIndex === 0}
              className={`p-2.5 lg:p-2 rounded-lg border transition-all ${activeWeekIndex === 0 ? 'bg-slate-50 text-slate-300 border-slate-100' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'}`}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNextWeek}
              disabled={activeWeekIndex === combinedWeeks.length - 1}
              className={`p-2.5 lg:p-2 rounded-lg border transition-all ${activeWeekIndex === combinedWeeks.length - 1 ? 'bg-slate-50 text-slate-300 border-slate-100' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {currentWeek && (
          <WeeklyChecklist 
            key={`${activePhase}-${activeWeekIndex}`}
            isDashboard={true}
            gtmeWeek={currentWeek.gtme}
            sweWeek={currentWeek.swe}
            completedItems={completedItems}
            toggleHabit={toggleHabit}
            getDayProgress={getDayProgress}
            setSelectedDay={setSelectedDay}
          />
        )}
      </div>
    </div>
  );
}

