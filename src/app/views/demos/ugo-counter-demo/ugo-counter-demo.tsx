import './ugo-counter-demo.css';

import { FC } from 'react';
import { StyleTypes } from '../../../models/constants/styleTypes';
import CounterBox from '../../../components/ugo-counter-box/ugo-counter-box';
import { useGlobalState } from '../../../../GlobalStateProvider';



const UgoCounterDemo: FC = () => {

    const { isMobile } = useGlobalState();

    return(
        <div className='ugo-counter-demo-container' style={{ alignItems: isMobile? 'center' : 'flex-start'}}>
            <div className='ugo-counter-row' style={{ flexDirection: isMobile? "column" : "row"}}>
                <CounterBox maxInt={100} subTitle="Counter" type={StyleTypes.Primary} />
                <h1 className='ugo-counter-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Primary</h1>
            </div>
            <div className='ugo-counter-row' style={{ flexDirection: isMobile? "column" : "row"}}>
                <CounterBox maxInt={100} subTitle="Counter" type={StyleTypes.Secondary} />
                <h1 className='ugo-counter-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Secondary</h1>
            </div>
            <div className='ugo-counter-row' style={{ flexDirection: isMobile? "column" : "row"}}>
                <CounterBox maxInt={100} subTitle="Counter" type={StyleTypes.Tertiary} />
                <h1 className='ugo-counter-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Tertiary</h1>
            </div>
        </div>
    )
}

export default UgoCounterDemo;