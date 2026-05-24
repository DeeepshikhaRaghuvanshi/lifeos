const fs = require('fs');

let content = fs.readFileSync('swe-plan.md', 'utf8');

// The new plan has similar structure "Week 1:", "Day 1:"
content = content.replace(/(Week \d+: )/g, '\n$1');
content = content.replace(/(Day \d+: )/g, '\n$1');

const lines = content.split('\n');
const weeksData = [];
let currentWeek = null;

const regexWeek = /^Week (\d+):\s*(.*)/;
const regexDay = /^Day (\d+):\s*(.*)/;

for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    
    const weekMatch = line.match(regexWeek);
    if (weekMatch) {
        let originalWeekNum = parseInt(weekMatch[1]);
        currentWeek = {
            weekNumber: originalWeekNum + 4, // Offset by 4 weeks
            title: `SWE Week ${originalWeekNum}: ${weekMatch[2]}`,
            days: []
        };
        weeksData.push(currentWeek);
        continue;
    }
    
    if (currentWeek) {
        const dayMatch = line.match(regexDay);
        if (dayMatch) {
            const dayNum = parseInt(dayMatch[1]);
            const dayText = dayMatch[2];
            const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            const dayName = daysOfWeek[dayNum - 1];
            
            let isRest = dayNum === 7;
            let sentences = dayText.split(/\.(?=\s[A-Z])/).map(s => s.trim() + (s.endsWith('.') ? '' : '.'));
            
            currentWeek.days.push({
                day: dayName,
                type: isRest ? "Revision" : "Execution",
                task: isRest ? "Mandatory Buffer Protocol" : "Granular Execution",
                description: sentences.join(' '),
                instructions: sentences
            });
        }
    }
}

const phases = [
  { phase: "Month 1: General GTME Foundations", weeks: [] }, // No SWE track here
  { phase: "Month 2: Core Data Structures & System Fundamentals", weeks: [] },
  { phase: "Month 3: Advanced Trees, Heaps, Sorting, & Searching", weeks: [] },
  { phase: "Month 4: Advanced Algorithms, DP, & System Design", weeks: [] }
];

weeksData.forEach(w => {
   if (w.weekNumber <= 8) phases[1].weeks.push(w);
   else if (w.weekNumber <= 12) phases[2].weeks.push(w);
   else phases[3].weeks.push(w);
});

fs.writeFileSync('src/data/sweData.js', `export const sweData = ${JSON.stringify(phases, null, 2)};\n`);
console.log(`Parsed ${weeksData.length} weeks (offset to weeks 5-16)`);
