import './ugo-card.css';

import { FC } from 'react';
import { useGlobalState } from '../../../GlobalStateProvider';
import { StyleTypes } from '../../models/constants';

interface UgoCardProps {
    title: string;
    subTitle: string;
    type: StyleTypes;
    iconPath?: string;
    iconSize?: number;
}

const UgoCard: FC<UgoCardProps> = ({ title, subTitle, type, iconPath, iconSize }) => {
    
    const { isMobile } = useGlobalState();

    const renderCardType = () => {
        switch (type) {
          case StyleTypes.Secondary:
            return (
                <div className='ugo-card-container secondary-card'>
                    <img src={iconPath} alt="Service Icon" className="image-hover-effect" style={{ 
                        height: `${iconSize}rem`,
                        width: `${iconSize}rem`
                    }} />
                    <div className='ugo-card-text-content' style={{
                        paddingLeft: iconSize ? `${iconSize/3}rem` : '',
                        maxWidth: isMobile ? '13rem' : '25rem'
                    }}>
                        <p className={`ugo-card-title secondary-text`}>{title}</p>
                        <p className={`ugo-card-sub-title secondary-text`}>{subTitle}</p>
                    </div>
                </div>
            );
          case StyleTypes.Tertiary:
            return (
                <div className='ugo-card-container tertiary-card'>
                    <img src={iconPath} alt="Service Icon" className="image-hover-effect" style={{ 
                        height: `${iconSize}rem`,
                        width: `${iconSize}rem`
                    }} />
                    <div className='ugo-card-text-content' style={{
                        paddingLeft: iconSize ? `${iconSize/3}rem` : '',
                        maxWidth: isMobile ? '13rem' : '25rem'
                    }}>
                        <p className={`ugo-card-title tertiary-text`}>{title}</p>
                        <p className={`ugo-card-sub-title tertiary-text`}>{subTitle}</p>
                    </div>
                </div>
            );
          default:
            return (
                <div className='ugo-card-container primary-card'>
                    <img src={iconPath} alt="Service Icon" className="image-hover-effect" style={{ 
                        height: `${iconSize}rem`,
                        width: `${iconSize}rem`
                    }} />
                    <div className='ugo-card-text-content' style={{
                        paddingLeft: iconSize ? `${iconSize/3}rem` : '',
                        maxWidth: isMobile ? '13rem' : '25rem'
                    }}>
                        <p className={`ugo-card-title primary-text`}>{title}</p>
                        <p className={`ugo-card-sub-title primary-text`}>{subTitle}</p>
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

export default UgoCard;