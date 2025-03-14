import Card from "../cards/card";
import './styles/ProjectSection.css';
import Modal from "../UI/Modal";
import CoffeeSpot from "./projects/CoffeeSpot";
import { useState } from "react";

const ProjectSection = () => {
    const [isOpen, setisOpen] = useState(false);

    const openModal = () => setisOpen(true);
    const closeModal = () => setisOpen(false);

    return (
        <div className="container" style={{ padding: "20px" }}>
            <div className="project-section-container">
                <h1>Projects:</h1>

                <div className="card-container">
                    <Card
                        title="CoffeeSpot"
                        image="/portfolio/coffeeSpot.png"
                        description="Web App to find third places to work or study."
                        onClick={openModal} />
                    <Card
                        title="Tokei"
                        image="/portfolio/tokei.png"
                        description="Web App to find Anime and Manga recommendations and data."
                    />

                    <Modal isOpen={isOpen} onClose={closeModal}>
                        <CoffeeSpot />
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;