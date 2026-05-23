# GTME & SWE Upskilling Tracker 🚀

A modern, high-performance React application designed to manage and visualize a rigorous 12-week dual-track learning architecture. It simultaneously tracks a Go-To-Market (GTME) roadmap alongside an advanced Software Engineering (SWE) & Machine Learning framework.

## 🌟 Key Features

### 1. Dual-Track Curriculum Management
- **GTME Track:** Monitors daily progress across the Go-To-Market and Clay Architecture frameworks.
- **SWE Upskilling Track:** Granular daily tracking for a 12-week elite tech placement blueprint, integrating the "Big 6" CS fundamentals (DSA, OOP, DBMS, OS, CN, Dev) with advanced Machine Learning.

### 2. Advanced Data Visualization
- **GitHub-Style Heatmap:** A visual array of monthly progress tracking both habits and technical paths in real-time.
- **Apple-Inspired Progress Rings:** Beautiful circular progress indicators showing overall completion rates for GTME and SWE.
- **Streak Logic Engine:** Mathematical daily streak calculation with a graceful "1-day freeze buffer" to prevent psychological burnout.

### 3. Granular Execution Interface
- **Interactive Weekly Grid:** Expandable day components that track 'Completed' vs 'Pending' statuses.
- **Detailed Modals:** Click into any day to see exactly what to execute (e.g., specific LeetCode problem strings, Udemy course timestamps, or Sunday Buffer protocols).
- **Secondary Habits:** Native checkboxes for Meditation, Affirmations, and Physical Exercise tightly linked to the daily streak output.

### 4. Hybrid State Syncing
- **Firebase Firestore:** Live cloud syncing tied to user authentication.
- **Local Storage Fallback:** Gracefully degrades into offline mode without disrupting the user experience or progress state.

## 🛠 Tech Stack
*   **Core:** React 19, Vite
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide-React
*   **Database/Auth:** Firebase

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/gtme-tracker-app.git
   cd gtme-tracker-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Building for Production:
   ```bash
   npm run build
   ```

## 🏗 Architecture & Data

- `/src/components/Dashboard/`: Contains the visual progress trackers (Heatmaps, Rings, Checklist).
- `/src/components/Modals/`: Handles the pop-up granular execution interfaces.
- `/src/data/scheduleData.js`: The underlying payload configuring GTME tracking arrays.
- `/src/data/sweData.js`: Programmatically generated 12-week syllabus JSON governing the SWE framework.
- `/src/hooks/useProgressTracker.js`: The central math engine evaluating checkmarks and calculating global streaks and completion percentages.

