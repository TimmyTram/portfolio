import TechIcon from '../../Icons/TechIcon/TechIcon';
import Button from '../../UI/Button';
import './styles/project.css';

const ImageForum = () => {
    return (
        <div className="flex-col-container">
            <h2>Unnamed Image Forum</h2>

            <iframe
                className="demo-video"
                src="https://www.youtube.com/embed/u0Lvx10fAg4"
                title="Image Forum Demo"
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
                    "https://github.com/TimmyTram/Image-WebApplication"
                >
                    View GitHub
                </Button>
            </div>

            <div className="flex-col-container">
                <div className="tech-stack-container">
                    <h2 className='heading-bubble'>Technologies Used:</h2>
                    <div className="flex-row-container">
                        <TechIcon filename="javascript" displayname="JavaScript" size={20} fontSize={15} />
                        <TechIcon filename="html" displayname="HTML" size={20} fontSize={15} />
                        <TechIcon filename="css" displayname="CSS" size={20} fontSize={15} />
                        <TechIcon filename="nodejs" displayname="Node.js" size={20} fontSize={15} />
                        <TechIcon filename="expressjs" displayname="ExpressJS" size={20} fontSize={15} />
                        <TechIcon filename="mysql" displayname="MySQL" size={20} fontSize={15} />
                    </div>
                </div>

                <div>
                    <h2 className="heading-bubble">Purpose:</h2>
                    <p className="text-description">
                        This project was for my CSC 317 Introduction to Web Development course.
                        The purpose of this project was to create a web application
                        that allows users to upload images and view other users' images.
                    </p>
                </div>

                <div>
                    <h2 className="heading-bubble">Features:</h2>
                    <ul className="features">
                        <li>Users can register an account.</li>
                        <li>Users can login.</li>
                        <li>Users can logout.</li>
                        <li>Users can upload images along with a description and title.</li>
                        <li>Users can view all uploaded images.</li>
                        <li>Users can view the images' details.</li>
                        <li>Users can comment on the images.</li>
                        <li>Extremely basic and naive pagination of images available to view.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="heading-bubble">Challenges:</h2>
                    <p className="text-description">
                        The biggest challenge I faced was implementing the image upload feature.
                        I had to learn how to use the Multer library to handle the image upload and
                        store the image in MySQL as a BLOB data type.
                        The other challenge I faced was implementing the pagination feature.
                        I had done it in a very naive way by simply fetching all the images from the database at once and then
                        displaying them in chunks.
                        The pagination feature would have been more efficient if 
                        I had implemented it in a way that only fetched the images that were needed to be displayed.
                        AKA use LIMIT and OFFSET in the SQL query.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ImageForum;