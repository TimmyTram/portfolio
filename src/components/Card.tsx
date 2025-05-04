import { useNavigate } from "react-router-dom";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    slug: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, slug }) => {
    const navigate = useNavigate();

    return (
        <div
            className="card max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/project/${slug}`)}
        >
            <img
                src={imageUrl}
                alt={title}
                className="card-image w-full h-48 object-cover"
            />
            <div className="card-content p-4">
                <h2 className="card-title text-lg font-semibold text-gray-800">
                    {title}
                </h2>
                <p className="card-description text-sm text-gray-600 mt-2">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;