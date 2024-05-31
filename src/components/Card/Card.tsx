import './Card.css';

import { FC } from 'react';
import { StyleTypes } from '../../constants/styleTypes';
import { useGlobalState } from '../../GlobalStateProvider';

interface CardProps {
    title: string;
    subTitle: string;
    type: StyleTypes;
    iconPath?: string;
    iconSize?: number;
}

const Card: FC<CardProps> = ({ title, subTitle, type, iconPath, iconSize }) => {
    
    const { isMobile } = useGlobalState();

    const renderCardType = () => {
        switch (type) {
          case StyleTypes.Secondary:
            return (
                <div className='cardContainer secondaryCard'>
                    <img src={iconPath} alt="Service Icon" className="image-hover-effect" style={{ 
                        height: `${iconSize}rem`,
                        width: `${iconSize}rem`
                    }} />
                    <div className='cardTextContent' style={{
                        paddingLeft: iconSize ? `${iconSize/3}rem` : '',
                        maxWidth: isMobile ? '13rem' : '25rem'
                    }}>
                        <p className={`cardTitle secondaryText`}>{title}</p>
                        <p className={`cardSubTitle secondaryText`}>{subTitle}</p>
                    </div>
                </div>
            );
          case StyleTypes.Tertiary:
            return (
                <div className='cardContainer tertiaryCard'>
                    <img src={iconPath} alt="Service Icon" className="image-hover-effect" style={{ 
                        height: `${iconSize}rem`,
                        width: `${iconSize}rem`
                    }} />
                    <div className='cardTextContent' style={{
                        paddingLeft: iconSize ? `${iconSize/3}rem` : '',
                        maxWidth: isMobile ? '13rem' : '25rem'
                    }}>
                        <p className={`cardTitle tertiaryText`}>{title}</p>
                        <p className={`cardSubTitle tertiaryText`}>{subTitle}</p>
                    </div>
                </div>
            );
          default:
            return (
                <div className='cardContainer primaryCard'>
                    <img src={iconPath} alt="Service Icon" className="image-hover-effect" style={{ 
                        height: `${iconSize}rem`,
                        width: `${iconSize}rem`
                    }} />
                    <div className='cardTextContent' style={{
                        paddingLeft: iconSize ? `${iconSize/3}rem` : '',
                        maxWidth: isMobile ? '13rem' : '25rem'
                    }}>
                        <p className={`cardTitle primaryText`}>{title}</p>
                        <p className={`cardSubTitle primaryText`}>{subTitle}</p>
                    </div>
                </div>
            );
        }
      };

    return (
        <div>
            {renderCardType()}
        </div>
    ) 
}

export default Card;