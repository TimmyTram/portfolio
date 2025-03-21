import ProjectCard from '../cards/ProjectCard';
import './styles/ProjectSection.css';
import Modal from "../UI/Modal";
import CoffeeSpot from "./projects/CoffeeSpot";
import Tokei from "./projects/Tokei";
import ChatWebApp from "./projects/ChatWebApp";
import GameSalesApp from "./projects/GameSalesApp";
import LLMDiscordBot from "./projects/LLMDiscordBot";
import TankGame from "./projects/TankGame";
import ImageForum from "./projects/ImageForum";
import { useState } from "react";

const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const openModal = (project: string) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    const renderProjectComponent = () => {
        switch (selectedProject) {
            case "Tokei":
                return <Tokei />;
            case "CoffeeSpot":
                return <CoffeeSpot />;
            case "ChatWebApp":
                return <ChatWebApp />;
            case 'GameSalesApp':
                return <GameSalesApp />;
            case 'LLMDiscordBot':
                return <LLMDiscordBot />;
            case 'TankGame':
                return <TankGame />;
            case 'ImageForum':
                return <ImageForum />;
            default:
                return null;
        }
    };

    return (
        <div id="projects" className="container">
            <div className="project-section-container">
                <h1>Projects:</h1>

                <div className="card-container">
                    <ProjectCard
                        title="Tokei"
                        image="/portfolio/CardImages/tokei.png"
                        description="Web App to find Anime and Manga recommendations and data."
                        onClick={() => openModal("Tokei")}
                    />

                    <ProjectCard
                        title="CoffeeSpot"
                        image="/portfolio/CardImages/coffeeSpot.png"
                        description="Web App to find third places to work or study."
                        onClick={() => openModal("CoffeeSpot")}
                    />

                    <ProjectCard
                        title="Chat Web App"
                        image="/portfolio/CardImages/chatWebApp.png"
                        description="Real-time chat application using Socket.io."
                        onClick={() => openModal("ChatWebApp")}
                    />

                    <ProjectCard
                        title="Game Sales App"
                        image="/portfolio/CardImages/gameSalesApp.png"
                        description="SwiftUI iOS Application to find and track video game sales."
                        onClick={() => openModal("GameSalesApp")}
                    />

                    <ProjectCard
                        title="Local LLM Discord Bot"
                        image="/portfolio/CardImages/llmDiscordBot.png"
                        description="Discord Bot hooked up to a Local LLM via sockets."
                        onClick={() => openModal("LLMDiscordBot")}
                    />

                    <ProjectCard
                        title="Tank Game: Pokemon Safari Zone Edition"
                        image="/portfolio/CardImages/tankGame.png"
                        description="Pokemon Themed Tank Game built using Java"
                        onClick={() => openModal("TankGame")}
                    />

                    <ProjectCard
                        title="Unnamed Image Web Forum Application"
                        image="/portfolio/CardImages/imageForum.png"
                        description="Web Forum Application to share images and discuss."
                        onClick={() => openModal("ImageForum")}
                    />

                    <Modal isOpen={!!selectedProject} onClose={closeModal}>
                        {renderProjectComponent()}
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;