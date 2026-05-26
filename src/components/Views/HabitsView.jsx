import { Calendar } from 'lucide-react';
import PhaseNavigation from '../Dashboard/PhaseNavigation';
import { getAllCombinedWeeks } from '../../utils/trackMerger';
import { generateHabitId } from '../../utils/idGenerator';

const EXTRA_HABITS = [
  { id: 'meditation', label: 'Meditation', icon: '🧘' },
  { id: 'affirmation', label: 'Affirmation', icon: '✨' },
  { id: 'exercise', label: 'Exercise', icon: '🏃' }
];

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function HabitsView({ state, setState, completedItems, toggleHabit }) {
  const activePhase = state.phase;
  
  const setActivePhase = (newPhase) => {
    setState({ phase: newPhase });
  };
  
  // Filter weeks for the active phase
  const allWeeks = getAllCombinedWeeks();
  const phaseWeeks = allWeeks.filter(w => {
    const weekNum = w.gtme?.weekNumber || w.swe?.weekNumber;
    return Math.ceil(weekNum / 4) === (activePhase + 1);
  });

  return (
    <div className="space-y-6">
      <PhaseNavigation 
        activePhase={activePhase} 
        setActivePhase={setActivePhase} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {phaseWeeks.map((week) => {
          const weekNumber = week.gtme?.weekNumber || week.swe?.weekNumber;

          return (
            <div key={weekNumber} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 px-5 py-4">
                <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                  <Calendar size={16} className="text-indigo-400" />
                  Week {weekNumber}
                </h3>
              </div>

              <div className="p-3 lg:p-4">
                <div className="space-y-2">
                  {DAYS_OF_WEEK.map((dayName) => (
                    <div key={dayName} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 bg-slate-50/50 rounded-xl group hover:bg-white border border-transparent hover:border-indigo-100 transition-all">
                      <div className="w-full sm:w-24 border-b sm:border-b-0 sm:border-r border-slate-100 pb-2 sm:pb-0">
                        <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{dayName}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 w-full justify-start sm:justify-center lg:justify-end">
                        {EXTRA_HABITS.map((habit) => {
                          const id = generateHabitId(weekNumber, dayName, habit.id);
                          const isCompleted = !!completedItems[id];

                          return (
                            <button 
                              key={habit.id}
                              onClick={() => toggleHabit(weekNumber, dayName, habit.id)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all flex-1 sm:flex-none justify-center sm:min-w-[80px]
                                ${isCompleted 
                                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm' 
                                  : 'bg-white border-slate-100 text-slate-400 hover:border-indigo-200 hover:text-indigo-600 shadow-sm'
                                }`}
                            >
                              <span className={`text-base transition-transform ${isCompleted ? 'scale-110' : 'grayscale opacity-50'}`}>
                                {habit.icon}
                              </span>
                              <span className={`text-[10px] font-bold uppercase tracking-tight ${isCompleted ? 'text-emerald-600' : 'text-slate-500'}`}>
                                {habit.id}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
