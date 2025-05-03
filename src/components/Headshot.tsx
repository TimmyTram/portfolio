interface HeadshotProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

const Headshot = ({ src, alt, width = 256, height = 256 }: HeadshotProps) => {
    return (
        <div
            className="flex items-center justify-center rounded-full overflow-hidden flex-shrink-0 border-4 border-royal-gold-solid"
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
};

export default Headshot;