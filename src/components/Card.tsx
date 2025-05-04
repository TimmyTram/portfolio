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
            className="max-w-md w-full h-full mb-6 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-6 border-royal-gold-solid cursor-pointer"
            onClick={() => navigate(`/project/${slug}`)}
        >
            <div className="h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 h-full">
                <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
                <p className="text-blue-100 text-sm">{description}</p>

                <div className="mt-4 flex justify-end">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-800 text-white">
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;