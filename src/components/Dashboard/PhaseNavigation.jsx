import { useLocation } from 'react-router-dom';
import { scheduleData } from '../../data/scheduleData';
import { sweData } from '../../data/sweData';

export default function PhaseNavigation({ activePhase, setActivePhase }) {
  const location = useLocation();
  const isGtmePage = location.pathname === '/gtme';
  
  // On GTME page, only show months that have GTME data
  // On Dashboard, show max months across all tracks
  const totalPhases = isGtmePage ? scheduleData.length : Math.max(scheduleData.length, sweData.length);
  
  const phases = [];
  for (let i = 0; i < totalPhases; i++) {
    const title = scheduleData[i]?.phase?.split(':')[0] || sweData[i]?.phase?.split(':')[0] || `Month ${i + 1}`;
    phases.push(title);
  }

  // Safety check: if activePhase is out of bounds for the current view, reset it to the last available month
  if (activePhase >= totalPhases) {
    setActivePhase(totalPhases - 1);
  }

  return (
    <div className="flex space-x-1 bg-slate-200/50 p-1 rounded-lg mb-8 overflow-x-auto print:hidden">
      {phases.map((title, idx) => (
        <button
          key={idx}
          onClick={() => setActivePhase(idx)}
          className={`flex-1 whitespace-nowrap px-4 py-2.5 text-sm font-semibold rounded-md transition-all ${activePhase === idx ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'}`}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
