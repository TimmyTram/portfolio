import TechIcon from '../../TechIcon/TechIcon';
import Button from '../../UI/Button';
import './styles/project.css';

const CoffeeSpot = () => {
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

            <div className="flex-row-container">
                <Button href=
                    "https://csc648-01-fa24-csc648-01-fa24-team03-duplicate-w53a.vercel.app/"
                >
                    View Live Site
                </Button>
                <Button href=
                    "https://github.com/TimmyTram/Coffee-Spot"
                >
                    View GitHub
                </Button>
            </div>

            <div>
                <h2>Technologies Used:</h2>
                <div className="flex-row-container">
                    <TechIcon filename="typescript" displayname="TypeScript" size={20} fontSize={15} />
                    <TechIcon filename="nextjs" displayname="Next.js" size={20} fontSize={15} />
                    <TechIcon filename="react" displayname="React" size={20} fontSize={15} />
                    <TechIcon filename="tailwindcss" displayname="TailwindCSS" size={20} fontSize={15} />
                    <TechIcon filename="prisma" displayname="Prisma" size={20} fontSize={15} />
                    <TechIcon filename="mongodb" displayname="MongoDB" size={20} fontSize={15} />
                    <TechIcon filename="vercel" displayname="Vercel" size={20} fontSize={15} />
                </div>
            </div>


            <div className="flex-col-container">
                <div>
                    <h2>Purpose:</h2>
                    <p className="text-description">
                        CoffeeSpot is a full-stack web application, built by College Students, for College students.
                        CoffeeSpot is a platform that allows users to find, locate, and review coffee shops, libraries, public parks, and other forms of third places curated by our userbase to find studying locations.
                        Users can create an account, search for third places, and leave reviews for other users to see.
                    </p>

                    <h2>My Role on the Team:</h2>
                    <p className="text-description">
                        My assigned role in CoffeeSpot was <span className="text-bold">Backend Lead</span>.
                        I was responsible for designing the RESTful API, creating the database schema, handling user authentication and authorization and image uploading, storage, and deletion.
                        As a team member of CoffeeSpot, I was also responsible for code reviews and managing pull requests as well as contributing to frontend components and the administation dashboard.
                    </p>
                    <h2>Features:</h2>
                    <ul className="features">
                        <li><span className="text-bold">Responsive Design:</span> Layout is optimized to adjust seamlessly across a multitude of screen sizes.</li>
                        <li><span className="text-bold">UI/UX:</span> Follows our Figma Design closely and has a strong sense of branding with our mascot. Intentionally picked warmer colors and themes associated with studying.</li>
                    </ul>

                    <h2>Home Page:</h2>
                    <ul className="features">
                        <li><span className="text-bold">Banner:</span> Friendly welcoming banner explaining the purpose of our site.</li>
                        <li><span className="text-bold">Locations List:</span> Lists curated locations</li>
                    </ul>

                </div>


            </div>


        </div>
    );
};

export default CoffeeSpot;