import TechIcon from "../components/TechIcon";
import { techIconMap } from "../constants/techIconMaps";

const TechStack = () => {
    return (
        <>
            {/* Header */}
            <div id="Technologies" className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8 border-6 border-royal-gold-solid">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tech Stack</h1>
                <p className="text-blue-100 text-lg">Technologies and tools I use regularly.</p>
            </div>

            {/* Grouped Tech */}
            <div className="space-y-8">
                {/* Languages */}
                <Section title="Languages">
                    <TechIcon size={60} tech="Java">{techIconMap['Java']}</TechIcon>
                    <TechIcon size={60} tech="Python">{techIconMap['Python']}</TechIcon>
                    <TechIcon size={60} tech="TypeScript">{techIconMap['TypeScript']}</TechIcon>
                    <TechIcon size={60} tech="JavaScript">{techIconMap['JavaScript']}</TechIcon>
                </Section>

                {/* Backend */}
                <Section title="Backend">
                    <TechIcon size={60} tech="Spring Boot">{techIconMap['Spring Boot']}</TechIcon>
                    <TechIcon size={60} tech="ExpressJS">{techIconMap['ExpressJS']}</TechIcon>
                    <TechIcon size={60} tech="NodeJS">{techIconMap['NodeJS']}</TechIcon>
                </Section>

                {/* Frontend */}
                <Section title="Frontend">
                    <TechIcon size={60} tech="ReactJS">{techIconMap['ReactJS']}</TechIcon>
                    <TechIcon size={60} tech="NextJS">{techIconMap['NextJS']}</TechIcon>
                    <TechIcon size={60} tech="Tailwind CSS">{techIconMap['Tailwind CSS']}</TechIcon>
                    <TechIcon size={60} tech="HTML5">{techIconMap['HTML5']}</TechIcon>
                    <TechIcon size={60} tech="CSS3">{techIconMap['CSS3']}</TechIcon>
                </Section>

                {/* Databases */}
                <Section title="Databases">
                    <TechIcon size={60} tech="MySQL">{techIconMap['MySQL']}</TechIcon>
                    <TechIcon size={60} tech="PostgreSQL">{techIconMap['PostgreSQL']}</TechIcon>
                    <TechIcon size={60} tech="MongoDB">{techIconMap['MongoDB']}</TechIcon>
                </Section>

                {/* Tools */}
                <Section title="Tools">
                    <TechIcon size={60} tech="Git">{techIconMap['Git']}</TechIcon>
                    <TechIcon size={60} tech="Photoshop">{techIconMap['Photoshop']}</TechIcon>
                </Section>
            </div>
        </>
    );
};

// Reusable Section Component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="w-full">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
            {title}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {children}
        </div>
    </div>
);

export default TechStack;