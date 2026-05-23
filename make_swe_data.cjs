const fs = require('fs');

const lectures = [
  "Welcome to the Course! (0:56)",
  "COURSE OVERVIEW LECTURE - PLEASE DO NOT SKIP! (4:17)",
  "Anaconda Python and Jupyter Install and Setup (13:49)",
  "Note on Environment Setup - Please read me! (0:34)",
  "Environment Setup (9:08)",
  "Python Crash Course - Part One (16:07)",
  "Python Crash Course - Part Two (12:07)",
  "Python Crash Course - Part Three (11:19)",
  "Python Crash Course - Exercise Questions (1:29)",
  "Python Crash Course - Exercise Solutions (9:26)",
  "Machine Learning Pathway (10:16)",
  "Introduction to NumPy (2:14)",
  "NumPy Arrays (22:41)",
  "NumPy Indexing and Selection (11:06)",
  "NumPy Operations (8:14)",
  "Numpy Exercises - Solutions (7:05)",
  "Introduction to Pandas (4:40)",
  "Series - Part One (9:28)",
  "Series - Part Two (10:41)",
  "DataFrames - Part One - Creating a DataFrame (19:27)",
  "DataFrames - Part Two - Basic Properties (8:18)",
  "DataFrames - Part Three - Working with Columns (13:57)",
  "DataFrames - Part Four - Working with Rows (14:30)",
  "Pandas - Conditional Filtering (17:41)",
  "Pandas - Useful Methods (13:47)",
  "Pandas - Useful Methods Multiple Columns (17:23)",
  "Pandas - Statistical Info & Sorting (15:48)",
  "Missing Data - Overview (11:58)",
  "Missing Data - Pandas Operations (18:32)",
  "GroupBy Operations - Part One (15:49)",
  "GroupBy Operations - Part Two - MultiIndex (14:18)",
  "Combining DataFrames - Concatenation (10:24)",
  "Combining DataFrames - Inner Merge (12:04)",
  "Combining DataFrames - Left and Right Merge (6:07)",
  "Combining DataFrames - Outer Merge (10:38)",
  "Pandas - Text Methods for String Data (16:05)",
  "Pandas - Time Methods for Date and Time Data (21:00)",
  "Pandas Input and Output (10:20)",
  "Pandas Pivot Tables (21:15)",
  "Pandas Project Exercise (26:31)",
  "Introduction to Matplotlib (4:06)",
  "Matplotlib Basics (12:35)",
  "Matplotlib - Figure Object (7:32)",
  "Matplotlib - Subplots (19:17)",
  "Matplotlib Styling (14:29)",
  "Matplotlib Exercise (16:39)",
  "Introduction to Seaborn (3:54)",
  "Scatterplots with Seaborn (18:19)",
  "Distribution Plots (16:14)",
  "Categorical Plots (17:57)",
  "Seaborn - Comparison Plots (9:47)",
  "Seaborn Grid Plots (13:39)",
  "Seaborn - Matrix Plots (13:18)",
  "Seaborn Plot Exercises (14:33)",
  "Capstone Project Solutions - Part 1 (17:15)",
  "Capstone Project Solutions - Part 2 (14:50)",
  "Capstone Project Solutions - Part 3 (19:49)",
  "Why Machine Learning? (9:15)",
  "Supervised ML Process (13:41)",
  "Linear Regression - Theory (15:43)",
  "Linear Regression - Gradient Descent (11:59)",
  "Python coding Simple Linear Regression (19:37)",
  "Scikit-Learn Train Test Split (15:48)",
  "Scikit-Learn Performance Evaluation (15:44)",
  "Linear Regression - Residual Plots (13:57)",
  "Polynomial Regression - Theory (7:59)",
  "Polynomial Regression - Features (10:54)",
  "Polynomial Regression - Evaluation (9:44)",
  "Bias Variance Trade-Off (10:34)",
  "Regularization Overview (6:39)",
  "Feature Scaling (9:59)",
  "Cross Validation (12:53)",
  "L2 Ridge Regression (14:29)",
  "L1 Lasso Regression (15:01)",
  "Elastic Net (18:07)",
  "Dealing with Outliers (26:33)",
  "Dealing with Missing Data (20:40)",
  "Dealing with Categorical Data (12:46)",
  "Grid Search (12:14)",
  "Logistic Regression - Theory (17:00)",
  "Logistic Regression - Math (15:42)",
  "Classification Metrics - Confusion Matrix (9:45)",
  "Classification Metrics - ROC Curves (7:13)",
  "Multi-Class Classification (15:47)",
  "KNN Classification - Theory (11:18)",
  "KNN Coding with Python (23:25)",
  "SVM - Theory and Intuition (20:50)",
  "SVM with Scikit-Learn (16:02)",
  "Constructing Decision Trees (11:24)",
  "Coding Decision Trees (20:55)",
  "Random Forests - Theory (11:38)",
  "Coding Random Forest Regressor (22:22)",
  "AdaBoost Theory and Intuition (19:51)",
  "Gradient Boosting Coding (12:48)",
  "Naive Bayes Algorithm (17:55)",
  "Natural Language Processing (11:23)",
  "K-Means Clustering Theory (11:30)",
  "K-Means Coding (19:48)",
  "Hierarchical Clustering (16:12)",
  "DBSCAN - Theory and Intuition (17:26)",
  "PCA Theory and Intuition (10:24)",
  "PCA - SciKit-Learn (12:09)",
  "Model Deployment as API (17:00)"
];

const totalWeeks = 12;
const daysPerWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let lectureIdx = 0;
const sweData = [];

for (let month = 0; month < 3; month++) {
  const phaseTitle = month === 0 ? "Month 1: DSA Core & ML Foundation" : 
                     month === 1 ? "Month 2: System Fundamentals & Advanced Models" : 
                                   "Month 3: ML Projects & System Architecture";
  const weeks = [];
  for (let w = 1; w <= 4; w++) {
    const weekNumber = month * 4 + w;
    const weekTitle = `SWE Upskilling Week ${weekNumber}`;
    const days = [];
    
    for (let d = 0; d < 7; d++) {
      const dayName = daysPerWeek[d];
      
      const instructions = [];
      
      // Add general engineering blueprint instructions
      if (weekNumber <= 4 && dayName !== "Sunday") {
         instructions.push("DSA Practice (2 hours): Focus on Arrays, Strings, LinkedList, Stack, Queue. Source: NeetCode 150 / Striver A2Z.");
         if (weekNumber > 1) instructions.push("Revise previous DSA patterns (30 mins).");
      } else if (weekNumber === 5 || weekNumber === 6) {
         if (dayName !== "Sunday") {
             instructions.push("OOP Concepts (1 hour): The Big 4 (Encapsulation, Inheritance, Polymorphism, Abstraction) + SOLID principles.");
             instructions.push("DBMS (1 hour): SQL Queries, Joins, Normalization, ACID properties. Source: Gate Smashers, LeetCode SQL 50.");
         }
      } else if (weekNumber === 7 || weekNumber === 8) {
         if (dayName !== "Sunday") {
             instructions.push("Operating Systems (1 hour): Process vs Thread, CPU Scheduling, Deadlock, Memory Management.");
             instructions.push("Computer Networks (1 hour): OSI vs TCP/IP, DNS, Subnetting, 3-way handshake.");
         }
      } else if (weekNumber >= 9) {
         if (dayName !== "Sunday") {
             instructions.push("Development Projects: Build 3 real projects (CRUD, API integration, Live deployed). E.g., Deploy ML Models on Streamlit/Hugging Face Spaces.");
         }
      }

      // Add ML Course instructions (spread gently across 6 days)
      const instructionsPerDay = dayName === "Sunday" ? 0 : 2; 

      for (let i = 0; i < instructionsPerDay; i++) {
        if (lectureIdx < lectures.length) {
          instructions.push(`Course: Watch/Practice '${lectures[lectureIdx]}'`);
          lectureIdx++;
        }
      }
      
      if (dayName === "Sunday") {
         days.push({
          day: dayName,
          type: "Rest",
          task: "Weekly Revision & Rest",
          description: "Consolidate learning. Read articles on International Opportunities or review your ML roadmap.",
          instructions: ["Revise notes and organize GitHub repository."]
        });
      } else {
        let taskTitle = "";
        if (weekNumber <= 4) taskTitle = "DSA & Python Basics";
        else if (weekNumber <= 6) taskTitle = "OOP, DBMS & ML Path";
        else if (weekNumber <= 8) taskTitle = "OS, CN & Adv ML";
        else taskTitle = "Projects & Deployments";

        days.push({
          day: dayName,
          type: "Coding",
          task: taskTitle,
          description: "Executing the Ultimate Tech Placement Blueprint + ML Masterclass.",
          instructions
        });
      }
    }
    weeks.push({ weekNumber, title: weekTitle, days });
  }
  sweData.push({ phase: phaseTitle, weeks });
}

fs.writeFileSync('src/data/sweData.js', `export const sweData = ${JSON.stringify(sweData, null, 2)};\n`);
