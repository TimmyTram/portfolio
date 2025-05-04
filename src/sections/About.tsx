import Headshot from "../components/Headshot";
import Contact from "./Contact";

const About = () => {
    return (
        <>
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8 border-6 border-royal-gold-solid">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h1>
                <p className="text-blue-100 text-lg">Get to know my background and skills</p>
            </div>

            {/* Main Content */}
            <div className="bg-gradient-to-tr from-regal-gray-opacity via-royal-blue-opacity to-black rounded-lg shadow-md overflow-hidden border-6 border-royal-gold-solid">
                <div className="flex flex-col md:flex-row">
                    {/* Headshot */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-6 md:p-8 border-b-6 md:border-b-0 md:border-r-6 border-royal-gold-solid">
                        <Headshot src="/portfolio/headshot/headshot.jpg" alt="Headshot" className="w-32 h-32 sm:w-64 sm:h-64" />
                        <Contact />
                    </div>

                    {/* About Content */}
                    <div className="w-full md:w-2/3 p-6 md:p-8">
                        <div className="space-y-6">
                            {/* Bio Section */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
                                    Introduction
                                </h2>
                                <p className="text-white leading-relaxed text-lg">
                                    👋 Hello my name is <strong>Timmy Tram</strong>.
                                    <br />
                                    An aspiring full-stack developer from San Francisco, California. I have a passion for creating web application and enjoy working on both the frontend and backend. I am always eager to learn new technologies and improve my skills.
                                </p>
                            </section>

                            {/* Skills Section */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
                                    Key Skills
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {['Frontend Development', 'Backend Development'].map((skill, index) => (
                                        <div key={index} className="flex items-start">
                                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 mt-1">
                                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <span className="text-white">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Resume CTA */}
                            <div className="flex justify-center mt-6">
                                <a
                                    href="/portfolio/pdfs/Timmy-Tram-Resume.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-royal-gold-solid text-white rounded-lg hover:bg-royal-gold-solid-hover transition-colors text-lg font-medium shadow-md"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    View My Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;