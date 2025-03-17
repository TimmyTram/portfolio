import './styles/experienceCard.css';

interface ExperienceCardProps {
    title: string;
    image: string;
    description: string;
    timeline?: string;
    cover?: boolean;
}

const ExperienceCard = ({ title, image, description, timeline, cover }: ExperienceCardProps) => {
    return (
        <div className="experience-card">
            <img src={image} alt={title} style={{objectFit: cover ? "cover" : "contain"}} />
            <div className="experience-card-content">
                <h2>{title}</h2>
                <p>{timeline}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;