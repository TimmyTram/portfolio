import CoffeeSpot from "./projects/CoffeeSpot";
import { useState } from "react";
import Modal from "../UI/Modal";

const ProjectSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="container">
            <div className="flex-col-container">
                <h1>Projects:</h1>
                <button
                    className="btn"
                    onClick={openModal}
                >
                    Show CoffeeSpot
                </button>
                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                >
                    <CoffeeSpot />
                </Modal>
            </div>
        </div>
    );
};

export default ProjectSection;