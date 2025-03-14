import './styles/button.css';

interface ButtonProps {
    href?: string;
    children: string;
};


const Button = ({ children, href }: ButtonProps) => {

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <button
                className="custom-btn"
            >
                {children}
            </button>
        </a>
    );
};

export default Button;