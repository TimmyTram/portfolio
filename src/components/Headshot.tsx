interface HeadshotProps {
    src: string;
    alt: string;
    className?: string;
}

const Headshot = ({ src, alt, className }: HeadshotProps) => {
    return (
        <div
            className={`flex items-center justify-center rounded-full overflow-hidden flex-shrink-0 border-4 border-royal-gold-solid ${className}`}
        >
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
};

export default Headshot;