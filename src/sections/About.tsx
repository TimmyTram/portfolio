import Headshot from "../components/Headshot";

const About = () => {
    return (
        <div className="w-full flex flex-col items-center mt-4 bg-royal-blue-solid p-4 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">About Me:</h1>
            <div className="w-full flex flex-col md:flex-row items-center mt-4">
                <div className="flex justify-center w-full md:w-1/3">
                    <Headshot src="/headshot/headshot.jpg" alt="Headshot" />
                </div>
                <div className="flex flex-col justify-center items-center text-center w-full md:w-2/3 mt-4 md:mt-0 bg-black py-10">
                    <p className="text-xl">
                        👋 Hello, my name is Timmy Tram.
                        <br />
                        An aspiring full-stack developer from San Francisco, California
                    </p>
                    <a href="/pdfs/Timmy-Tram-Resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 bg-royal-gold-solid text-white px-4 py-2 rounded-xl hover:bg-royal-gold-solid-hover transition duration-300">
                        View My Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;