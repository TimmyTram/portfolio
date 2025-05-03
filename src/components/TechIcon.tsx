interface TechIconProps {
    children: React.ReactNode;
    tech: string;
    size?: number;
}

const TechIcon = ({ children, tech, size = 24 }: TechIconProps) => {
    return (
        <div className="flex flex-col items-center">
            <div
                className="rounded-full overflow-hidden flex-shrink-0 border-4 border-royal-gold-solid flex flex-col items-center justify-center bg-black"
                style={{ width: `${size}px`, height: `${size}px` }}
            >
                {children}
            </div>
            <p className="text-center text-sm mt-1 text-royal-gold-solid font-semibold">{tech}</p>
        </div>
    );
};



export default TechIcon;