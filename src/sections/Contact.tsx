import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center mt-4 bg-royal-blue-solid p-4 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">Contact Me:</h1>
            <div className="w-full md:w-[50%] flex justify-center items-center mt-4">
                <a href="https://www.linkedin.com/in/timmytram/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-5xl text-white hover:text-blue-500 transition duration-300 m-2" />
                </a>
                <a href="https://github.com/TimmyTram" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare className="text-5xl text-white hover:text-black transition duration-300 m-2" />
                </a>
            </div>
        </div>
    );
}

export default Contact;