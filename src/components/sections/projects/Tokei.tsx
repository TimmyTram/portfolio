import TechIcon from '../../Icons/TechIcon/TechIcon';
import Button from '../../UI/Button';
import './styles/project.css';


const Tokei = () => {
    return (
        <div className="flex-col-container">
            <h2>Tokei</h2>

            <iframe
                className="demo-video"
                src="https://www.youtube.com/embed/NemmfHUnXUs"
                title="Tokei Demo"
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
                    "https://anime-ratings.vercel.app/"
                >
                    View Live Site
                </Button>
                <Button href=
                    "https://github.com/TimmyTram/anime-ratings"
                >
                    View GitHub
                </Button>
            </div>

            <div className="flex-col-container">

                <div className='tech-stack-container'>
                    <h2 className="heading-bubble">Technologies Used:</h2>
                    <div className="flex-row-container">
                        <TechIcon filename="typescript" displayname="TypeScript" size={20} fontSize={15} />
                        <TechIcon filename="nextjs" displayname="Next.js" size={20} fontSize={15} />
                        <TechIcon filename="react" displayname="React" size={20} fontSize={15} />
                        <TechIcon filename="tailwindcss" displayname="TailwindCSS" size={20} fontSize={15} />
                        <TechIcon filename="prisma" displayname="Prisma" size={20} fontSize={15} />
                        <TechIcon filename="mongodb" displayname="MongoDB" size={20} fontSize={15} />
                        <TechIcon filename="vercel" displayname="Vercel" size={20} fontSize={15} />
                    </div>
                    
                <div>
                    <h2 className="heading-bubble">Purpose:</h2>
                    <p className="text-description">
                        Tokei is a full-stack web application that provides users with Anime and Manga recommendations using the Jikan V4 API.
                    </p>
                </div>

                    <h2 className="heading-bubble">Features:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Responsive Design:</span> Layout is optimized to adjust seamlessly across a multitude of screen sizes.</li>
                        <li><span className="text-bold">UI/UX and Animations:</span> User Interface was designed to be easily accessible and contains animations for more tactility.</li>
                    </ul>

                    <h2 className="heading-bubble">Home Page:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Banner with Animation:</span> Home page has an animated banner explaining to the user the purpose of the website.</li>
                        <li><span className="text-bold">Navbar:</span> Navigation bar that leads to login and signup modals, search page, home page.</li>
                        <li><span className="text-bold">Site Links:</span> Sections to other parts of the website like rankings, seasonal anime, search page, etc.</li>
                    </ul>

                    <h2 className="heading-bubble">Search Page:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Search Functionality:</span> Users can search through anime or manga via a toggle near the top.</li>
                        <li><span className="text-bold">Debounced Search:</span> Search is debounced and users need not hit enter to see their results.</li>
                        <li><span className="text-bold">Pagination:</span> Search results are paginated to prevent excessive API requests, allowing users to browse through search results without overwhelming the server and improving performance.</li>
                        <li><span className="text-bold">Query URL Parameters:</span> Search results are appended to the URL to generate a unique link for sharing or revisiting specific results.</li>
                    </ul>

                    <h2 className="heading-bubble">Rankings Page:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Top Anime and Manga:</span> Lists the top anime and manga depending on the toggle.</li>
                        <li><span className="text-bold">Pagination:</span> Search results are paginated to prevent excessive API requests, allowing users to browse through search results without overwhelming the server and improving performance.</li>
                    </ul>

                    <h2 className="heading-bubble">Seasonal Page:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Seasonal Anime:</span> Lists the current seasonal anime.</li>
                        <li><span className="text-bold">Pagination:</span> Search results are paginated to prevent excessive API requests, allowing users to browse through search results without overwhelming the server and improving performance.</li>
                    </ul>

                    <h2 className="heading-bubble">Anime and Manga Details Page:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Dynamic Routes:</span> Using Next.JS dynamic routes we are able to fetch and display data based on the ID in URL.</li>
                        <li><span className="text-bold">Details:</span> Shows details of the anime or manga including the title, synopsis, genres, and more.</li>
                        <li><span className="text-bold">Anime Video Trailer:</span> Anime trailer is embedded for users to watch if interested.</li>
                        <li><span className="text-bold">Scoring Analytics:</span> Provided bar graph showing how many people rated the anime or manga a certain score.</li>
                        <li><span className="text-bold">Watch / Read Analytics:</span> Provided bar graph showing how many people are watching/reading, completed, delaying, dropped, or planning to watch/read the anime or manga.</li>
                    </ul>

                    <h2 className="heading-bubble">Comments:</h2>
                    <ul className="features">
                        <li><span className="text-bold">Comment Section:</span> Users can leave their thoughts on a given anime or manga.</li>
                        <li><span className="text-bold">Comment Details:</span> Display User role, username, comment details, and date posted.</li>
                        <li><span className="text-bold">Pagination:</span> Comments are paginated to prevent excessive API requests, allowing users to view comments without overwhelming the server and improving performance.</li>
                        <li><span className="text-bold">Comment Admin Controls:</span> Admin users can delete comments if deemed inappropriate.</li>
                    </ul>

                    <h2 className="heading-bubble">User Authentication:</h2>
                    <ul className='features'>
                        <li><span className="text-bold">Sign Up:</span> Users can create an account.</li>
                        <li><span className="text-bold">Login:</span> Users can log in to their account.</li>
                        <li><span className="text-bold">Logout:</span> Users can log out of their account.</li>
                        <li><span className="text-bold">Modals:</span> Can toggle between Login and Sign up Modals smoothly.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Tokei;;