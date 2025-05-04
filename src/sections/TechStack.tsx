import TechIcon from "../components/TechIcon";
import { FaJava, FaHtml5, FaCss3, FaPython, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiTypescript, SiExpress, SiPostgresql, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiPhotoshop } from "react-icons/di";

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
                    <TechIcon size={60} tech="Java"><FaJava size={30} /></TechIcon>
                    <TechIcon size={60} tech="Python"><FaPython size={30} /></TechIcon>
                    <TechIcon size={60} tech="TypeScript"><SiTypescript size={30} /></TechIcon>
                    <TechIcon size={60} tech="JavaScript"><IoLogoJavascript size={30} /></TechIcon>
                </Section>

                {/* Backend */}
                <Section title="Backend">
                    <TechIcon size={60} tech="Spring Boot"><SiSpringboot size={30} /></TechIcon>
                    <TechIcon size={60} tech="ExpressJS"><SiExpress size={30} /></TechIcon>
                    <TechIcon size={60} tech="NodeJS"><FaNodeJs size={30} /></TechIcon>
                </Section>

                {/* Frontend */}
                <Section title="Frontend">
                    <TechIcon size={60} tech="ReactJS"><GrReactjs size={30} /></TechIcon>
                    <TechIcon size={60} tech="NextJS"><RiNextjsFill size={30} /></TechIcon>
                    <TechIcon size={60} tech="Tailwind CSS"><RiTailwindCssFill size={30} /></TechIcon>
                    <TechIcon size={60} tech="HTML5"><FaHtml5 size={30} /></TechIcon>
                    <TechIcon size={60} tech="CSS3"><FaCss3 size={30} /></TechIcon>
                </Section>

                {/* Databases */}
                <Section title="Databases">
                    <TechIcon size={60} tech="MySQL"><GrMysql size={30} /></TechIcon>
                    <TechIcon size={60} tech="PostgreSQL"><SiPostgresql size={30} /></TechIcon>
                    <TechIcon size={60} tech="MongoDB"><SiMongodb size={30} /></TechIcon>
                </Section>

                {/* Tools */}
                <Section title="Tools">
                    <TechIcon size={60} tech="Git"><FaGitAlt size={30} /></TechIcon>
                    <TechIcon size={60} tech="Photoshop"><DiPhotoshop size={30} /></TechIcon>
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