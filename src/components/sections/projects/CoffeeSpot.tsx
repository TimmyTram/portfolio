import TechIcon from '../../Icons/TechIcon/TechIcon';
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
            </div>


            <div className="flex-col-container">
                <div>
                    <h2 className="heading-bubble">Purpose:</h2>
                    <p className="text-description">
                        Coffee Spot is an intuitive and user-friendly application designed to help users
                        discover the ideal third place tailored to their specific needs. By using user input and
                        location data, Coffee Spot will allow users to filter spaces based on Wi-Fi quality and animal friendliness. 
                        The application will deliver recommendations, helping users find coffee shops, libraries, and other suitable
                        locations. It also integrates reviews from our users and will update space availability to
                        help users make informed choices
                    </p>

                    <h2 className="heading-bubble">My Role on the Team:</h2>
                    <p className="text-description">
                        My assigned role in CoffeeSpot was <span className="text-bold">Backend Lead</span>.
                        My Responsbilites included:
                    </p>
                    <ul className="features">
                        <li>Designing and Implementing the backend architecture using Prisma and MongoDB.</li>
                        <li>Creating the API routes and React Hooks for the Frontend team to use.</li>
                        <li>Handling User Authentication and Authorization using next-auth</li>
                        <li>Implementing the Admin Dashboard.</li>
                        <li>Helping debug any deployment issues on Vercel or Mongodb Atlas.</li>
                        <li>Researching Image Storage Solutions such as AWS S3 and Vercel Blobs.</li>
                        <li>Developing Prototypes to show Proof of Concept for new features.</li>
                        <li>Code Reviews and Pull Request Approvals.</li>
                        <li>Mentoring Backend members on how to use the API or write NextJS APIs routes.</li>
                        <li>Conducting Integration Tests along with Scrum Master and Backend Members.</li>
                        <li>Creating documentation for Backend API and React Hooks.</li>
                        <li>Helping develop components Frontend team needed help with.</li>
                    </ul>
                    <h2 className="heading-bubble">Features:</h2>
                    <ul className="features">
                        <li><span className="text-bold">Responsive Design:</span> Layout is optimized to adjust seamlessly across a multitude of screen sizes.</li>
                        <li><span className="text-bold">UI/UX:</span> Follows our Figma Design closely and has a strong sense of branding with our mascot. Intentionally picked warmer colors and themes associated with studying.</li>
                    </ul>

                    <h2 className="heading-bubble">Home Page:</h2>
                    <ul className="features">
                        <li><span className="text-bold">Banner:</span> Friendly welcoming banner explaining the purpose of our site.</li>
                        <li><span className="text-bold">Locations List:</span> Lists curated locations</li>
                    </ul>

                    <h2 className="heading-bubble">Search Page:</h2>
                    <ul className="features">
                        <li><span className="text-bold">Search Bar:</span> Search for locations by name or location.</li>
                        <li><span className="text-bold">Query URL Parameters:</span> Search results are appended to the URL to generate a unique link for sharing or revisiting specific results.</li>
                        <li><span className="text-bold">Filter:</span> Filter locations by type, rating, attributes, or distance.</li>
                        <li><span className="text-bold">Map:</span> Have a dynamic map that shows colored coded pins and locations of third places.</li>
                    </ul>

                    <h2 className="heading-bubble">Location Page:</h2>
                    <ul className="features">
                        <li><span className="text-bold">Location Information:</span> Shows location information, reviews, images, and average rating and busyness.</li>
                        <li><span className="text-bold">Reviews:</span> Users can leave reviews and ratings for locations.</li>
                        <li><span className="text-bold">Bookmarks:</span>User can bookmark a location that they want to revisit later.</li>
                    </ul>

                    <h2 className="heading-bubble">User Profile:</h2>
                    <ul className="features">
                        <li><span className="text-bold">User Information:</span> Shows user information, reviews, and bookmarks.</li>
                        <li><span className="text-bold">Edit Profile:</span> User can edit their email or password.</li>
                    </ul>

                    <h2 className="heading-bubble">Admin Dashboard:</h2>
                    <ul className="features">
                        <li><span className='text-bold'>Analytics:</span> Shows number of users, locations, reviews, and bookmarks</li>
                        <li><span className='text-bold'>Create Locations:</span> A form to create a new curated location.</li>
                        <li><span className='text-bold'>Edit Locations:</span> A form to edit a curated location.</li>
                        <li><span className='text-bold'>Delete Locations:</span> A form to delete a curated location.</li>
                        <li><span className='text-bold'>Location Card Admin Controls:</span> Can directly edit or delete location cards.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CoffeeSpot;