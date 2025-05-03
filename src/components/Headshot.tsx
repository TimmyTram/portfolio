interface HeadshotProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

const Headshot = ({ src, alt, width = 32, height = 32 }: HeadshotProps) => {
    return (
        <div
            className={`rounded-full overflow-hidden flex-shrink-0 border-4 w-${width} h-${height}`}
        >
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
};

export default Headshot;