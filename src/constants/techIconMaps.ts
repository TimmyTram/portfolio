import React from "react";
import { FaJava, FaHtml5, FaCss3, FaPython, FaGitAlt, FaNodeJs, FaSwift } from "react-icons/fa";
import { SiSpringboot, SiTypescript, SiExpress, SiPostgresql, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiPhotoshop } from "react-icons/di";



export const techIconMap: Record<string, React.ReactNode> = {
    Java: React.createElement(FaJava),
    Python: React.createElement(FaPython),
    JavaScript: React.createElement(IoLogoJavascript),
    TypeScript: React.createElement(SiTypescript),
    HTML5: React.createElement(FaHtml5),
    CSS3: React.createElement(FaCss3),
    "Spring Boot": React.createElement(SiSpringboot),
    ExpressJS: React.createElement(SiExpress),
    NodeJS: React.createElement(FaNodeJs),
    ReactJS: React.createElement(GrReactjs),
    NextJS: React.createElement(RiNextjsFill),
    "Tailwind CSS": React.createElement(RiTailwindCssFill),
    Git: React.createElement(FaGitAlt),
    Photoshop: React.createElement(DiPhotoshop),
    MySQL: React.createElement(GrMysql),
    PostgreSQL: React.createElement(SiPostgresql),
    MongoDB: React.createElement(SiMongodb),
    Swift: React.createElement(FaSwift),
};
