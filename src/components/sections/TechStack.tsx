import TechIcon from "../Icons/TechIcon/TechIcon";

const TechStack = () => {
    return (
        <div id="tech-stack" className="container">
            <div className="flex-col-container">
                <h1>Tech Stack:</h1>
                <div className="flex-row-container">
                    <TechIcon filename="java" displayname="Java" />
                    <TechIcon filename="python" displayname="Python"/>
                    <TechIcon filename="javascript" displayname="JavaScript"/>
                    <TechIcon filename="typescript" displayname="TypeScript"/>
                    <TechIcon filename="nodejs" displayname="Node.js"/>
                    <TechIcon filename="expressjs" displayname="ExpressJS"/>
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