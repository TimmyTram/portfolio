import Card from "../cards/card";
import './styles/ProjectSection.css';
import Modal from "../UI/Modal";
import CoffeeSpot from "./projects/CoffeeSpot";
import Tokei from "./projects/Tokei";
import { useState } from "react";

const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const openModal = (project: string) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    const renderProjectComponent = () => {
        switch (selectedProject) {
            case "CoffeeSpot":
                return <CoffeeSpot />;
            case "Tokei":
                return <Tokei />;
            default:
                return null;
        }
    };

    return (
        <div className="container" style={{ padding: "20px" }}>
            <div className="project-section-container">
                <h1>Projects:</h1>

                <div className="card-container">
                    <Card
                        title="Tokei"
                        image="/portfolio/tokei.png"
                        description="Web App to find Anime and Manga recommendations and data."
                        onClick={() => openModal("Tokei")}
                    />
                    
                    <Card
                        title="CoffeeSpot"
                        image="/portfolio/coffeeSpot.png"
                        description="Web App to find third places to work or study."
                        onClick={() => openModal("CoffeeSpot")}
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