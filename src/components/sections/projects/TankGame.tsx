import TechIcon from '../../Icons/TechIcon/TechIcon';
import Button from '../../UI/Button';
import './styles/project.css';

const TankGame = () => {
    return (
        <div className="flex-col-container">
            <h2>Tank Game: Pokemon Safari Zone Edition</h2>

            <iframe
                className="demo-video"
                src="https://www.youtube.com/embed/lvNYjpz2Q94"
                title="Tank Game Demo"
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
                <Button href="https://github.com/TimmyTram/TankGame-Pkmn-Edition">
                    View GitHub
                </Button>
            </div>

            <div className="flex-col-container">
                <div className='tech-stack-container'>
                    <h2 className="heading-bubble">Technologies Used:</h2>
                    <div className="flex-row-container">
                        <TechIcon filename="java" displayname="Java" size={20} fontSize={15} />
                    </div>
                </div>

                <div>
                    <h2 className="heading-bubble">Purpose:</h2>
                    <p className="text-description">
                        Tank Game: Pokemon Safari Zone Edition is a Java Game that I created for my final project at SFSU for CSC 413 Software Development.
                        This game was created with heavy emphasis on Object Oriented Programming and Design Patterns such as the Factory Pattern or Singleton pattern.
                    </p>
                </div>

                <div>
                    <h2 className="heading-bubble">Features:</h2>
                    <ul className="features">
                        <li>2 Player Splitscreen Game</li>
                        <li>Player 1: WASD Controls</li>
                        <li>Player 2: Arrow Key Controls</li>
                        <li>Player 1: Fire with SPACE</li>
                        <li>Player 2: Fire with ENTER</li>
                        <li>Player 1: Pokemon Trainer</li>
                        <li>Player 2: Bidoof</li>
                        <li>Powerups: Including speedup, rapidfire and healing pokemon</li>
                        <li>Minimap: Minimap in the bottom center of the screen showing layout of entire map</li>
                        <li>Health Bars: Dynamic Health bars for both players</li>
                        <li>Obstacles: Including trees and rocks</li>
                        <li>Win Condition: Destroy the other player's tank</li>
                        <li>Debug Mode: Shows hitboxes or toggles a one shot one kill mode</li>
                    </ul>
                </div>

                <div>
                    <h2 className="heading-bubble">Map Creator:</h2>
                    <p className="text-description">
                        I created a basic map reader that allows users to create their own maps for the game.
                        The map reader allows users to place obstacles, powerups, and spawn points for the players as long as its a .csv file.
                    </p>
                </div>

                <div>
                    <h2 className="heading-bubble">Documentation:</h2>
                    <p className="text-description">
                        Linked below is the documentation for the game. It includes the UML Diagrams, Design Patterns and build instructions.
                    </p>
                </div>
                <Button href="/portfolio/pdfs/TimmyTram-TankGame.pdf">
                    View Documentation
                </Button>
            </div>
        </div>
    );
};

export default TankGame;