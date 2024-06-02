import './CounterDemo.css';

import { FC } from 'react';
import { StyleTypes } from '../../constants/styleTypes';
import CounterBox from '../../components/CounterBox/CounterBox';
import { useGlobalState } from '../../GlobalStateProvider';


interface CounterDemoProps {}

const CounterDemo: FC<CounterDemoProps> = () => {

    const { isMobile } = useGlobalState();

    return(
        <div className='counterDemoContainer' style={{ alignItems: isMobile? 'center' : 'flex-start'}}>
            <div className='counterRow' style={{ flexDirection: isMobile? "column" : "row"}}>
                <CounterBox maxInt={100} subTitle="Counter" type={StyleTypes.Primary} />
                <h1 className='counterTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Primary</h1>
            </div>
            <div className='counterRow' style={{ flexDirection: isMobile? "column" : "row"}}>
                <CounterBox maxInt={100} subTitle="Counter" type={StyleTypes.Secondary} />
                <h1 className='counterTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Secondary</h1>
            </div>
            <div className='counterRow' style={{ flexDirection: isMobile? "column" : "row"}}>
                <CounterBox maxInt={100} subTitle="Counter" type={StyleTypes.Tertiary} />
                <h1 className='counterTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Tertiary</h1>
            </div>
        </div>
    )

}

export default CounterDemo;