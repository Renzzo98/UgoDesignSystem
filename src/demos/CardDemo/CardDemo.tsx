import './CardDemo.css';

import { FC } from 'react';
import { StyleTypes } from '../../constants/styleTypes';
import Card from '../../components/Card/Card';

import mouseIconWhite from "../../assets/icons/Mouse_Icon_White.png";
import mouseIconBlack from "../../assets/icons/Mouse_Icon_Black.png";


interface CardDemoProps {
    isMobile: boolean;
}

const CardDemo: FC<CardDemoProps> = ({ isMobile }) => {

    return(
        <div className='cardDemoContainer'>
            <div className='cardRow' style={{ flexDirection: isMobile? "column" : "row"}}>
                <Card iconPath={mouseIconWhite} type={StyleTypes.Primary} title="Test" subTitle="This is an testing to try out the card compomonent. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah." iconSize={6}/>
                <h1 className='cardTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Primary Type</h1>
            </div>
            <div className='cardRow' style={{ flexDirection: isMobile? "column" : "row"}}>
                <Card iconPath={mouseIconBlack} type={StyleTypes.Secondary} title="Test" subTitle="This is an testing to try out the card compomonent. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah." iconSize={6}/>
                <h1 className='cardTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Secondary Type</h1>
            </div>
            <div className='cardRow' style={{ flexDirection: isMobile? "column" : "row"}}>
                <Card iconPath={mouseIconWhite} type={StyleTypes.Tertiary} title="Test" subTitle="This is an testing to try out the card compomonent. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah." iconSize={6}/>
                <h1 className='cardTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Tertiary Type</h1>
            </div>
        </div>
    )

}

export default CardDemo;