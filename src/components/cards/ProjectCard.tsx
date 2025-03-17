import './styles/projectCards.css';

interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
    onClick?: () => void;
}

const ProjectCard = ({ title, image, description, onClick }: ProjectCardProps) => {
    return (
        <div className="project-card" onClick={onClick}>
            <img src={image} alt={title} />
            <div className="project-card-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;