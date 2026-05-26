import { useLocation } from 'react-router-dom';
import { scheduleData } from '../../data/scheduleData';
import { sweData } from '../../data/sweData';

export default function PhaseNavigation({ activePhase, setActivePhase }) {
  const location = useLocation();
  const path = location.pathname;
  
  const totalMonths = Math.max(scheduleData.length, sweData.length);
  const phases = [];

  for (let i = 0; i < totalMonths; i++) {
    const hasGtme = scheduleData[i] && scheduleData[i].weeks.length > 0;
    const hasSwe = sweData[i] && sweData[i].weeks.length > 0;

    let shouldShow = false;
    if (path === '/') shouldShow = hasGtme || hasSwe; // Dashboard shows all
    else if (path === '/gtme') shouldShow = hasGtme;
    else if (path === '/swe') shouldShow = hasSwe;
    else if (path === '/habits') shouldShow = hasGtme || hasSwe; // Habits follows all weeks

    if (shouldShow) {
      const title = (scheduleData[i]?.phase || sweData[i]?.phase || `Month ${i + 1}`).split(':')[0];
      phases.push({ id: i, title });
    }
  }

  return (
    <div className="flex space-x-1 bg-slate-200/50 p-1 rounded-lg mb-8 overflow-x-auto print:hidden no-scrollbar">
      {phases.map((phase) => (
        <button
          key={phase.id}
          onClick={() => setActivePhase(phase.id)}
          className={`flex-1 whitespace-nowrap px-4 py-3 lg:py-2.5 text-xs lg:text-sm font-semibold rounded-md transition-all ${activePhase === phase.id ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'}`}
        >
          {phase.title}
        </button>
      ))}
    </div>
  );
}
