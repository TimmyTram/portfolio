import React from "react";
import { FaJava, FaHtml5, FaCss3, FaPython, FaGitAlt, FaNodeJs, FaSwift } from "react-icons/fa";
import { SiSpringboot, SiTypescript, SiExpress, SiPostgresql, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiPhotoshop } from "react-icons/di";

const options = {
    className: "text-comet-blue-solid",
    size: 30,
}

export const techIconMap: Record<string, React.ReactNode> = {
    Java: React.createElement(FaJava, options),
    Python: React.createElement(FaPython, options),
    JavaScript: React.createElement(IoLogoJavascript, options),
    TypeScript: React.createElement(SiTypescript, options),
    HTML5: React.createElement(FaHtml5, options),
    CSS3: React.createElement(FaCss3, options),
    "Spring Boot": React.createElement(SiSpringboot, options),
    ExpressJS: React.createElement(SiExpress, options),
    NodeJS: React.createElement(FaNodeJs, options),
    ReactJS: React.createElement(GrReactjs, options),
    NextJS: React.createElement(RiNextjsFill, options),
    "Tailwind CSS": React.createElement(RiTailwindCssFill, options),
    Git: React.createElement(FaGitAlt, options),
    Photoshop: React.createElement(DiPhotoshop, options),
    MySQL: React.createElement(GrMysql, options),
    PostgreSQL: React.createElement(SiPostgresql, options),
    MongoDB: React.createElement(SiMongodb, options),
    Swift: React.createElement(FaSwift, options),
};
