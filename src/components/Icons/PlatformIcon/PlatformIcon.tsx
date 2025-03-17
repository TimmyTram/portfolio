import { useState, useEffect } from 'react';

interface PlatformIconProps {
    filename: string;
    size?: string | number;
    link: string;
}

const PlatformIcon = ({ filename, size = '55px', link }: PlatformIconProps) => {
    const [IconComponent, setIconComponent] = useState<React.ReactNode | null>(null);

    // dynamically import icon based on name prop which gets it from the asset folder
    useEffect(() => {
        const loadIcon = async () => {
            try {
                const iconModule = await import(`../../../assets/platforms/${filename}.svg?react`);
                setIconComponent(<iconModule.default width={size} height={size} />);
            } catch (error) {
                console.error("Icon not found:", error);
                setIconComponent("Icon not found");
            }
        };

        loadIcon();
    }, [filename, size]);


    return (
        <div>
            <a href={link} target="_blank" rel="noreferrer">
                {IconComponent}
            </a>
        </div>
    );
};

export default PlatformIcon;