export const scheduleData = [
  {
    phase: "Month 1: The Clay Ecosystem, Data Enrichment, and Outbound Mechanics",
    weeks: [
      {
        weekNumber: 1,
        title: "Deconstructing the GTM Framework and Clay Architecture",
        days: [
          { 
            day: "Monday", type: "Active Building", task: "Enroll in Clay 101. Watch Intro and First Use Cases (60 mins).", description: "Start Clay 101: GTM Automation. Follow along and build.", 
            instructions: ["Intro to Clay 101: FETE & Jigsaw (10m)", "Your First GTM Use Case (9m)", "How to Experiment Inside of Clay (8m)", "Finding Companies in Clay (7m)", "Finding People in Clay (7m)"], 
            resources: [{title: "Clay 101: GTM Automation Course", url: "https://university.clay.com"}] 
          },
          { 
            day: "Tuesday", type: "Active Building", task: "Continue Clay 101: Enrichment and Claygent (60 mins).", description: "Dive deeper into data enrichment sources.", 
            instructions: ["Finding Jobs Source + Enrichment (5m)", "Finding Businesses with Google Maps (7m)", "(Enrich) Add Data To Your Table (2m)", "Enriching Company Data (8m)", "Enriching People Data (8m)", "Enriching with Claygent (8m)"], 
            resources: [{title: "Functions & FETE Framework", url: "https://university.clay.com"}] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "Finish Clay 101: Transformations & Exports (60 mins).", description: "Learn how to clean data and use AI formulas.", 
            instructions: ["(Transform) Clean & Normalize Your Data (6m)", "Transforming with AI Formulas (7m)", "(Export) Getting Your Lists Out of Clay (review export modules)."], 
            resources: [{title: "Clay Transformations Guide", url: "https://university.clay.com"}] 
          },
          { 
            day: "Thursday", type: "Execution", task: "Movemates Assignment 1 Execution (60 mins).", description: "Setup your Movemates sandbox targeting UK companies.", 
            instructions: ["Build a Clay table targeting UK companies.", "Use formulas and AI to determine triggers that indicate a potential office move: Have they announced an expansion? Has their headcount grown by 20% in the last 6 months?", "Use Claygent to scrape their sites for keywords like 'new office' or 'expanding'.", "Enrich the list to find the 'Facilities Manager' or 'Operations Manager' for these companies."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "Watch Loom teardowns from Ritu Maurya's Starter Kit (30 mins).", description: "Observe how senior operators deconstruct workflows.", 
            instructions: ["Watch Part 1: https://www.loom.com/share/c7616ee7ea3746f084233156b61e943f", "Watch Part 2: https://www.loom.com/share/816c17ea7c2547949fd1b80fd24f298d"], 
            resources: [{title: "Loom Teardown Part 1", url: "https://www.loom.com/share/c7616ee7ea3746f084233156b61e943f"}, {title: "Loom Teardown Part 2", url: "https://www.loom.com/share/816c17ea7c2547949fd1b80fd24f298d"}] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Foundation Models", description: "Focus on your IITJ classes and Databricks Generative AI course.", 
            instructions: ["Study foundation models and basic prompt engineering in Databricks.", "Mentally map how LLMs can be utilized to summarize complex CRM data."] 
          }
        ]
      },
      {
        weekNumber: 2,
        title: "Advanced Outbound Strategy",
        days: [
          { 
            day: "Monday", type: "Theory", task: "Growth Engine X Outbound Cold Email Course (60 mins).", description: "Start the playlist by Eric Nowoslawski.", 
            instructions: ["Go to: https://www.youtube.com/playlist?list=PLR-YIUoB3G0zzR3yIQWvzfNHWmxgQJMDE", "Watch the Intro and the first two strategy videos.", "Focus on understanding Ideal Customer Profiles (ICPs) for B2B services."], 
            resources: [{title: "Growth Engine X Outbound Course", url: "https://www.youtube.com/playlist?list=PLR-YIUoB3G0zzR3yIQWvzfNHWmxgQJMDE"}] 
          },
          { 
            day: "Tuesday", type: "Active Building", task: "Movemates Sandbox: Offer Creation (60 mins).", description: "Define the B2B ICP for Movemates.", 
            instructions: ["Based on Eric's course, define the B2B ICP for Movemates focusing on companies suffering from 'relocation downtime'.", "Draft a theoretical 3-step sequence addressing the stress of office relocation and minimizing disruptions."] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "Movemates Assignment 2 Execution (90 mins).", description: "Use AI to dynamically write cold emails.", 
            instructions: ["Use the data from Week 1 Thursday.", "In Clay, configure the AI node to dynamically write cold emails for Movemates.", "Synthesize the company's recent expansion signal and pitch Movemates' expert dismantling/assembly and secure IT handling as the solution to minimize downtime."] 
          },
          { 
            day: "Thursday", type: "Execution", task: "Finalize Assignment 2 & Record Loom (60 mins).", description: "Build a public portfolio piece.", 
            instructions: ["Record a 3-5 minute Loom video explaining the Movemates architecture, why targeting 'expansion' signals works for commercial movers, and the ROI.", "Publish on LinkedIn and tag KOLs."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "Watch Ritu's Loom Parts 3 & 4 (30 mins).", description: "Continue learning from expert teardowns.", 
            instructions: ["Watch Part 3: https://www.loom.com/share/8720fdcad12047bdb91bc93963b95c21", "Watch Part 4: https://www.loom.com/share/fa366886598b4bafbb3079d199070ef1"], 
            resources: [{title: "Loom Teardown Part 3", url: "https://www.loom.com/share/8720fdcad12047bdb91bc93963b95c21"}, {title: "Loom Teardown Part 4", url: "https://www.loom.com/share/fa366886598b4bafbb3079d199070ef1"}] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Advanced Prompt Design", description: "Integrate Databricks course with GTM context.", 
            instructions: ["Focus on advanced prompt design and few-shot prompting techniques."] 
          }
        ]
      },
      {
        weekNumber: 3,
        title: "n8n Foundations & Visual Orchestration",
        days: [
          { 
            day: "Monday", type: "Theory", task: "n8n Level 1: Beginner Course - Part 1 (60 mins).", description: "Go to docs.n8n.io/courses and start Level 1.", 
            instructions: ["Complete 'Navigating the editor UI'.", "Complete 'Building a mini-workflow'."], 
            resources: [{title: "n8n Academy", url: "https://learn.n8n.io"}] 
          },
          { 
            day: "Tuesday", type: "Active Building", task: "n8n Level 1: Beginner Course - Part 2 (60 mins).", description: "Continue n8n Level 1 with real-world use cases.", 
            instructions: ["Get data from a warehouse.", "Insert data into Airtable.", "Filter orders based on conditions."], 
            resources: [{title: "n8n Level One Introduction", url: "https://docs.n8n.io"}] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "n8n Level 1: Beginner Course - Part 3 (60 mins).", description: "Finish n8n Level 1.", 
            instructions: ["Take the Level 1 'Test your knowledge' quiz."], 
            resources: [{title: "n8n Academy Courses", url: "https://docs.n8n.io"}] 
          },
          { 
            day: "Thursday", type: "Execution", task: "Movemates Sandbox: Custom Webhook Receiver (90 mins).", description: "Capture inbound leads via n8n.", 
            instructions: ["Build a custom Webhook receiver in n8n.", "Imagine this webhook captures lead data from the 'Get a Free Quote' form on movemates.uk.", "Route the incoming name, phone, and moving date to a Google Sheet.", "Set up an automated Slack/email notification to the Movemates team."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "Nick Saraev's n8n Masterclass - First Half (45 mins).", description: "Watch industry-level n8n workflows.", 
            instructions: ["Start the Masterclass: https://youtu.be/2GZ2SNXWK-c?si=OMzVEt4Ziz3S62al", "Watch the first 45 minutes (Foundations & Automation Logic)."], 
            resources: [{title: "N8N FULL COURSE (Nick Saraev)", url: "https://youtu.be/2GZ2SNXWK-c?si=OMzVEt4Ziz3S62al"}] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: RAG Concepts", description: "Study Retrieval-Augmented Generation.", 
            instructions: ["Study Retrieval-Augmented Generation (RAG) concepts for your Databricks Gen AI course."] 
          }
        ]
      },
      {
        weekNumber: 4,
        title: "n8n Intermediate & Agentic Workflows",
        days: [
          { 
            day: "Monday", type: "Theory", task: "n8n Level 2: Intermediate Course - Part 1 (60 mins).", description: "Advance your n8n skills.", 
            instructions: ["Complete 'Understanding the data structure'.", "Complete 'Processing different data types' (focus on XML and binary data)."], 
            resources: [{title: "n8n Academy", url: "https://learn.n8n.io"}] 
          },
          { 
            day: "Tuesday", type: "Active Building", task: "n8n Level 2: Intermediate Course - Part 2 (60 mins).", description: "Continue n8n Level 2.", 
            instructions: ["Complete 'Merging and splitting data'.", "Complete 'Dealing with errors in workflows' (crucial for API rate limiting)."] 
          },
          { 
            day: "Wednesday", type: "Theory", task: "n8n Level 2: Intermediate Course - Part 3 (60 mins).", description: "Finish n8n Level 2.", 
            instructions: ["Complete the 3 business workflows.", "Take the Level 2 knowledge test."] 
          },
          { 
            day: "Thursday", type: "Execution", task: "Movemates Sandbox: Intelligent Email Labeling Agent (90 mins).", description: "Build an AI agent in n8n for the Movemates inbox.", 
            instructions: ["Build an Intelligent Email Labeling Agent in n8n for Movemates' inbox.", "Use an AI Agent Node (connecting to OpenAI/Anthropic) to analyze incoming emails and categorize intent.", "Route 'Office relocation' to a commercial sales sheet, 'House moving' to residential, and filter out spam."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "Nick Saraev's n8n Masterclass - Second Half (45 mins).", description: "Finish the masterclass.", 
            instructions: ["Watch the next 45 minutes of Nick Saraev's n8n Masterclass: https://youtu.be/2GZ2SNXWK-c?si=OMzVEt4Ziz3S62al"], 
            resources: [{title: "N8N FULL COURSE (Nick Saraev)", url: "https://youtu.be/2GZ2SNXWK-c?si=OMzVEt4Ziz3S62al"}] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Vector Databases", description: "Focus on vector databases and embeddings.", 
            instructions: ["Focus on vector databases and embeddings for your Databricks course."] 
          }
        ]
      }
    ]
  },
  {
    phase: "Month 2: Terminal-Based Orchestration and Enterprise Integration",
    weeks: [
      {
        weekNumber: 5,
        title: "Claude Code Basics & Context Engineering",
        days: [
          { 
            day: "Monday", type: "Theory", task: "Install Claude Code & Overview (45 mins).", description: "Set up your terminal environment.", 
            instructions: ["Install Claude Code: `npm install -g @anthropic-ai/claude-code`.", "Watch 'Claude Code Clearly Explained': https://youtu.be/QoQBzR1Nlql?si=4fsyrFwKk3WxbeeF"], 
            resources: [{title: "Claude Code Clearly Explained", url: "https://youtu.be/QoQBzR1Nlql?si=4fsyrFwKk3WxbeeF"}] 
          },
          { 
            day: "Tuesday", type: "Active Building", task: "Master Claude Code & Context Files (45 mins).", description: "Watch Nate Herk's tutorial.", 
            instructions: ["Watch 'Master 95% of Claude Code in 28 Mins': https://www.youtube.com/watch?v=zKBPwDpBfhs.", "Create a local GTM directory specifically for Movemates.", "Write a CLAUDE.md context file detailing Movemates' services (dismantling/assembling, local London moves) and target B2B audience."], 
            resources: [{title: "Master 95% of Claude Code", url: "https://www.youtube.com/watch?v=zKBPwDpBfhs"}] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "Claude Code 6-Step Framework (60 mins).", description: "Build skills via CLI.", 
            instructions: ["Finish Nate Herk's video.", "Follow the 6-step skill-building framework (Name, Trigger, Outcome, Dependencies, Step-by-step, Edge cases)."] 
          },
          { 
            day: "Thursday", type: "Execution", task: "Movemates Sandbox: Python Scraper via Terminal (90 mins).", description: "Execute a scraping task via AI.", 
            instructions: ["Ask Claude Code to write and execute a Python script.", "Take a CSV of 10 London commercial real estate agencies, scrape their website metadata, and save it to a new JSON file to identify potential B2B partners for Movemates."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "Context Engineering Studies (30 mins).", description: "Understand the theoretical shift in AI IDEs.", 
            instructions: ["Read/Listen to tutorials on 'Context Engineering'.", "Understand the difference between CLI interactions and heavy UI platforms."], 
            resources: [{title: "Claude Code for GTM Teams: 30+ Use Cases", url: "https://gtmnow.com"}] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Agentic AI", description: "Study Agentic AI and multi-step reasoning models.", 
            instructions: ["Study Agentic AI and multi-step reasoning models for your Databricks course."] 
          }
        ]
      },
      {
        weekNumber: 6,
        title: "Model Context Protocol (MCP) & CRM Integration",
        days: [
          { 
            day: "Monday", type: "Active Building", task: "Intro to MCP & Brave Search (60 mins).", description: "Give Claude Code web access.", 
            instructions: ["Install the Brave Search MCP server.", "Command Claude Code to perform live web research on 3 London-based tech companies.", "Format the output into a markdown table assessing their likelihood of an office move."], 
            resources: [{title: "Connect Claude Code to tools via MCP", url: "https://code.claude.com"}] 
          },
          { 
            day: "Tuesday", type: "Active Building", task: "CRM Integration via HubSpot MCP (90 mins).", description: "Connect Claude to your CRM.", 
            instructions: ["Set up a free HubSpot developer account.", "Go to Settings -> Integrations -> Private Apps to create a token.", "Set the environment variable and configure the HubSpot MCP for your Movemates workspace."], 
            resources: [{title: "Claude Code + HubSpot: AI-Powered CRM", url: "https://syncgtm.com"}] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "Movemates Sandbox: CRM Hygiene via Claude (60 mins).", description: "Use natural language to clean a database.", 
            instructions: ["Using Claude Code and the HubSpot MCP, prompt it to 'Fetch the 5 most recent commercial leads, standardize their job titles (e.g., mapping Head of Facilities to Operations Manager), and update the CRM records.'"] 
          },
          { 
            day: "Thursday", type: "Execution", task: "Movemates Sandbox: Autonomous Prospecting (60 mins).", description: "Chain MCP tools together.", 
            instructions: ["Command Claude: 'Pull contacts in the Negotiation stage for commercial moves'.", "'Use Brave Search MCP to find recent news about their new office locations'.", "'Draft personalized follow-up emails saved locally.'"] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "GTM Engineer School Podcast (45 mins).", description: "Listen to industry leaders.", 
            instructions: ["Listen to an episode of the GTM Engineer School Podcast by Jared Waxman and Matteo Tittarelli."], 
            resources: [{title: "GTM Engineer School Podcast", url: "https://gtmengineerschool.substack.com"}] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Enterprise Tools", description: "Explore secure external tool access.", 
            instructions: ["Explore how enterprise LLMs securely access external tools and internal data lakes."] 
          }
        ]
      },
      {
        weekNumber: 7,
        title: "Advanced Data Enrichment (Apollo.io & Scraping Hacks)",
        days: [
          { 
            day: "Monday", type: "Theory", task: "Apollo.io Advanced Tutorial - Part 1 (45 mins).", description: "Learn advanced list building.", 
            instructions: ["Watch Jay's Apollo.io Advanced Tutorial: https://www.youtube.com/watch?v=PLFrC2QfnZA (0:00 to 12:30).", "Focus on Account Setup and Advanced Search Filters."], 
            resources: [{title: "Apollo.io Advanced Tutorial", url: "https://www.youtube.com/watch?v=PLFrC2QfnZA"}] 
          },
          { 
            day: "Tuesday", type: "Theory", task: "Apollo.io Advanced Tutorial - Part 2 (45 mins).", description: "Finish the tutorial.", 
            instructions: ["Finish Jay's Apollo tutorial (12:30 to 29:00).", "Focus on Building Targeted Lead Lists and Campaign Automation Features."], 
            resources: [{title: "Apollo.io Advanced Tutorial", url: "https://www.youtube.com/watch?v=PLFrC2QfnZA"}] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "Movemates Sandbox: Integrate Apollo with Clay (60 mins).", description: "Build a multi-provider waterfall.", 
            instructions: ["Export a highly targeted list of 50 'Facilities Managers' or 'Office Managers' in London from Apollo.", "Import into your Movemates Clay table and run a waterfall to verify emails."] 
          },
          { 
            day: "Thursday", type: "Active Building", task: "Movemates Sandbox: Intent-based workflow (60 mins).", description: "Connect n8n, Clay, and HubSpot.", 
            instructions: ["Connect n8n to Clay.", "Trigger the workflow when a target company posts a job for 'Office Coordinator' (a signal they might be expanding).", "Ping Clay to enrich the decision-maker, and push the lead to the Movemates HubSpot CRM."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "LinkedIn Teardowns Review (30 mins).", description: "Study Apollo/Clay workflows.", 
            instructions: ["Review LinkedIn posts from KOLs: Jordan Crawford, Kellen Casebeer, and Tim Yakubson."], 
            resources: [{title: "LinkedIn: Kellen Casebeer", url: "https://linkedin.com"}] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Model Serving", description: "Focus on deployment and scale.", 
            instructions: ["Focus on Model Serving for your Databricks course."] 
          }
        ]
      },
      {
        weekNumber: 8,
        title: "Signal Processing Engine Blueprint",
        days: [
          { 
            day: "Monday", type: "Active Building", task: "Movemates Sandbox: Blueprint signal engine (60 mins).", description: "Design the logic before writing code.", 
            instructions: ["Blueprint a multi-threaded signal processing engine.", "Define 3 specific B2B buying signals for Movemates: 1) New company incorporations or address changes in London via the UK Companies House API. 2) Funding rounds indicating expansion. 3) Job postings for Facilities Managers."] 
          },
          { 
            day: "Tuesday", type: "Active Building", task: "Movemates Sandbox: Python/Scrapy Scraper (90 mins).", description: "Leverage your backend skills.", 
            instructions: ["Use Python/Scrapy (leveraging your existing Datavid experience) to build a small script.", "Scrape a UK job board specifically looking for companies hiring 'Office Relocation Managers' or expanding their London footprint."] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "Connect Scrapy to n8n (60 mins).", description: "Pipe data into your orchestrator.", 
            instructions: ["Connect your Scrapy script to n8n via a webhook.", "Format the incoming JSON payload."] 
          },
          { 
            day: "Thursday", type: "Active Building", task: "Movemates Sandbox: LLM Scoring & Routing (90 mins).", description: "Automate qualification.", 
            instructions: ["Route the n8n payload to an LLM node.", "Prompt the LLM to score the signal based on the Movemates ICP (e.g., High score if they have >50 employees and are located in East London).", "Route high-priority leads to a Slack channel."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "Signal-Based Selling Teardowns (30 mins).", description: "Watch production-level signal routing.", 
            instructions: ["Watch YouTube teardowns of 'Signal-Based Selling'."], 
            resources: [{title: "GTM Engineer School", url: "https://gtm-engineer-school.com"}] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Structured Streaming", description: "Scale up your architecture conceptually.", 
            instructions: ["Study how Databricks handles real-time streaming data."] 
          }
        ]
      }
    ]
  },
  {
    phase: "Month 3: System Architecture, Analytics, and Reverse ETL",
    weeks: [
      {
        weekNumber: 9,
        title: "Revenue Analytics & The Bowtie Model",
        days: [
          { 
            day: "Monday", type: "Theory", task: "HubSpot RevOps Cert: Strategy & Bowtie (60 mins).", description: "Understand the CRM data model.", 
            instructions: ["Enroll in HubSpot Academy's Revenue Operations Certification.", "Complete the 'Implementing a Revenue Operations Strategy' module (44 mins) focusing on the Bowtie data model."], 
            resources: [{title: "RevOps Bootcamp & Certifications", url: "https://academy.hubspot.com"}] 
          },
          { 
            day: "Tuesday", type: "Theory", task: "Funnel Analysis & Data Setup (60 mins).", description: "Prepare your testing environment.", 
            instructions: ["Continue HubSpot RevOps Cert.", "Focus on funnel analysis, mapping lead -> MQL -> SQL -> Closed Won stages."] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "Movemates Sandbox: Python/n8n CAC & LTV Script (90 mins).", description: "Calculate advanced metrics.", 
            instructions: ["Write a Python script orchestrated by n8n.", "Calculate CAC (Customer Acquisition Cost) and LTV (Lifetime Value) metrics comparing Movemates' residential moves versus commercial office relocations using mock CRM data."] 
          },
          { 
            day: "Thursday", type: "Active Building", task: "Movemates Sandbox: Data Standardization (60 mins).", description: "Clean data via terminal.", 
            instructions: ["Build a data standardization workflow in Claude Code.", "Feed it a CSV of messy historical Movemates customer data and use the CLI to standardize company names and format UK phone numbers."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "Finish Nick Saraev Masterclass (45 mins).", description: "Complete the n8n series.", 
            instructions: ["Finish the remainder of Nick Saraev's n8n Masterclass."], 
            resources: [{title: "N8N FULL COURSE 6 HOURS", url: "https://www.youtube.com/results?search_query=N8N+FULL+COURSE+6+HOURS"}] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: AI/BI Genie", description: "Explore natural language analytics.", 
            instructions: ["Explore Databricks AI/BI Genie.", "Understand how GTM teams use natural language to query pipeline metrics."] 
          }
        ]
      },
      {
        weekNumber: 10,
        title: "The Marketing Lakehouse & Reverse ETL",
        days: [
          { 
            day: "Monday", type: "Theory", task: "Study Reverse ETL Concepts (60 mins).", description: "Flip the data pipeline.", 
            instructions: ["Understand how tools like Census or Hightouch extract calculated insights from a data warehouse and push them back into Salesforce/HubSpot."], 
            resources: [{title: "Reverse ETL with Lakebase", url: "https://databricks.com"}] 
          },
          { 
            day: "Tuesday", type: "Theory", task: "Explore Databricks Lakebase (60 mins).", description: "Native reverse ETL solutions.", 
            instructions: ["Explore Databricks Lakebase documentation.", "Understand how gold-layer data is synced directly into operational databases without custom pipelines."], 
            resources: [{title: "Data Intelligence for Marketing", url: "https://databricks.com"}] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "Movemates Sandbox: Map Enterprise Architecture (90 mins).", description: "Design the full stack visually.", 
            instructions: ["Use a diagramming tool to map an enterprise stack for Movemates:", "Website intent (user looking at Long-Distance Moves page) -> Databricks -> Reverse ETL (Lead Score) -> HubSpot -> n8n -> Slack alert to the Movemates sales team."] 
          },
          { 
            day: "Thursday", type: "Active Building", task: "Define Capstone: The Autonomous Pipeline for Movemates (60 mins).", description: "Prepare for final execution.", 
            instructions: ["Define your final project: 'The Autonomous Pipeline for Movemates'.", "Select the exact tools you will use (e.g., Scrapy -> Clay -> Claude Code MCP -> HubSpot)."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "Databricks Marketing Use Cases (30 mins).", description: "See enterprise scale applications.", 
            instructions: ["Review the official Databricks 'Data Intelligence for Marketing' use cases."], 
            resources: [{title: "Data Intelligence in Action Use Cases", url: "https://databricks.com"}] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Predictive Lead Scoring", description: "Build theoretical models.", 
            instructions: ["Apply your Databricks Gen AI knowledge to build a theoretical predictive model that scores leads based on historical conversion data."] 
          }
        ]
      },
      {
        weekNumber: 11,
        title: "Capstone Execution & Testing",
        days: [
          { 
            day: "Monday", type: "Active Building", task: "Movemates Capstone Step 1 & 2 (90 mins).", description: "Start the final build.", 
            instructions: ["Use your Python scraper to ingest a list of 20 London companies exhibiting an 'office expansion' signal (e.g., using UK Companies House or LinkedIn data).", "Import to Clay and build a waterfall to find their Operations Managers."], 
            resources: [{title: "Clay.com Beginner Walkthrough", url: "https://www.youtube.com/results?search_query=Clay.com+Beginner+Walkthrough+2026"}] 
          },
          { 
            day: "Tuesday", type: "Active Building", task: "Movemates Capstone Step 3 (90 mins).", description: "Move data intelligently.", 
            instructions: ["Deploy an n8n workflow to capture the enriched data via webhook and intelligently route the qualified records into your HubSpot developer account."] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "Movemates Capstone Step 4 (90 mins).", description: "Automate outreach context.", 
            instructions: ["Use Claude Code (via terminal with HubSpot MCP).", "Command it to read the newly created records, run a Brave Search on the company's new office location, and generate a hyper-personalized email draft pitching Movemates' secure IT handling and weekend moving services."] 
          },
          { 
            day: "Thursday", type: "Active Building", task: "End-to-End Testing (60 mins).", description: "Fix bugs and ensure stability.", 
            instructions: ["Fix any rate-limiting errors, JSON payload mismatches, or prompt hallucinations.", "Ensure the system runs from start to finish."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "Script Capstone Presentation (30 mins).", description: "Prepare to present your work.", 
            instructions: ["Script your presentation for the Capstone project.", "Structure it like the teardowns you watched in Week 1 (Problem, Architecture, Execution, ROI)."] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Finalize Projects", description: "Wrap up academic requirements.", 
            instructions: ["Finalize any outstanding projects for your Databricks Generative AI course."] 
          }
        ]
      },
      {
        weekNumber: 12,
        title: "Public Portfolio & Strategic Realignment",
        days: [
          { 
            day: "Monday", type: "Active Building", task: "Record Capstone Loom (60 mins).", description: "Document your achievement.", 
            instructions: ["Record your Capstone Loom presentation (5-10 minutes).", "Clearly articulate how your automated pipeline solves the B2B commercial moving lead generation problem for Movemates and quantify the business impact."] 
          },
          { 
            day: "Tuesday", type: "Active Building", task: "Publish and Network (45 mins).", description: "Share your work with the community.", 
            instructions: ["Publish the Loom video on LinkedIn.", "Tag the relevant software companies (Clay, n8n, Anthropic) and KOLs.", "Post it in the official Clay Slack community."] 
          },
          { 
            day: "Wednesday", type: "Active Building", task: "Resume Overhaul (60 mins).", description: "Update professional positioning.", 
            instructions: ["Translate your 'Full Stack Developer' bullets into GTM lexicon.", "Change 'Designed Python (Scrapy) pipelines...' to 'Architected automated data ingestion and enrichment pipelines using Python, eliminating manual prospecting overhead.'", "Highlight Clay, n8n, Claude Code MCPs, Reverse ETL, and Databricks."] 
          },
          { 
            day: "Thursday", type: "Active Building", task: "Job Applications & Cover Letters (60 mins).", description: "Apply your new profile.", 
            instructions: ["Identify and apply to 5 'GTM Engineer', 'Revenue Systems Architect', or 'Growth Engineer' roles.", "Use Claude Code to analyze the job descriptions and tailor your cover letters."] 
          },
          { 
            day: "Friday", type: "Passive Absorption", task: "Celebrate & Review (30 mins).", description: "Acknowledge the effort.", 
            instructions: ["Celebrate the completion of the 12-week intensive.", "Review your metrics and connections made on LinkedIn."] 
          },
          { 
            day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Course Completion", description: "Finish the dual-track.", 
            instructions: ["Complete the Databricks Generative AI course.", "You are now uniquely positioned as a GTM Engineer who understands both front-line revenue automation (Clay/n8n/Claude) and enterprise backend data infrastructure (Databricks Lakehouse)."] 
          }
        ]
      }
    ]
  }
];
