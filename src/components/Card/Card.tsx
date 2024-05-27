import './Card.css';

import { FC } from 'react';

interface CardProps {
    title: string;
    subTitle: string;
    iconPath: string;
    iconSize?: number;
    darkBackground?: boolean
}

const Card: FC<CardProps> = ({ title, subTitle, iconPath, iconSize, darkBackground }) => {
    
    return (
        <div className='CardContainer'>
            <img src={iconPath} alt="Service Icon" className="image-hover-effect" style={{ 
                height: `${iconSize}rem`,
                width: `${iconSize}rem`
            }} />
            <div className='cardTextContent' style={{
                paddingLeft: iconSize ? `${iconSize/3}rem` : ''
            }}>
                <p className={`cardTitle ${darkBackground ? "dark" : ""}`}>{title}</p>
                <p className={`cardSubTitle ${darkBackground ? "dark" : ""}`}>{subTitle}</p>
            </div>
        </div>
    ) 
}

export default Card;