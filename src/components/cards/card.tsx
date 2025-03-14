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
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;