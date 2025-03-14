import CoffeeSpot from "./projects/CoffeeSpot";
import Collapse from "../UI/Collapse";
import { useState } from "react";

const ProjectSection = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="container">
            <div className="flex-col-container">
                <h1>Projects:</h1>
                <button
                    className="btn"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? 'Hide' : 'Show'} CoffeeSpot
                </button>
                <Collapse isOpen={isOpen}>
                    <CoffeeSpot />
                </Collapse>
            </div>
        </div>
    );
};

export default ProjectSection;