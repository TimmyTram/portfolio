import Card from "../components/Card";

const Projects = () => {
    return (
        <div className="w-full flex flex-col items-center mt-4 bg-royal-blue-solid p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">View My Projects:</h1>
            <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:w-full">
                <Card
                    title="Tokei"
                    description="A full-stack application that allows users to get the latest new and updates on their favorite anime and manga."
                    imageUrl="/CardImages/tokei.png"
                    slug="tokei"
                />
                
                <Card
                    title="Coffee Spot"
                    description="A full-stack application targeting young college students or remote workers in finding curated 'third places' or Study Spots in Bay Area."
                    imageUrl="/CardImages/coffeeSpot.png"
                    slug="coffee-spot"
                />


                <Card 
                    title="Chat Web App"
                    description="A full-stack chat application that allows users to create start conversations and chat with each other in real-time."
                    imageUrl="/CardImages/chatWebApp.png"
                    slug="chat-app"
                />

                <Card 
                    title="Game Sales Mobile App"
                    description="A mobile application that allows user's to find the best deals regarding videogames."
                    imageUrl="/CardImages/gameSalesApp.png"
                    slug="game-sales-app"
                />

                <Card
                    title="Local LLM Discord Bot"
                    description="A Discord bot and Backend Server that allows users to interact with a local LLM model and get answers to their questions."
                    imageUrl="/CardImages/llmDiscordBot.png"
                    slug="llm-discord-bot"
                />

                <Card
                    title="Tank Game: Pokemon Safari Zone Edition"
                    description="Created a Top down 2-player tank game using Java themed around Pokemon and its Safari Zone."
                    imageUrl="/CardImages/tankGame.png"
                    slug="tank-game"
                />

                <Card
                    title="Unnamed Image Web Forum Application"
                    description="A web forum application that allows users to upload images and comment on them."
                    imageUrl="/CardImages/imageForum.png"
                    slug="image-forum"
                />

            </div>
        </div>
    );
}

export default Projects;