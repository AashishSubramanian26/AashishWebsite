export const softwareProjects = {
"MixSpace": {
  projectName: "Spotify MixSpace",
  linkText: "Link",
  link: "https://team-hustle.itch.io/the-shifter", // Replace with actual MixSpace link if available
  role: ["Programmer"],
  genre: ["Music", "Social", "Utility"],
  developmentTools: ["Python", "TypeScript", "Spotify API"],
  keyFeatures: [
    "QR code onboarding",
    "LLM-based song filtering",
    "Real-time playlist updates",
    "Theme-based curation"
  ],
  description:
    "Built in 13 hours during a hackathon with a 6-person team, MixSpace is a community-powered music system designed for shared spaces like gyms and cafes. Users scan a QR code to connect their Spotify account, and MixSpace pulls their top tracks. A host sets a vibe-based theme, and an LLM filters songs by genre, mood, and tempo to generate a dynamic, evolving playlist.",
  tags: ["Spotify API", "Hackathon", "LLM", "Python", "Typescript"],
  cardImgSrc: "/software-projects/MixSpace.png",
  mediaContent: [
    "/software-projects/MixSpace.png",
  ],
  coreMechanicsContent: [
  ],
  summary:
    "MixSpace reimagines music sharing by combining Spotify's API with LLM-driven filtering to create personalized playlists based on collective user data. Designed to improve the shortcomings of Spotify Jam, it focuses on smooth onboarding, smarter filtering, and live updates.",
  designGoals: [
    "Simplify group music sharing in public spaces",
    "Leverage LLMs for vibe-based playlist curation",
    "Minimize user friction through QR code onboarding",
    "Ensure real-time playlist adaptability as users join"
  ],
  coreMechanic: [
    "Built API integration to fetch users’ top Spotify tracks and store them securely",
    "Implemented QR-based user onboarding and session handling",
    "Used an LLM to interpret host prompts and match song moods, genres, and tempo",
    "Synced evolving playlists dynamically based on new user data"
  ],
  whatWentWell: [
    "QR onboarding made user access fast and simple",
    "LLM filtering added creative flexibility to playlist themes",
    "Playlist adjusted in real-time as users joined",
    "Team collaboration was smooth despite the tight timeframe"
  ],
  challenges: [
    "Prompt engineering for consistent LLM outputs",
    "Balancing song diversity with host-defined theme",
    "Spotify API limitations with real-time updates",
    "Debugging user sync issues under a time crunch"
  ],
  lessonsLearned: [
    "LLMs can enhance UX by interpreting abstract user input",
    "Clean user onboarding is critical in public-facing tools",
    "API constraints can shape technical architecture",
    "Hackathon constraints teach rapid prioritization and MVP thinking"
  ]
},

  "CastPoint": {
    projectName: "CastPoint",
    linkText: "Link",
    link: "https://example.com/castpoint", // Replace with actual link if needed
    role: ["Programmer"],
    genre: ["Data Visualization", "Fishing", "Map-based"],
    developmentTools: ["Svelte", "JavaScript"],
    keyFeatures: [
      "Interactive heatmap for fishing spots",
      "Filter by species, bait, and time",
      "Tailored for local freshwater lakes",
      "Hackathon-built prototype"
    ],
    description:
      "Built in under 30 hours for a hackathon, CastPoint is a web app that helps local freshwater fishermen find optimal fishing spots. It uses an interactive heatmap to visualize catch data, enabling users to filter based on species, bait, and time of day. Unlike existing ocean-focused tools, CastPoint is made for lakes and rivers.",
    tags: ["Svelte", "Hackathon", "5-Person Team"],
    cardImgSrc: "/game-dev-projects/CastPointPicture.png",
    mediaContent: ["/game-dev-projects/CastPointPicture.png"],
    coreMechanicsContent: [],
    summary:
      "CastPoint is a user-friendly fishing heatmap built to enhance local angler success through clear, filterable catch data visualizations. Built quickly in a 5-person hackathon team, it aims to make data-driven fishing accessible.",
    designGoals: [
      "Create a visual map-based fishing aid",
      "Offer intuitive filters for catch data",
      "Design for casual freshwater anglers",
      "Build a responsive web-based tool"
    ],
    coreMechanic: [
      "Built core filtering UI using Svelte",
      "Implemented a dynamic heatmap display",
      "Worked with map overlays for catch visuals",
      "Coordinated feature integration across team"
    ],
    whatWentWell: [
      "Heatmap system was easy to use and responsive",
      "Hackathon scope was well-managed",
      "Team collaborated effectively under time crunch",
      "The tool filled a real niche in fishing tech"
    ],
    challenges: [
      "Limited dataset for fishing heatmap",
      "Time constraints limited feature polish",
      "UI clarity needed iteration",
      "First time using Svelte under time pressure"
    ],
    lessonsLearned: [
      "Map-based tools need clear UX",
      "Svelte can be powerful for quick UIs",
      "Hackathons demand realistic scope control",
      "Fast iteration helps refine niche tools"
    ]
  },

  "StopQuest": {
    projectName: "StopQuest",
    linkText: "Link",
    link: "https://example.com/stopquest", // Replace with actual link
    role: ["Programmer"],
    genre: ["Travel", "Scheduling", "Utility"],
    developmentTools: ["React", "MySQL", "Python"],
    keyFeatures: [
      "Custom NYC itinerary planner",
      "User-selected destinations with timing",
      "Optimized stop sequences",
      "Built as course project"
    ],
    description:
      "StopQuest is a travel planning app that helps users create customized NYC itineraries by selecting attractions and receiving optimized schedules. Built using React for the frontend and MySQL + stored procedures for backend logic, it was created as part of my CS411 course.",
    tags: ["React", "MySQL", "Python"],
    cardImgSrc: "/software-projects/AgainSQ.png",
    mediaContent: ["/software-projects/AgainSQ.png"],
    coreMechanicsContent: [],
    summary:
      "StopQuest allows users to generate travel schedules based on preferences like attraction type and availability. It calculates optimized routes and timing using SQL logic and provides a clean React interface for interaction.",
    designGoals: [
      "Enable personalized travel scheduling",
      "Use backend SQL logic for optimization",
      "Create responsive frontend experience",
      "Complete within academic timeline"
    ],
    coreMechanic: [
      "Developed React components for UI and itinerary interaction",
      "Designed complex SQL stored procedures for routing logic",
      "Handled user inputs and preferences storage",
      "Tested end-to-end trip creation flow"
    ],
    whatWentWell: [
      "UI was clean and well received",
      "SQL backend handled complex logic",
      "End-to-end flow was robust",
      "Team completed scope within deadline"
    ],
    challenges: [
      "Backend optimization logic was complex",
      "Connecting front and back cleanly took effort",
      "Limited time for user testing",
      "Data validation needed iteration"
    ],
    lessonsLearned: [
      "Stored procedures can encapsulate powerful logic",
      "Frontend-backend sync is critical",
      "Project scoping is key for semester-long efforts",
      "SQL debugging is a valuable skill"
    ]
  },

  "Soccer-Shootout": {
    projectName: "Soccer Shootout",
    linkText: "Link",
    link: "https://example.com/soccer-shootout", // Replace with actual link
    role: ["Programmer"],
    genre: ["Sports", "Arcade", "Singleplayer"],
    developmentTools: ["EASy68K", "Assembly"],
    keyFeatures: [
      "Physics-based penalty shootout",
      "Random AI defender movement",
      "Simulated ball trajectory using polar math",
      "Ends after 3 misses"
    ],
    description:
      "Built in Assembly during my internship at Iron Galaxy Studios, Soccer Shootout is a penalty kick game simulating realistic physics using polar coordinate math. Players aim and shoot while a defender moves unpredictably to block their shots.",
    tags: ["Assembly", "EASy68k", "Solo Project"],
    cardImgSrc: "/game-dev-projects/SoccerShootout.png",
    mediaContent: ["/game-dev-projects/SoccerShootout.png"],
    coreMechanicsContent: [],
    summary:
      "Soccer Shootout brings sports gaming to EASy68K by modeling ball physics and player input in low-level Assembly. The game tests timing, aim, and persistence in a limited system.",
    designGoals: [
      "Build a sports game in Assembly",
      "Simulate ball physics with polar math",
      "Make gameplay fun despite constraints",
      "Finish during internship timeline"
    ],
    coreMechanic: [
      "Implemented aiming and input system using Assembly",
      "Calculated movement using physics equations",
      "Created random AI behavior logic",
      "Managed game state transitions and scoring"
    ],
    whatWentWell: [
      "Physics calculations worked reliably",
      "Assembly code was clean and stable",
      "Gameplay was fun despite constraints",
      "Project was completed within internship period"
    ],
    challenges: [
      "Learning Assembly for game logic",
      "Debugging without high-level tools",
      "Simulating physics in limited environment",
      "Time constraints during internship"
    ],
    lessonsLearned: [
      "Low-level programming teaches precision",
      "Good math knowledge enables more realistic games",
      "Constraints spark creativity",
      "Even simple games require polish and tuning"
    ]
  }
};
