import './Button.css';

import { StyleTypes } from '../../constants/styleTypes';
import { FC } from 'react';

interface IconButtonButtonProps {
    contentText: string;
    type: StyleTypes;
}

const Button: FC<IconButtonButtonProps> = ({ contentText, type }) => {
        
    const fileName = "HugoRenzzoResume.pdf";

    switch (type){
        case StyleTypes.Secondary:
            return (
                <div className='btn-container'>
                    <a className='btn secondary' href={`${process.env.PUBLIC_URL}/${fileName}`}>{ contentText }</a>
                </div>
            )
        case StyleTypes.Tertiary:
            return (
                <div className='btn-container'>
                    <a className='btn tertiary' href={`${process.env.PUBLIC_URL}/${fileName}`}>{ contentText }</a>
                </div>
            )
        default:
            return (
                <div className='btn-container'>
                    <a className='btn' href={`${process.env.PUBLIC_URL}/${fileName}`}>{ contentText }</a>
                </div>
            )
    }

}

export default Button;