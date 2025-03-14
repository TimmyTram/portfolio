import TechIcon from "../TechIcon/TechIcon";

const TechStack = () => {
    return (
        <div className="container">
            <div className="flex-col-container">
                <h2>Tech Stack:</h2>
                <div className="flex-row-container">
                    <TechIcon filename="java" displayname="Java" />
                    <TechIcon filename="python" displayname="Python"/>
                    <TechIcon filename="javascript" displayname="JavaScript"/>
                    <TechIcon filename="typescript" displayname="TypeScript"/>
                    <TechIcon filename="nodejs" displayname="Node.js"/>
                    <TechIcon filename="react" displayname="React"/>
                    <TechIcon filename="nextjs" displayname="Next.JS"/>
                    <TechIcon filename="mysql" displayname="MySQL"/>
                    <TechIcon filename="mongodb" displayname="MongoDB"/>
                    <TechIcon filename="prisma" displayname="Prisma"/>
                    <TechIcon filename="swift" displayname="Swift"/>
                    <TechIcon filename="tailwindcss" displayname="TailwindCSS"/>
                    <TechIcon filename="html" displayname="HTML5"/>
                    <TechIcon filename="css" displayname="CSS3"/>
                </div>
            </div>
        </div>
    );
}

export default TechStack;