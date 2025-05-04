import Card from "../components/Card";
import { projects } from "../constants/constants";

const Projects = () => {
    return (
        <div id="Projects" className="w-full flex flex-col items-center mt-4">
            <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8 border-6 border-royal-gold-solid">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">My Projects</h1>
                <p className="text-blue-100 text-lg">My Programming Projects</p>
            </div>
            <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:w-full">   
                {projects.map((project, index: number) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        slug={project.slug}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;