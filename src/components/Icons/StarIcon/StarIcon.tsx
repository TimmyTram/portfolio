import DecoAStar from '../../../assets/stars/deco_star_a.svg?react';
import DecoBStar from '../../../assets/stars/deco_star_b.svg?react';
import './StarIcon.css';

interface StarIconProps {
    type: string;
}

const StarIcon = ({ type }: StarIconProps) => {
    switch (type) {
        case 'a':
            return (
                <div className="sticky-a">
                    <DecoAStar />
                </div>
            );
        case 'b':
            return (
                <div className="sticky-b">
                    <DecoBStar />
                </div>
            );
        default:
            return null;
    }
};

export default StarIcon;
