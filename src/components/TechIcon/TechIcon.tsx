import React, { useState, useEffect } from 'react';

interface TechIconProps {
    name: string;
    size?: string | number;
}

const TechIcon = ({ name, size = '50px' }: TechIconProps) => {
    const [IconComponent, setIconComponent] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        const loadIcon = async () => {
            try {
                // Dynamically import the icon based on the name
                const iconModule = await import(`../../assets/techIcons/${name}.svg?react`);
                setIconComponent(<iconModule.default width={size} height={size} />);
            } catch (error) {
                console.error("Icon not found:", error);
                setIconComponent("Icon not found");
            }
        };

        loadIcon();
    }, [name, size]);

    return (
        <div style={{ width: size, height: size }}>
            {IconComponent}
        </div>
    );
};

export default TechIcon;
