# LifeOS: The Career Evolution Dashboard 🚀

LifeOS is an advanced, multi-track upskilling dashboard designed to manage complex career transitions. It synchronizes rigorous technical learning paths (GTM Engineering & Software Engineering) with daily discipline and habits into a single, high-performance "Personal Operating System."

## 🌟 Key Features

- **Multi-Track Mastery**: Simultaneous tracking for GTME roadmaps and elite SWE curricula (DSA, System Design, Cloud).
- **High-Density Dashboard**: A grounded, GitHub-inspired "Momentum" heatmap and progress rings to visualize consistency across 28-day cycles.
- **PWA & Mobile-First**: Fully installable on iOS and Android. It feels like a native app with fullscreen standalone mode and offline capabilities.
- **Robust Sync Engine**: Modern Firestore Multi-Tab persistence ensures data entered offline is never lost and syncs automatically upon reconnection.
- **Intelligent Navigation**: Isolated tab memory allows independent month/week tracking for the Dashboard, GTME, SWE, and Habits.
- **Stable Data Foundation**: Content-based semantic IDs protect user progress from curriculum reordering or updates.

## 📱 Mobile Installation

LifeOS is optimized for your smartphone:
- **iOS**: Open the app in **Safari**, tap the **Share** button, and select **"Add to Home Screen"**.
- **Android**: Open the app in **Chrome** and follow the automated **"Add to Home Screen"** prompt.

## 🛠 Tech Stack
*   **Core:** React 19, Vite, React Router
*   **Styling:** Tailwind CSS (8px Spacing System)
*   **Database/Auth:** Firebase Firestore (Multi-Tab Persistence)
*   **PWA:** Service Workers, Web Manifest

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/AbiMangalan/gtme-tracker-app.git
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

## 🏗 Architecture

- `/src/components/Dashboard/`: Grounded analytics widgets (Heatmap, Rings, Pagination).
- `/src/components/Views/`: Dedicated focus areas (SWE Track, Habits Tab).
- `/src/utils/trackMerger.js`: Centralized logic for multi-track synchronization.
- `/src/utils/idGenerator.js`: Semantic hashing for stable progress tracking.
