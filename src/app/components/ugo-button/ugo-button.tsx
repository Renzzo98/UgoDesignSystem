import './ugo-button.css';

import { FC } from 'react';
import { StyleTypes } from '../../models/constants/styleTypes';

interface UgoButtonProps {
    contentText: string;
    type: StyleTypes;
}

const UgoButton: FC<UgoButtonProps> = ({ contentText, type }) => {
        
    const fileName = "HugoRenzzoResume.pdf";

    const renderButtonType = () => {
        switch (type) {
            case StyleTypes.Secondary:
                return (
                    <a className='ugo-button secondary' href={`${process.env.PUBLIC_URL}/${fileName}`}>{ contentText }</a>
            );
            case StyleTypes.Tertiary:
                return (
                    <a className='ugo-button tertiary' href={`${process.env.PUBLIC_URL}/${fileName}`}>{ contentText }</a>
            );
            default:
                return (
                    <a className='ugo-button' href={`${process.env.PUBLIC_URL}/${fileName}`}>{ contentText }</a>
            );
        };
    }

  
    return (
        <div className='ugo-button-container'>
            {renderButtonType()}
        </div>
    );
}

export default UgoButton;