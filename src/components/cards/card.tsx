import './styles/cards.css';

interface CardProps {
    title: string;
    image: string;
    description: string;
    onClick?: () => void;
}

const Card = ({ title, image, description, onClick }: CardProps) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Card;