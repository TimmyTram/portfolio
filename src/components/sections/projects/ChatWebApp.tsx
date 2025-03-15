import TechIcon from '../../Icons/TechIcon/TechIcon';
import Button from '../../UI/Button';
import './styles/project.css';

const ChatWebApp = () => {
    return (
        <div className="flex-col-container">
            <h2>Chat Web App</h2>

            <iframe
                className="demo-video"
                src="https://www.youtube.com/embed/U6BazkgOAag"
                title="Chat Web App Demo"
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
                    "https://github.com/TimmyTram/Chat-Web-App"
                >
                    View GitHub
                </Button>

                <div className='tech-stack-container'>
                    <h2 className="heading-bubble">Technologies Used:</h2>
                    <div className="flex-row-container">
                        <TechIcon filename="nodejs" displayname="Node.JS" size={20} fontSize={15} />
                        <TechIcon filename="javascript" displayname="JavaScript" size={20} fontSize={15} />
                        <TechIcon filename="react" displayname="React" size={20} fontSize={15} />
                        <TechIcon filename="expressjs" displayname="ExpressJS" size={20} fontSize={15} />
                        <TechIcon filename="socketio" displayname="Socket.IO" size={20} fontSize={15} />
                        <TechIcon filename="mongodb" displayname="MongoDB" size={20} fontSize={15} />
                        <TechIcon filename="tailwindcss" displayname="TailwindCSS" size={20} fontSize={15} />
                    </div>
                </div>

                <div>
                    <h2 className="heading-bubble">Purpose:</h2>
                    <p className="text-description">
                        A full-stack chat web application that allows users to chat in real-time with other users. Users can sign up and login to chat with others.
                    </p>

                    <h2 className="heading-bubble">Notes:</h2>
                    <p className="text-description">
                        This project was done as practice to learn how to implement a modern full stack application from top to bottom.
                    </p>
                    
                    <h2 className="heading-bubble">Features:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Real-Time Chat:</span> Users can chat in real-time with other users.</li>
                        <li><span className="text-bold">User Authentication:</span> Users can sign up and login to chat with others.</li>
                    </ul>

                    <h2 className="heading-bubble">Login / Signup Page:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Login:</span> Users can login via username and password</li>
                        <li><span className="text-bold">Sign Up:</span> Users can sign up for an account</li>
                    </ul>

                    <h2 className="heading-bubble">Chat Page:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Chat:</span> Users can chat with others in real-time</li>
                        <li><span className="text-bold">Online Users:</span> Users can see who is online</li>
                    </ul>

                    <h2 className="heading-bubble">Backend:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">JWT Authentication:</span> Users are authenticated using JWT tokens</li>
                        <li><span className="text-bold">Socket.IO:</span> Real-time chat is implemented using Socket.IO</li>
                        <li><span className="text-bold">Zustand:</span> State Management for messages and conversations is controlled via Zustand</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChatWebApp;