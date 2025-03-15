import TechIcon from '../../Icons/TechIcon/TechIcon';
import Button from '../../UI/Button';
import './styles/project.css';

const LLMDiscordBot = () => {
    return (
        <div className="flex-col-container">
            <h2>LLM Discord Bot</h2>

            <iframe
                className="demo-video"
                src="https://www.youtube.com/embed/s3OBCpNryKc"
                title="LLM Discord Bot Demo"
                allow="
                    accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share"
                allowFullScreen
            />

            <div className="flex-row-container">
                <Button href=
                    "https://github.com/TimmyTram/Discord-Bot"
                >
                    View Discord Bot GitHub
                </Button>
                <Button href=
                    "https://github.com/TimmyTram/LLM-backend"
                >
                    View LLM Backend GitHub
                </Button>
            </div>

            <div className="tech-stack-container">
                <h2 className="heading-bubble">Technologies Used:</h2>
                <div className="flex-row-container">
                    <TechIcon filename="python" displayname="Python" size={20} fontSize={15} />
                    <TechIcon filename="discord" displayname="Discord API" size={20} fontSize={15} />
                    <TechIcon filename="llamacpppython" displayname="llama-cpp-python" size={20} fontSize={15} />
                </div>
            </div>

            <div className="flex-col-container">
                <div>
                    <h2 className="heading-bubble">Purpose:</h2>
                    <p className="text-description">
                        The project is a Discord Bot that interacts via sockets to my LLM Backend server.
                        Then the LLM Backend server uses the llama-cpp-python library to interact with a locally installed LLM on my PC.
                    </p>
                </div>

                <div>
                    <h2 className="heading-bubble">Motivation:</h2>
                    <p className="text-description">
                        The original idea behind creating this project was seeing a Tech-Focused Twitch Streamer called Vedal987 who created an LLM Streamer.
                        In his advice to gaining familiarity with LLMs, he suggested creating a Discord Bot that interacts with LLMs whether its local or via OpenAI.
                        I took that advice and created this project after finding the llama-cpp-python library as I prefered to run things locally.
                        Overall, this project was a great learning experience in creating a Discord Bot and interacting with a locally installed LLM.
                        I also got to utilize sockets which I had learned in my Computer Networks class and was enjoyable seeing the discord bot (client) interact with my server.
                    </p>
                </div>

                <div>
                    <h2 className="heading-bubble">Features:</h2>
                    <ul className="features">
                        <li>Interacts with any Local LLM</li>
                        <li>Responds to user messages with @botname</li>
                        <li>Can be added to any Discord Server</li>
                        <li>Has simple short term memory by saving conversation data to JSON. This allows conversations to stay on topic even if the bot resets.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default LLMDiscordBot;