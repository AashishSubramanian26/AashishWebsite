export const gameDevProjects = {
  "frogdoku": {
  projectName: "Frogdoku",
  linkText: "Steam",
  link: "https://store.steampowered.com/app/3720260/Frogdoku/",
  role: ["Lead Game Programmer", "UI/UX Designer", "Team Coordinator"],
  genre: ["Puzzle", "Casual", "Singleplayer"],
  developmentTools: ["Unreal Engine 5", "Blender", "Perforce", "Github"],
  keyFeatures: [
    "Cute frog-themed logic puzzles",
    "Accessible Sudoku-inspired gameplay",
    "Relaxing music & cozy vibes"
  ],
  description:
    "Frogdoku is a cozy, frog-themed puzzle game inspired by Sudoku. Developed by Digital Scorpion Interactive and released on Steam, the game blends charming visuals with approachable, relaxing puzzle mechanics. I contributed across production, gameplay support, and team coordination to help bring the title from prototype to full release.",
  tags: ["Unreal Engine 5", "Steam Release", "Indie Game"],
  cardImgSrc: "/game-dev-projects/Frogdoku/FrogdokuCover.jpg",
  mediaContent: [
    "/game-dev-projects/Frogdoku/FrogdokuCover.jpg",
    "/game-dev-projects/Frogdoku/SpringForwardOfficialTrailerFixed.mp4",
    "/game-dev-projects/Frogdoku/Gameplay1.jpg",
    "/game-dev-projects/Frogdoku/Gameplay2.jpg",
    "/game-dev-projects/Frogdoku/Gameplay3.jpg"
  ],
  coreMechanicsContent: [
    "/game-dev-projects/Frogdoku/MainMenu.png",
    "/game-dev-projects/Frogdoku/Gameplay4.jpg",
    "/game-dev-projects/Frogdoku/Options.png"
  ],
  summary:
    "Frogdoku is a Sudoku-inspired puzzle game where players complete grid -based puzzle while enjoying a relaxing, cozy atmosphere. My role focused on coordinating between programming and art teams, improving communication pipelines, and supporting gameplay polishing efforts leading up to the Steam launch.",
  designGoals: [
    "Create an accessible, relaxing puzzle experience for casual players",
    "Ensure clean visual feedback and satisfying game feel",
    "Deliver a polished release-ready build for Steam"
  ],
  coreMechanic: [
  "Designed and implemented the game's core UI/UX systems, including a fully interactive main menu with animated transitions that bring the world of Frogdoku to life",
  "Developed an in-game dialogue system used to deliver narrative moments and contextual story beats throughout gameplay",
  "Collaborated closely with both art and engineering teams to ensure UI styling, animations, and game logic felt cohesive and polished",
  "Debugged numerous pre-launch and post-launch issues, including UI state bugs, scene transitions, and gameplay inconsistencies that surfaced during Steam release preparation",
  "Improved player experience by refining UX flow, visual clarity, and responsiveness based on feedback from playtests and internal QA sessions"
],

  whatWentWell: [
    "Smooth coordination between art and engineering ensured fast iteration",
    "Puzzle mechanics felt intuitive and well-suited for casual players",
    "Team morale stayed strong due to organized communication structure"
  ],
  challenges: [
  "Major build-breaking issues occurred during the team's transition from Perforce to GitHub, requiring deep investigation into missing references, broken asset paths, and merge conflicts",
  "Fixing UI and gameplay bugs that only appeared in packaged Steam builds, not in-editor, making debugging significantly more complex",
  "Coordinating across a fully remote team working in multiple time zones, which required structuring communication carefully to avoid delays",
  "Ensuring UI design, art style, and gameplay logic remained consistent while multiple contributors edited overlapping systems"
],

 lessonsLearned: [
  "Gained firsthand experience in the realities of indie game development, including rapid iteration, wearing multiple hats, and solving unexpected production challenges",
  "Learned how to act as an effective bridge between art and engineering teams — translating creative goals into technical tasks and vice versa",
  "Developed stronger leadership instincts by helping coordinate responsibilities, unblock teammates, and keep systems aligned across the project",
  "Recognized how critical structured communication is for remote teams, especially when members work in different time zones with varying schedules",
  "Saw the importance of robust version control workflows and the risks associated with engine migrations or repository transitions"
]
},
  "the-shifter": {
    projectName: "The Shifter",
    linkText: "Link",
    link: "https://team-hustle.itch.io/the-shifter",
    role: ["Lead Programmer", "Project Manager"],
    genre: ["Puzzle", "Platformer", "Combat"],
    developmentTools: ["Unreal Engine 5", "Blender"],
    keyFeatures: [
      "Single Player",
      "2D ⇋ 3D Platformer",
      "Platformer Mechanics",
    ],
    description:
      "You are a knight trying to escape a castle and the only way to escape is to find the spells and cast shadow puppets so you can traverse the walls, and solve puzzles to escape the horrid place! The game involves you having to transform between the 3D and 2D world where you are once a knight that can turn into shadow animals.",
    tags: ["Unreal Engine", "Game Jam", "3-Person Team"],
    cardImgSrc: "/game-dev-projects/shifter2.png",
    mediaContent: [
      "/game-dev-projects/shifter.png",
      "/game-dev-projects/TheShifter/Sgif1.gif",
      // "/game-dev-projects/TheShifter/Sgif2.gif",
      "/game-dev-projects/TheShifter/Sgif3.gif",
      // "/game-dev-projects/TheShifter/Sgif7.gif", 
      "/game-dev-projects/TheShifter/Sgif8.gif",
      "/game-dev-projects/TheShifter/Screenshot 2025-06-28 170004.png",
      "/game-dev-projects/TheShifter/Screenshot 2025-06-28 171257.png",
      // "/game-dev-projects/TheShifter/Screenshot 2025-06-28 170625.png",
      "/game-dev-projects/TheShifter/Screenshot 2025-06-28 170642.png"
    ],
    coreMechanicsContent: [
      "/game-dev-projects/TheShifter/Sgif4.gif", 
      // "/game-dev-projects/TheShifter/Sgif5.gif",  
      "/game-dev-projects/TheShifter/Sgif6.gif",
       "/game-dev-projects/TheShifter/Sgif9.gif",
      "/game-dev-projects/TheShifter/Screenshot 2025-06-28 170926.png",
      "/game-dev-projects/TheShifter/Screenshot 2025-06-28 171237.png",
      "/game-dev-projects/TheShifter/Screenshot 2025-06-28 171031.png",
    ],
    summary:
      "Created in just two weeks for the PirateSoftware Game Jam, The Shifter was built around the theme, 'Shadow and Alchemy.' Set in a haunting castle, the game challenges players to escape using shadow puppet magic—transforming into animals on the walls to solve intricate puzzles. Each transformation unlocks new paths, powers, exploration, and creative problem-solving.",
    designGoals: [
      "Support Seamless Transformation Mechanics",
      "Integrate Shadow-Based Mechanics Deeply Into Level Design",
      "Balance Puzzle-Solving with Platforming",
      "Encourage Creative Puzzle-Solving",
    ],
    coreMechanic: [
      "Led a team of three, organizing workflow over a two-week development cycle using Trello to effectively manage tasks and deadlines",
      "Learned and applied Blender to model and texture 3D assets, significantly contributing to the game’s visual depth and immersion",
      "Designed levels and puzzles that highlighted each shadow animal’s unique abilities, ensuring their mechanics were meaningfully integrated into gameplay",
      "Developed and implemented the transformation mechanic across both 2D and 3D spaces, enabling seamless transitions between gameplay modes",
    ],

    whatWentWell: [
      "Smooth transitions between the 3D and 2D worlds using shadow puppetry mechanics",
      "Strong visual integration of art assets that captured the eerie, shadowy castle atmosphere",
      "Effective communication and teamwork among all three members, allowing us to complete the project smoothly within two weeks",
    ],

    challenges: [
      "Performance issues during the build process, including major lag spikes and occasional crashes",
      "Defining a realistic project scope for a team of three within the two-week time constraint",
      "Level designs could have better leveraged each animal’s abilities to create more engaging puzzle scenarios",
    ],

    lessonsLearned: [
      "Improved my skills in Blender to design and integrate art assets into the game",
      "Developed a clearer grasp of the full game development workflow and the importance of documentation",
      "Learned how to manage a small team effectively and maintain steady progress under tight deadlines",
    ],
  },
    "CES2026": {
    projectName: "CES 2026 Experience Simulator",
    linkText: "Link",
    link: "https://www.youtube.com/watch?v=RJpQHG_il-g",
    role: ["Environment Artist", "Game Developer"],
    genre: ["Simulator", "Boating"],
    developmentTools: ["Unreal Engine 5", "Blender", "Perforce"],
    keyFeatures: [
      "Created a realistic boating simulator",
      "Reimaging the CES2025 experience from Brunswick Corporation",
      "Connecting the visual experience to a HMI display"
    ],
    description:
      "As an intern at Brunswick Corporation, I worked on the CES2026 Experience Simulator—a realistic boating simulator built in Unreal Engine 5 for the Consumer Electronics Show (CES), a major annual tech event in Las Vegas. The project connects a detailed 3D environment to a Human-Machine Interface (HMI) display, creating an immersive and interactive boating experience.",
    tags: ["Unreal Engine 5", "Cross-functional teams", "Boating Simulation"],
    cardImgSrc: "/game-dev-projects/CES2026/BigShot.png",
    mediaContent: [
      "/game-dev-projects/CES2026/BigShot.png",
      "/game-dev-projects/CES2026/2025-07-23 15-58-41.mp4",
      "/game-dev-projects/CES2026/Pretty.png",
      "/game-dev-projects/CES2026/Lighthouse.png",
      "/game-dev-projects/CES2026/Ship1.png",
      "/game-dev-projects/CES2026/Pier.png",

    ],
    coreMechanicsContent: [
      "/game-dev-projects/CES2026/HMIShowcase.gif",
      "/game-dev-projects/CES2026/image.png",
      "/game-dev-projects/CES2026/Cave.png",
      "/game-dev-projects/CES2026/Fort.png",
      "/game-dev-projects/CES2026/Coral.png",
      "/game-dev-projects/CES2026/Trees.png"
    ],
    summary:
      "The CES2026 Experience Simulator delivers an immersive and interactive boating experience like never before. Built with Unreal Engine 5, the project demonstrates how cutting-edge environments can seamlessly connect to advanced HMI displays. As users navigate the virtual world, the HMI updates in real time to reflect their location, highlighting nearby landmarks and providing detailed information about each one. This encourages exploration and discovery, offering a compelling vision of the future of boating technology and user interaction.",
    designGoals: [
      "Create a realistic boating experience that showcases advanced HMI technology",
      "Help users who are non-boaters have the opportunity to experience boating in a virtual environment",
      "Upgraded the visual experience from the previous year's CES2025 project by incorporating new features and improvements",
    ],
    coreMechanic: [
    "Used Unreal Engine 5 tools like Landscape and Foliage to redesign the boating simulator into a dynamic, open-ended experience beyond a single guided path",
    "Collaborated with cross-functional teams to meet Brunswick Corporation’s CES2026 goals and showcase expectations",
    "Created and refined 3D assets in Blender to elevate visual quality and environmental realism",
    "Utilized Perforce for version control to ensure smooth asset integration and team-wide collaboration",
    "Connecting the visual experience through a websocket which allowed for real-time updates such as location tracking and landmark information for the HMI display",
    "Setup projectors and screens in our Lab to test out the overall experience and how it would look in preparation for the CES2026 event",
],
    whatWentWell: [
      "Creating a realistic boating simulator that was visually appealing and immersive to explore and navigate",
      "Successfully connecting the visual experience to the HMI display, allowing for real-time updates and information",
      "Communicating effectively across teams to meet project goals and expectations",
      "Led meetings to ensure everyone was on the same page and that the project was progressing smoothly",
    ],
    challenges: [
      "Learning more of the art side of Unreal Engine 5 because it was my first time using them because I have primarily used only the basic features for creating projects, never the art side",
      "Creating these landmarks to be visually appealing that fit into the world that we were creating",
      "Performance issues in the simulator due to the large scale of the environment and the number of assets",
      "Setting up the projectors and screens in our lab to test out the overall experience because the process of blending two different projectors was difficult and took a lot of time to get right",
    ],
    lessonsLearned: [
      "Able to learn more about the art side of Unreal Engine 5 and how to create visually appealing assets for simualtion projects",
      "Understanding the importance of cross-functional collaboration in large projects and how to effectively communicate with team members from different disciplines",
      "The value of iterative design and testing, especially when integrating complex systems",
      "Having a better understanding on how the process of having a project pipeline through the production phase works, especially with a large team",
    ]
  },

  "beetle-bistro": {
    projectName: "Beetle Bistro",
    linkText: "Link",
    link: "https://gamebuilders-studio.itch.io/beetle-bistro",
    role: ["Game Developer"],
    genre: ["Party", "Co-op", "Multiplayer"],
    developmentTools: ["Unity"],
    keyFeatures: [
      "Fast-paced local multiplayer gameplay",
      "Chaotic kitchen coordination inspired by Overcooked",
      "Charming insect-themed art and animations"
    ],
    description:
      "Beetle Bistro is a fast-paced, chaotic kitchen co-op game where players take on the role of tiny insect chefs cooking meals in a bug-sized world. Inspired by Ghost Town Games' *Overcooked*, the game challenges players to collaborate under pressure, prepare dishes, and overcome obstacles in tiny kitchens. Developed by a 21-person student team at ACM GameBuilders at UIUC, the game served as an educational case study to explore team-based development, mechanics replication, and project release strategies.",
    tags: ["co-op", "multiplayer", "21-Person Team", "Overcooked-like"],
    cardImgSrc: "/game-dev-projects/beetle-bistro2.png",
    mediaContent: [
      "/game-dev-projects/BeetleBistro/ZSWJJI.gif",
      "/game-dev-projects/BeetleBistro/KSgsPt.gif",
    ],
    coreMechanicsContent: [
      // "../src/images/game-dev-projects/visiongrunt.mov",
      "/game-dev-projects/BeetleBistro/FzSPpr.gif",
      "/game-dev-projects/BeetleBistro/7pgNE2.png"
    ],
    summary:
      "Beetle Bistro is a cooperative kitchen chaos game where you and your friends play as bug-sized chefs trying to cook and serve meals in tight quarters. The project was created as part of ACM GameBuilders’ second full-scale release and served as a team-based learning experience in Unity development, level design, and multiplayer systems.",
    designGoals: [
      "Recreate the cooperative chaos of Overcooked with original mechanics and style",
      "Explore multiplayer systems in Unity with a team of student developers",
      "Foster learning and collaboration through structured production and scope management"
    ],
    coreMechanic: [
      "Built a grid-based level creation tool to streamline kitchen layout design for rapid iteration",
      "Implemented the player respawn system and handled in-game item interactions like dishwashing and cooking",
      "Contributed to multiplayer functionality, including handling player joining and synchronization",
      "Collaborated with a large team to coordinate asset integration and game state consistency"
    ],
    whatWentWell: [
      "Level design tools improved iteration speed significantly",
      "Multiplayer functionality and respawn systems worked smoothly under pressure"
    ],
    challenges: [
      "As my second Unity project, I was still learning the engine and had to quickly get comfortable with scripting, prefabs, and networking",
      "Coordinating across a large team and maintaining consistent code standards",
      "Balancing the pace of gameplay to feel chaotic yet manageable"
    ],
    lessonsLearned: [
      "Custom tools can greatly accelerate collaborative level design in Unity",
      "Multiplayer development requires constant testing and clear communication",
      "Rapidly picking up a new engine while contributing meaningfully is possible with focused practice and teamwork"
    ]
  },
  "midnight-cram": {
    projectName: "The Midnight Cram",
    linkText: "Link",
    link: "https://aashish-subramanian.itch.io/the-midnight-cram",
    role: ["Programmer"],
    genre: ["Horror", "Action", "Singleplayer"],
    developmentTools: ["Unreal Engine", "Blender"],
    keyFeatures: [
      "Single Player",
      "Horror Atmosphere",
      "Stealth Mechanics",
    ],
    description:
      "A horror game built in Unreal Engine 5 for my CS415 Game Development course. Set in the haunted Grainger Engineering Library, you play as a student trapped in a nightmare, hunted by the menacing Grainger Bob. To escape, you must collect 14 scattered notes and pass your final exam—all while evading Bob’s pursuit using stealth and strategy.",
    tags: ["Unreal Engine", "Blender", "AI"],
    cardImgSrc: "/game-dev-projects/MidnightCram/Cover.png",
    mediaContent: [
      "/game-dev-projects/MidnightCram/Cover.png",
      "/game-dev-projects/MidnightCram/Gif1.gif",
      "/game-dev-projects/MidnightCram/gif2.gif",
      "/game-dev-projects/MidnightCram/Screenshot 2025-06-28 134925.png",
      // "/game-dev-projects/MidnightCram/Screenshot 2025-06-28 140353.png",
      "/game-dev-projects/MidnightCram/Screenshot 2025-06-28 135518.png"
    ],
    coreMechanicsContent: [
      "/game-dev-projects/MidnightCram/gif3.gif",
      "/game-dev-projects/MidnightCram/gif4.gif",
      "/game-dev-projects/MidnightCram/Screenshot 2025-06-28 135014.png",
      "/game-dev-projects/MidnightCram/Screenshot 2025-06-28 135430.png",
      "/game-dev-projects/MidnightCram/Screenshot 2025-06-28 135152.png"
    ],
    summary:
      "The Midnight Cram is a thrilling zombie-themed shooter designed to deliver intense action and horror gameplay. Set in a dark, atmospheric world, players battle hordes of zombies while unraveling a compelling story. The game’s narrative is driven by missions that immerse players in a chilling survival experience. Players must manage resources, fight terrifying enemies, and make decisions that impact the outcome of the story. Developed with Unreal Engine, the game combines intense combat sequences with a rich narrative to create a heart-pounding, story-driven experience that keeps players on the edge of their seats throughout.",
    designGoals: [
      "Create a tense and immersive horror atmosphere.",
      "Deliver high-intensity action gameplay.",
      "Develop a compelling, story-driven experience.",
    ],
    coreMechanic: [
      "Implemented player movement features, including a hiding mechanic that allows the player to take cover under tables to evade the AI enemy",
      "Built an inventory system enabling item usage such as a flashlight, batteries, and energy boosts for sprinting",
      "Designed and built one of the game’s levels, placing assets to craft a tense, immersive horror atmosphere",
      "Debugged issues with the AI pursuer logic to ensure consistent enemy behavior and proper chasing triggers",
    ],
    whatWentWell: [
      "The horror atmosphere was praised for its intensity.",
      "Action gameplay felt exciting and immersive.",
    ],
    challenges: [
      "Maintaining tension while keeping action engaging.",
      "Balancing the horror elements with gameplay progression.",
    ],
    lessonsLearned: [
      "Tension in horror gameplay is essential to player immersion.",
      "Action pacing needs to flow well with horror themes.",
    ],
  },
  // "househould-hustle`": {
  //   projectName: "Household Hustle",
  //   linkText: "Link",
  //   link: "https://aashish-subramanian.itch.io/the-midnight-cram",
  //   role: ["Level Designer", "Artist"],
  //   genre: ["Combat", "Action", "Multiplayer"],
  //   developmentTools: ["Unreal Engine 5", "Blender"],
  //   keyFeatures: [
  //     "Open-world exploration",
  //     "Fantasy-themed environments",
  //     "Multiple quest lines",
  //   ],
  //   description:
  //     "description ecnldcm ldemclekdcm elkdcm elkdcm ledkcm eldkc meldkmc lked clke",
  //   tags: ["fantasy", "rpg", "open-world"],
  //   cardImgSrc: "/game-dev-projects/shifter2.png",
  //   mediaContent: [
  //     "/game-dev-projects/beetle-bistro2.png",
  //     "/game-dev-projects/midnight-cram2.png",
  //   ],
  //   coreMechanicsContent: [
  //     // "../src/images/game-dev-projects/visiongrunt.mov",
  //     "/game-dev-projects/beetle-bistro2.png",
  //     "/game-dev-projects/midnight-cram2.png",
  //     // "../src/images/game-dev-projects/visiongrunt.mov",
  //     "/game-dev-projects/beetle-bistro2.png",
  //     "/game-dev-projects/midnight-cram2.png",
  //     // "../src/images/game-dev-projects/visiongrunt.mov",
  //     "/game-dev-projects/beetle-bistro2.png",
  //     "/game-dev-projects/midnight-cram2.png",
  //     // "../src/images/game-dev-projects/visiongrunt.mov",
  //     "/game-dev-projects/beetle-bistro2.png",
  //     "/game-dev-projects/midnight-cram2.png",
  //   ],
  //   summary:
  //     "Fantasy Quest is an open-world RPG set in a rich fantasy world filled with adventure, exploration, and quests. Players take on the role of a hero embarking on a journey through diverse landscapes, from lush forests to ancient ruins. With multiple quest lines, the game offers varied gameplay experiences, allowing players to choose their path while immersing themselves in the lore and history of the world. The game features a wide range of activities, including combat, puzzle-solving, and interaction with NPCs, creating a dynamic, engaging experience in a detailed, fantasy-driven environment.",
  //   designGoals: [
  //     "Create a vast, open-world environment.",
  //     "Develop a variety of quests for diverse playstyles.",
  //     "Ensure a compelling fantasy setting.",
  //   ],
  //   coreMechanic: [
  //     " ", 
  //     " ", 
  //     " "],
  //   whatWentWell: [
  //     "The world design was vast and engaging.",
  //     "Quest diversity appealed to a wide range of players.",
  //   ],
  //   challenges: [
  //     "Managing the scale of the open world.",
  //     "Ensuring quests felt meaningful within the world.",
  //   ],
  //   lessonsLearned: [
  //     "Open-world games need careful pacing to avoid overwhelming players.",
  //     "Quests should complement the world, not disrupt immersion.",
  //   ],
  // },
  // "ariadnes-blessing": {
  //   projectName: "Ariadne's Blessing",
  //   linkText: "Link",
  //   link: "https://gamebuilders-studio.itch.io/adriadnes-blessing",
  //   role: ["Game Designer", "QA"],
  //   genre: ["Survival", "First-Person", "Horror"],
  //   developmentTools: ["Unity", "Jira"],
  //   keyFeatures: [
  //     "First-person survival horror experience",
  //     "Dynamic enemy encounters with minotaurs",
  //     "God-given powers as unlockable gameplay abilities"
  //   ],
  //   description:
  //     "In this immersive first-person horror game, you step into the shoes of Theseus, trapped in a twisted labyrinth crawling with monstrous minotaurs. With no one ever escaping before, your only hope lies in the blessings of the gods. Prove your courage and make use of divine powers to survive the hunt and find a way out. Developed in Unreal Engine 4, Ariadne's Blessing reimagines the Greek myth as a tense, atmospheric survival experience where combat, exploration, and mythological theming collide.",
  //   tags: ["First-Person", "Horror", "Mythology"],
  //   cardImgSrc: "/game-dev-projects/shifter2.png",
  //   mediaContent: [
  //     "/game-dev-projects/beetle-bistro2.png",
  //     "/game-dev-projects/midnight-cram2.png",
  //   ],
  //   coreMechanicsContent: [
  //     // "../src/images/game-dev-projects/visiongrunt.mov",
  //     "/game-dev-projects/beetle-bistro2.png",
  //     "/game-dev-projects/midnight-cram2.png",
  //     // "../src/images/game-dev-projects/visiongrunt.mov",
  //     "/game-dev-projects/beetle-bistro2.png",
  //     "/game-dev-projects/midnight-cram2.png",
  //     // "../src/images/game-dev-projects/visiongrunt.mov",
  //     "/game-dev-projects/beetle-bistro2.png",
  //     "/game-dev-projects/midnight-cram2.png",
  //     // "../src/images/game-dev-projects/visiongrunt.mov",
  //     "/game-dev-projects/beetle-bistro2.png",
  //     "/game-dev-projects/midnight-cram2.png",
  //   ],
  //   summary:
  //     "Ariadne’s Blessing is a mythologically-inspired horror survival game where you play as Theseus, navigating a deadly labyrinth while being stalked by terrifying minotaurs. With divine boons from the gods on your side, you must overcome traps, collect resources, and survive. Developed in Unreal Engine 4, the game blends atmospheric tension with fast-paced decision-making. This project was a collaborative student effort with a strong focus on design iteration, player feedback, and immersive worldbuilding.",
  //     designGoals: [
  //       "Capture the mythological tone of Greek legends within a horror survival framework",
  //       "Explore how divine power-ups can alter gameplay and offer strategic advantages",
  //       "Use level design to create fear, disorientation, and reward player exploration where each expereince is unique because of the procedural generated maze",
  //     ],
  //     coreMechanic: [
  //       "Designed a wide variety of myth-themed items and abilities tied to different gods",
  //       "Managed QA testing cycles and documented bugs and design inconsistencies during playtesting",
  //       "Contributed to gameplay concepting and feature iteration during early design phases",
  //       "Worked closely with team to refine item balance, usability, and visual presentation"
  //     ],
  //     whatWentWell: [
  //       "Item designs contributed meaningfully to gameplay variety and mythology themes",
  //       "QA testing led to noticeable gameplay improvements over time"
  //     ],
  //     challenges: [
  //       "Faced difficulty in having design ideas acknowledged due to limited team input structure",
  //       "Had to balance coursework with team meetings and design responsibilities during a demanding semester"
  //     ],
  //     lessonsLearned: [
  //       "Design is iterative, and strong communication is just as important as creative contribution",
  //       "It's important to advocate for ideas while also adapting to collaborative constraints",
  //       "Even without programming, design and QA are powerful ways to shape a game’s player experience"
  //     ]
  // },
  "sugar-and-slice": {
    projectName: "Sugar & Slice",
    linkText: "Link",
    link: "https://gamebuilders-studio.itch.io/sugar-n-slice",
    role: ["Game Developer", "Level Designer"],
    genre: ["Roguelike", "Action", "Singleplayer"],
    developmentTools: ["Unity"],
    keyFeatures: [
      "Fast-paced roguelike combat",
      "Dynamic level-based progression",
      "Candy-themed enemies and hazards"
    ],
    description:
      "Sugar & Slice is a short and sweet roguelike where you play as Gremlyn, a notorious Halloween bandit invading the Crypt of Candy to steal sweets from ghosts and monsters. Inspired by *Hades* by Supergiant Games, players hack, slash, and dash through spooky arenas while earning randomized boons that enhance their abilities with each level. The game was developed by a 14-person team at ACM GameBuilders as an educational case study, focusing on mastering design, scope, and team coordination in Unity.",
    tags: ["Roguelike", "Action", "Single-player"],
    cardImgSrc: "/game-dev-projects/Sugar-Slice/SSIcon.png",
    mediaContent: [
      "/game-dev-projects/Sugar-Slice/SSIcon.png",
      "/game-dev-projects/Sugar-Slice/pC2Xyo.gif",
      "/game-dev-projects/Sugar-Slice/Screenshot 2025-06-27 003626.png",
      "/game-dev-projects/Sugar-Slice/WQ3nx2.png",
      "/game-dev-projects/Sugar-Slice/6PZX+P.png"
    ],
    coreMechanicsContent: [
      // "../src/images/game-dev-projects/visiongrunt.mov",
      "/game-dev-projects/Sugar-Slice/Screenshot 2025-06-27 003626.png",
      "/game-dev-projects/Sugar-Slice/cENfNi.png",
      "/game-dev-projects/Sugar-Slice/E9O8mg.png",
      "/game-dev-projects/Sugar-Slice/Screenshot 2025-06-27 235329.png"
    ],
    summary:
      "Sugar & Slice is a Halloween-themed roguelike action game where you fight ghosts and monsters to steal candy and power up. Developed by a team of 14 at ACM GameBuilders, this was the studio's first full project release, modeled as a learning experience in Unity development. The game explores procedural combat progression, level-based upgrades, and stylish enemy design, all wrapped in a sugary, spooky aesthetic.",
    designGoals: [
      "Replicate the core gameplay loop of Hades while creating original combat and charm",
      "Design varied levels that reward fast-paced and reactive gameplay",
      "Encourage team members to explore new roles and engine features through hands-on contributions"
    ],
    coreMechanic: [
      "Designed combat arenas and environmental layouts with hazards like spike traps and breakable barrels",
      "Created and implemented boon reward systems to enhance player abilities after each level",
      "Integrated audio for core combat actions to boost game feel and moment-to-moment immersion",
      "Collaborated on enemy encounter flow and player progression pacing throughout the crypt levels"
    ],
    whatWentWell: [
      "Boons added variety and strategic choices to each run",
      "Environmental hazards added excitement and replay value",
      "Audio feedback enhanced combat immersion and player engagement"
    ],
    challenges: [
      "As my first Unity project, I had to quickly learn the engine and its systems while contributing actively",
      "Balancing audio timing and feedback with gameplay responsiveness took multiple iteration cycles"
    ],
    lessonsLearned: [
      "Designing levels in Unity requires both aesthetic consideration and clear navigation logic",
      "Audio implementation greatly affects how satisfying a game feels",
      "Jumping into a new engine is tough—but hands-on experience is the fastest way to learn"
    ]
  },
  "VRchaeology": {
    projectName: "VRchaeology",
    linkText: "Link",
    link: "https://games.illinois.edu/Ongoing-Projects.html",
    role: ["Game Programmer"],
    genre: ["Educational", "Exploration", "Training"],
    developmentTools: ["Virtual Reality (Meta Quest)", "Unreal Engine", "Jira"],
    keyFeatures: [
      "Immersive VR-based archaeology simulation",
      "Hands-on excavation and artifact discovery",
      "Authentic field techniques adapted for the classroom",
    ],
    description:
      "VRchaeology revolutionizes archaeological education by simulating real-world field techniques in an immersive virtual reality setting. Designed for classroom use, the experience allows students to explore dig sites, uncover artifacts, and learn archaeological methodology—without ever leaving their desks. Built in Unreal Engine for VR, the project redefines hands-on learning for the field sciences.",
    tags: ["VR", "Simulation", "Educational"],
    cardImgSrc: "/game-dev-projects/VRArch/NewCover1.png",
    mediaContent: [
      "/game-dev-projects/VRArch/NewCover1.png",
      "/game-dev-projects/VRArch/Moonshine.png",
      "/game-dev-projects/VRArch/Waterfall.png",
      "/game-dev-projects/VRArch/Chalkboard.png"
    ],
    coreMechanicsContent: [
      "/game-dev-projects/VRArch/Bucket.png",
      "/game-dev-projects/VRArch/Flags.png",
      "/game-dev-projects/VRArch/Lab5.png"
    ],
    summary:
      "VRchaeology is a VR educational simulation that brings archaeology into the classroom. Students virtually participate in fieldwork activities—digging, discovering, and documenting artifacts—while learning core archaeological methods in an interactive, immersive environment. Built in Unreal Engine with VR support, this project makes field sciences accessible to all learners.",
    designGoals: [
      "Make real-world field techniques accessible through VR.",
      "Ensure educational content is engaging and intuitive for studentd without VR experience.",
      "Support classroom use with meaningful interactivity and feedback.",
    ],
    coreMechanic: [
    "Implemented core VR interaction systems using Unreal Engine Blueprints",
    "Developed artifact excavation and inspection mechanics with intuitive user feedback",
    "Led classroom playtesting sessions to evaluate usability and learning outcomes",
    "Analyzed student and instructor feedback to identify pain points and UX issues",
    "Prioritized and implemented gameplay changes, refining mechanics based on real user input",
    "Resolved interaction bugs and fine-tuned controls to ensure a smooth VR experience"
    ],
    whatWentWell: [
      "Feedback loop from playtesting helped improve UX flow.",
      "VR immersion successfully simulated real-world fieldwork.",
    ],
    challenges: [
      "Learning VR development for the first time and adapting to new workflows.",
      "Balancing educational accuracy with engaging gameplay.",
      "Internal team communication to ensure everyone was on the same page.",
    ],
    lessonsLearned: [
      "VR design principles differ greatly from traditional game development.",
      "Iterative playtesting is crucial when designing for classroom environments.",
      "Small fixes in VR can significantly impact player comfort and usability."
    ],
  },
  "wide-asleep": {
    projectName: "Wide Asleep",
    linkText: "Link",
    link: "https://games.illinois.edu/Ongoing-Projects.html",
    role: ["Game Programmer", "Project Manager"],
    genre: ["Survival", "Horror", "Singleplayer"],
    developmentTools: ["Unreal Engine", "Jira"],
    keyFeatures: [
      "Exploration and puzzle-solving",
      "Horror atmosphere",
      "Engaging narrative",
    ],
    description:
      "Trapped in a coma after a tragic car crash, a young girl must navigate a nightmarish dreamscape shaped by guilt, fear, and fractured memories. With her senses dulled and her body weak, she’s hunted by monstrous reflections of her own family—twisted versions born from her inner turmoil. As she clings to survival, she'll confront the truth she’s buried deep inside: maybe they didn’t hate her after all.",
    tags: ["5-Person Team", "Psychological Horror", "Single-Player"],
    cardImgSrc: "/game-dev-projects/WideAsleep/Cover.png",
    mediaContent: [
      "/game-dev-projects/WideAsleep/Screenshot 2026-01-09 014205.png",
      "/game-dev-projects/WideAsleep/Screenshot 2026-01-09 014411.png",
      "/game-dev-projects/WideAsleep/Screenshot 2026-01-09 014455.png"
    ],
    coreMechanicsContent: [
      "/game-dev-projects/WideAsleep/TaskSchedule.png",
      "/game-dev-projects/WideAsleep/Timeline.png",
      "/game-dev-projects/WideAsleep/Screenshot 2026-01-09 022556.png"

    ],
    summary:
      "Wide Asleep is a narrative-focused horror game developed as part of a UIUC course designed to introduce students to the full game development pipeline. Rather than aiming for a polished, full-scale game, the goal of the project was to practice key industry skills such as writing design documentation, managing development timelines, scoping effectively, and collaborating within a team. The game explores a girl’s emotional journey through a coma-induced nightmare, blending psychological horror with exploration and light puzzle-solving.",
    designGoals: [
      "Understand and apply the complete game development process from concept to prototype",
      "Write and maintain documentation that communicates vision and scope to a team",
      "Experience timeline and task tracking in a team setting with changing circumstances",
      "Deliver a playable prototype that communicates narrative and mechanical intent"
    ],
    coreMechanic: [
      "Developed core gameplay systems including inventory, hotbar UI, and usable item functionality",
      "Implemented character movement, control logic, and key level design features",
      "Supported team onboarding by creating practice tasks and guiding members new to Unreal Engine",
      "Adapted project scope and redistributed tasks to ensure a playable build under tight constraints"
    ],
    whatWentWell: [
      "Successfully created an emotional narrative atmosphere tied to gameplay",
      "UI systems like hotbar and inventory were clean, functional, and immersive"
    ],
    challenges: [
      "Creating a functional prototype despite major scope reductions and unresponsive team members",
      "Training team members who were new to Unreal while managing development on a tight timeline"
    ],
    lessonsLearned: [
      "Effective documentation and scope planning are as critical as coding in game development",
      "Adapting quickly to team constraints and reassigning tasks is crucial to project survival",
      "Teaching tools and processes to teammates helps ensure broader project success"
    ]
  },
};
