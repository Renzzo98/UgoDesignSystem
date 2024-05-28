import './Card.css';

import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';


interface CardProps {
    title: string;
    subTitle: string;
    iconPath: string;
    iconSize?: number;
    darkBackground?: boolean
}

const Card: FC<CardProps> = ({ title, subTitle, iconPath, iconSize, darkBackground }) => {
    
    const MobileView = useMediaQuery({ maxWidth: 1253 });

    return (
        <div className='CardContainer'>
            <img src={iconPath} alt="Service Icon" className="image-hover-effect" style={{ 
                height: `${iconSize}rem`,
                width: `${iconSize}rem`
            }} />
            <div className='cardTextContent' style={{
                paddingLeft: iconSize ? `${iconSize/3}rem` : '',
                maxWidth: MobileView ? '13rem' : '25rem'
            }}>
                <p className={`cardTitle ${darkBackground ? "dark" : ""}`}>{title}</p>
                <p className={`cardSubTitle ${darkBackground ? "dark" : ""}`}>{subTitle}</p>
            </div>
        </div>
    ) 
}

export default Card;