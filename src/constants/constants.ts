export const resources = [
    "Home",
    "About",
    "Contact",
    "Education",
    "Technologies",
    "Projects",
    "Experiences",
];

/**
 * Defining the json data for my projects here.
 * Required fields:
 * - title: The title of the project.
 * - description: A short description of the project.
 * - imageUrl: The URL of the image to be displayed on the card.
 * - slug: The slug for the project, used for routing.
 * - motivation: The motivation behind the project.
 * - features: A list of features of the project.
 * - technologies: A list of technologies used in the project.
 * - links: A list of links related to the project.
 * - challenges: A list of challenges faced during the project.
 * - lessons: A list of lessons learned during the project.
 */
export const projects = [
    {
        title: "Monster Hunter Wilds Wiki",
        description: "A web application that display Monster Hunter Wilds Data in a user friendly manner. The Wiki supports upwards of 10 languages and will continually receive support until the final title update.",
        imageUrl: "/portfolio/CardImages/monsterHunterWildsWiki.png",
        slug: "monster-hunter-wilds-wiki",
        motivation: "The motivation behind this project was to create a user-friendly platform for Monster Hunter Wilds players to access and information about the game. As many players have been saying, the UI/UX of Monster Hunter Wilds is sub-par for their standards including mine. As such, the goal was to build a comprehensive wiki that would serve as a one-stop resource for players looking for Monster HP Values, Weapon Damage Values, Crafting, Items, Crown Sizes and much more all without having to enter the game itself.",
        features: [
            "Search Functionality",
            "Sidebar Navigation",
            "Support for Multiple Languages",
            "Responsive Design for Desktop and Mobile Screens",
            "Light and Dark Mode",
            "Ease of Use",
        ],
        technologies: [
            "NextJS",
            "ReactJS",
            "Tailwind CSS",
            "TypeScript",
            "Git",
        ],
        links: {
            github: "https://github.com/TimmyTram/mh-wilds-fe",
            live: "https://mh-wilds-fe.vercel.app/",
        },
        challenges: [
            "Implementing a debounced search functionality to reduce API calls.",
            "Ensuring the website is responsive and works well on all devices.",
            "Handling multiple languages returned from the API.",
            "Creating a user-friendly interface that is easy to navigate.",
        ],
        lessons: [
            "Improved skills in responsive design and user experience.",
            "Learned how to handle multiple languages returned from an API.",
            "Learned how to implement light and dark mode in a web application.",
            "Learned how to use MongoDB Projection to reduce the size of the data returned from the API.",
            "Learned how to read and use other people's API documentation.",
        ],
    },
    {
        title: "Tokei",
        description: "A full-stack application that allows users to get the latest new and updates on their favorite anime and manga.",
        imageUrl: "/portfolio/CardImages/tokei.png",
        slug: "tokei",
        motivation: "Tokei was created to provide anime and manga enthusiasts with a platform to stay updated on the latest news and releases. The motivation behind this project was to create a user-friendly interface that allows users to easily access information about their favorite shows and comics.",
        features: [
            "User Authentication and Authorization",
            "Search and Filter Functionality",
            "User Reviews",
            "Responsive Design",
            "Admin Controls",
        ],
        technologies: [
            "NextJS",
            "ReactJS",
            "Tailwind CSS",
            "MongoDB",
            "TypeScript",
            "Git",
        ],
        links: {
            github: "https://github.com/TimmyTram/Tokei",
            live: "https://anime-ratings.vercel.app/",
            youtube: "https://www.youtube.com/watch?v=NemmfHUnXUs",
        },
        challenges: [
            "Debouncing Search Functionality to reduce API Calls.",
            "Ensuring responsive design across various devices.",
            "Implementing Pagination for large datasets.",
        ],
        lessons: [
            "Gained more experience with pagination on the backend.",
            "Learned how to create responsive frontend designs.",
            "Learned how to debounce to improve performace.",
            "Learned how to handle pagination on the frontend.",
        ],
    },
    {
        title: "Coffee Spot",
        description: "A full-stack application targeting young college students or remote workers in finding curated 'third places' or Study Spots in Bay Area.",
        imageUrl: "/portfolio/CardImages/coffeeSpot.png",
        slug: "coffee-spot",
        motivation: "Coffee Spot was created by a group of students from SFSU. The motivation behind this project was to help students find the best study spots in the Bay Area. We wanted to create a platform that would allow students to share their favorite places to study, work, and relax. By providing a curated list of study spots, we hoped to make it easier for students to find the perfect place to get their work done.",
        features: [
            "User Authentication and Authorization",
            "Search and Filter Functionality",
            "User Reviews and Ratings",
            "Map Integration",
            "Responsive Design",
            "Admin Dashboard",
            "User Profile Management",
            "Bookmarking Favorite Spots",
        ],
        technologies: [
            "NextJS",
            "Tailwind CSS",
            "MongoDB",
            "TypeScript",
            "Jest",
            "Git",
        ],
        links: {
            github: "https://github.com/TimmyTram/Coffee-Spot",
            live: "https://csc648-01-fa24-csc648-01-fa24-team03-duplicate-w53a.vercel.app/",
            youtube: "https://www.youtube.com/watch?v=eGtjtS4Tjgc",
        },
        challenges: [
            "Integrating Google Maps API for location services.",
            "Implementing user authentication and authorization using NextAuth.",
            "Ensuring responsive design across various devices.",
        ],
        lessons: [
            "Gained experience in full-stack development using Next.js and MongoDB.",
            "Learned how to implement user authentication and authorization.",
            "Improved skills in responsive design and user experience.",
        ],
        futureImprovements: [
            "Add more advanced search and filter options.",
            "Implement a recommendation system for users.",
            "Enhance the admin dashboard with more analytics features.",
            "Improve the user interface based on user feedback.",
            "Add a mobile app version of the platform.",
            "Pagination for the list of study spots.",
            "Implement a dark mode feature.",
        ],
        additionalResources: [
            "Figma for design mockups.",
            "Postman for API testing.",
            "Git and GitHub for version control.",
            "Trello for project management.",
            "Discord for team communication.",

        ],  
        role: {
            title: "Backend Lead",
            description: "As the Backend Lead, I was responsible for designing and implementing the server-side logic of the application. This included setting up the database, creating RESTful APIs, and ensuring data security and integrity. I also collaborated closely with the frontend team to ensure seamless integration between the backend and frontend components.",
            responsibilities: [
                "Designed and implemented the database schema using MongoDB.",
                "Developed RESTful APIs for user authentication and authorization using NextAuth, data retrieval, and data manipulation.",
                "Ensured data security and integrity through proper validation and error handling.",
                "Collaborated with the frontend team to integrate APIs with the user interface.",
                "Conducted code reviews and provided feedback to team members.",
                "Participated in weekly team meetings to discuss progress and challenges.",
                "Assisted in the deployment of the application to Vercel.",
                "Documented the API endpoints and provided usage examples.",
            ],
        }  
    },
    {
        title: "Chat Web App",
        description: "A full-stack chat application that allows users to create start conversations and chat with each other in real-time.",
        imageUrl: "/portfolio/CardImages/chatWebApp.png",
        slug: "chat-app",
        motivation: "The motivation behind this project was to create a platform where users can communicate in real-time. The goal was to build a user-friendly interface that allows users to easily start conversations and chat with each other.",
        features: [
            "User Authentication and Authorization",
            "Real-time Chat Functionality",
            "Search and Filter Conversations",
            "Responsive Design",
        ],
        technologies: [
            "ReactJS",
            "Tailwind CSS",
            "MongoDB",
            "ExpressJS",
            "NodeJS",
            "JavaScript",
            "Socket.io",
            "Git",
        ],
        links: {
            github: "https://github.com/TimmyTram/Chat-Web-App",
            youtube: "https://www.youtube.com/watch?v=U6BazkgOAag",
        },
        challenges: [
            "Implementing real-time chat functionality using Socket.io.",
            "Ensuring data security and privacy for users using JWT Tokens.",
            "Creating a responsive design that works on various devices.",
        ],
        lessons: [
            "Gained experience in real-time web applications using Socket.io.",
            "Learned how to implement user authentication and authorization using JWT Tokens.",
            "Improved skills in responsive design and user experience.",
        ],
    },
    {
        title: "Game Sales Mobile App",
        description: "A mobile application that allows user's to find the best deals regarding videogames.",
        imageUrl: "/portfolio/CardImages/gameSalesApp.png",
        slug: "game-sales-app",
        motivation: "The motivation behind this project was to create a platform where users can find the best deals on video games. The goal was to build a user-friendly interface that allows users to easily search for games and compare prices.",
        features: [
            "Search and Filter Functionality",
            "Responsive Design",
        ],
        technologies: [
            "Swift",
        ],
        links: {
            github: "https://github.com/TimmyTram/Game-Sales-Mobile-Application",
            youtube: "https://www.youtube.com/watch?v=c7sRQ6h3ndA",
        },
        challenges: [
            "Implementing multiple Views and Navigation.",
            "Ensuring responsive design across various devices.",
        ],
        lessons: [
            "Gained experience in mobile application development using Swift.",
            "Learned how to implement multiple views and navigation in a mobile app.",
        ],
    },
    {
        title: "Local LLM Discord Bot",
        description: "A Discord bot and Backend Server that allows users to interact with a local LLM model and get answers to their questions.",
        imageUrl: "/portfolio/CardImages/llmDiscordBot.png",
        slug: "llm-discord-bot",
        motivation: "The motivation behind this project was to create a platform where users can interact with a local LLM model. The goal was to build a user-friendly interface that allows users to easily ask questions and get answers.",
        features: [
            "User Authentication and Authorization",
            "Real-time Chat Functionality",
            "Search and Filter Conversations",
            "Responsive Design",
        ],
        technologies: [
            "Python",
            "Git",
        ],
        links: {
            github: "https://github.com/TimmyTram/LLM-backend",
            youtube: "https://www.youtube.com/watch?v=s3OBCpNryKc",
        },
        challenges: [
            "Trying to use llama-cpp-python to run the LLM model locally.",
            "Streaming the output of the LLM model to Discord.",
            "Making a rolling context window for the LLM model.",
            "Creating simple memory for the LLM model.",
        ],
        lessons: [
            "Gained experience in creating a Discord bot using Python.",
            "Learned how to interact with a local LLM model.",
            "Improved skills in real-time chat functionality.",
        ],
    },
    {
        title: "Tank Game: Pokemon Safari Zone Edition",
        description: "Created a Top down 2-player tank game using Java themed around Pokemon and its Safari Zone.",
        imageUrl: "/portfolio/CardImages/tankGame.png",
        slug: "tank-game",
        motivation: "The motivation behind this project was to create a fun and interactive game that allows users to play with their friends. The goal was to build a user-friendly interface that allows users to easily start the game and play with each other.",
        features: [
            "2-player mode",
            "Top-down view",
            "Pokemon-themed graphics",
            "Responsive Design",
            "Map Creation System",
            "Multiple Power-ups",
            "Multiple Maps",
        ],
        technologies: [
            "Java",
            "Git",
        ],
        links: {
            github: "https://github.com/TimmyTram/TankGame-Pkmn-Edition",
            youtube: "https://www.youtube.com/watch?v=lvNYjpz2Q94",
        },
        challenges: [
            "Implementing the collision detection system that performs well.",
            "Creating the map creation system.",
            "Ensuring smooth gameplay and performance.",
        ],
        lessons: [
            "Gained experience in game development using Java.",
            "Learned how to implement collision detection in a game.",
            "Improved skills in game design and user experience.",
            "Practiced SOLID principles in Java.",
        ],
    },
    {
        title: "Unnamed Image Web Forum Application",
        description: "A web forum application that allows users to upload images and comment on them.",
        imageUrl: "/portfolio/CardImages/imageForum.png",
        slug: "image-forum",
        motivation: "The motivation behind this project was to create a platform where users can share images and comment on them. The goal was to build a user-friendly interface that allows users to easily upload images and interact with each other.",
        features: [
            "User Authentication and Authorization",
            "Image Uploading",
            "Commenting System",
            "Responsive Design",
        ],
        technologies: [
            "Handlebars",
            "Html",
            "CSS",
            "ExpressJS",
            "NodeJS",
            "JavaScript",
            "MySQL",
            "Git",
        ],
        links: {
            github: "https://github.com/TimmyTram/Image-WebApplication",
            youtube: "https://www.youtube.com/watch?v=u0Lvx10fAg4",
        },
        challenges: [
            "Implementing the commenting system.",
            "Authenticating users and ensuring session management.",
            "Creating a web layout that was visually appealing",
            "Uploading images and creating thumbnails and storing them in the database.",
        ],
        lessons: [
            "Gained experience in web development using Handlebars and MySQL.",
            "Learned how to implement user authentication and authorization.",
            "Improved skills in responsive design and user experience.",
        ],
    }
];