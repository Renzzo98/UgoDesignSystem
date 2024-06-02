import './ugo-card-demo.css';

import { FC } from 'react';
import { StyleTypes } from '../../../models/constants/style-types';
import { useGlobalState } from '../../../../GlobalStateProvider';
import Card from '../../../components/ugo-card/ugo-card';

import mouseIconWhite from "../../../../assets/icons/Mouse_Icon_White.png";
import mouseIconBlack from "../../../../assets/icons/Mouse_Icon_Black.png";


const UgoCardDemo: FC = () => {

    const { isMobile } = useGlobalState();

    return(
        <div className='ugo-card-demo-container'>
            <div className='ugo-card-row' style={{ flexDirection: isMobile? "column" : "row"}}>
                <Card iconPath={mouseIconWhite} type={StyleTypes.Primary} title="Test" subTitle="This is an testing to try out the card compomonent. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah." iconSize={6}/>
                <h1 className='ugo-card-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Primary Type</h1>
            </div>
            <div className='ugo-card-row' style={{ flexDirection: isMobile? "column" : "row"}}>
                <Card iconPath={mouseIconBlack} type={StyleTypes.Secondary} title="Test" subTitle="This is an testing to try out the card compomonent. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah." iconSize={6}/>
                <h1 className='ugo-card-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Secondary Type</h1>
            </div>
            <div className='ugo-card-row' style={{ flexDirection: isMobile? "column" : "row"}}>
                <Card iconPath={mouseIconWhite} type={StyleTypes.Tertiary} title="Test" subTitle="This is an testing to try out the card compomonent. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah." iconSize={6}/>
                <h1 className='ugo-card-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Tertiary Type</h1>
            </div>
        </div>
    )

}

export default UgoCardDemo;