import { 
  Circle, 
  BookOpen, 
  Wrench, 
  Play, 
  Share2, 
  GraduationCap, 
  Headphones,
  Database,
  BrainCircuit
} from 'lucide-react';

export const getTypeStyles = (type) => {
  switch (type) {
    // Original GTME Labels
    case 'Active': return { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', icon: <Wrench size={16} /> };
    case 'Theory': return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: <BookOpen size={16} /> };
    case 'Passive': return { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', icon: <Headphones size={16} /> };
    case 'Databricks Integration': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', icon: <Database size={16} /> };
    
    // Dashboard / Mixed Labels
    case 'Active Building': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', icon: <Wrench size={16} /> };
    case 'Execution': return { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: <Play size={16} /> };
    case 'Public Build': return { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', icon: <Share2 size={16} /> };
    case 'Academic Focus': return { bg: 'bg-slate-100', border: 'border-slate-200', text: 'text-slate-500', icon: <GraduationCap size={16} /> };
    case 'Revision': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', icon: <BrainCircuit size={16} /> };
    
    default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', icon: <Circle size={16} /> };
  }
};

export const renderTextWithLinks = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) => {
    if (part.match(urlRegex)) {
      return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 underline break-all">{part}</a>;
    }
    return part;
  });
};
