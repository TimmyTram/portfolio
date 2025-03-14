import React, { useState, useEffect } from 'react';
import './techIcon.css';

interface TechIconProps {
    filename: string;
    displayname?: string;
    size?: string | number;
    fontSize?: string | number;
}

const TechIcon = ({ filename, displayname, size = '55px',  fontSize = '15px'}: TechIconProps) => {
    const [IconComponent, setIconComponent] = useState<React.ReactNode | null>(null);

    // dynamically import icon based on name prop which gets it from the asset folder
    useEffect(() => {
        const loadIcon = async () => {
            try {
                const iconModule = await import(`../../../assets/techIcons/${filename}.svg?react`);
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
            <div className="rounded" style={{ width: size, height: size }}>
                {IconComponent}
            </div>
            <p className="display-text" style={{ fontSize: fontSize }}>
                {displayname}
            </p>
        </div>
    );
};

export default TechIcon;
