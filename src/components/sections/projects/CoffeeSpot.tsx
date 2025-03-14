import './CoffeeSpot.css';
import Collapse from '../../UI/Collapse';
import { useState } from 'react';

const CoffeeSpot = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex-col-container">
            <h2>CoffeeSpot</h2>
            <iframe
                className="demo-video"
                src="https://www.youtube.com/embed/eGtjtS4Tjgc"
                title="Coffee Spot Demo"
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

            <p className="text-description">
                CoffeeSpot is a full-stack web application, built by College Students, for College students.
                CoffeeSpot is a platform that allows users to find, locate, and review coffee shops, libraries, public parks, and other forms of third places curated by our userbase to find studying locations.
                Users can create an account, search for third places, and leave reviews for other users to see.
            </p>

            <button className="btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Hide Details' : 'Show Details'}
            </button>
            <Collapse isOpen={isOpen}>
                <p className="text-description">
                    My assigned role in CoffeeSpot was <span className="text-bold">Backend Lead</span>.
                    I was responsible for designing the RESTful API, creating the database schema, handling user authentication and authorization and image uploading, storage, and deletion.
                    As a team member of CoffeeSpot, I was also responsible for code reviews and managing pull requeests as well as contributing to frontend components and the administation dashboard.
                </p>
            </Collapse>


        </div>
    );
};

export default CoffeeSpot;