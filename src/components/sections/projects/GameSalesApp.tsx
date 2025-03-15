import TechIcon from '../../Icons/TechIcon/TechIcon';
import Button from '../../UI/Button';
import './styles/project.css';

const GameSalesApp = () => {
    return (
        <div className="flex-col-container">
            <h2>Game Sales App</h2>

            <iframe
                className="demo-video"
                src="https://www.youtube.com/embed/c7sRQ6h3ndA"
                title="Game Sales App Demo"
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
                <Button
                    href="https://github.com/TimmyTram/Game-Sales-Mobile-Application"
                >
                    View GitHub
                </Button>
            </div>

            <div className="flex-col-container">

                <div className='tech-stack-container'>
                    <h2 className="heading-bubble">Technologies Used:</h2>
                    <div className="flex-row-container">
                        <TechIcon filename="swift" displayname="Swift" size={20} fontSize={15} />
                        <TechIcon filename="xcode" displayname="Xcode" size={20} fontSize={15} />
                    </div>
                </div>
                <div>
                    <h2 className="heading-bubble">Purpose:</h2>
                    <p className="text-description">
                        Game Sales App is a iOS mobile application that provides users with information on the latest game sales and deals.
                    </p>
                </div>
                <div>
                    <h2 className="heading-bubble">Features:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Game Sales:</span> Users can view the latest game sales and deals.</li>
                        <li><span className="text-bold">Search:</span> Users can search for specific game deals.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="heading-bubble">Motivation:</h2>
                    <p className="text-description">
                        This project was created in my CSC 680 Mobile Applications Development course.
                        I chose to develop something relatively simple as I was new to iOS development.
                        At the time, I was interested in finding the best deals on games and thought it would be a good idea to create an application that would help me and others find the best deals on games.
                    </p>
                </div>

                <div>
                    <h2 className="heading-bubble">Challenges:</h2>
                    <p className="text-description">
                        The main challenge was learning Swift and Xcode to develop the iOS application.
                        As well as coming up with an idea for the application.
                        If I were ever to revisit this project, I would like to add more features such as filters and notifications.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default GameSalesApp;