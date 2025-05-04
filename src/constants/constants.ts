export const resources = [
    "Home",
    "About",
    "Contact",
    "Education",
    "Technologies",
    "Projects",
    "Experiences",
];


export const projects = [
    {
        title: "Coffee Spot",
        description: "A full-stack application targeting young college students or remote workers in finding curated 'third places' or Study Spots in Bay Area.",
        imageUrl: "/CardImages/coffeeSpot.png",
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
];