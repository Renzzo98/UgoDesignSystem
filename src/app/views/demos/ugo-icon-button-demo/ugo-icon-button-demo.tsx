import './ugo-icon-button-demo.css';

import { FC } from 'react';
import { StyleTypes } from '../../../models/constants/styleTypes';
import { motion } from 'framer-motion';
import { useGlobalState } from '../../../../GlobalStateProvider';
import IconButton from '../../../components/ugo-icon-button/ugo-icon-button';

import mouseIcon from "../../../../assets/icons/Mouse_Icon_White.png";


interface UgoIconButtonDemoProps {}

const UgoIconButtonDemo: FC<UgoIconButtonDemoProps> = () => {

    const { isMobile } = useGlobalState();

    return(
        <div className='ugo-icon-button-demo-container' style={{ alignItems: isMobile? "center" : "flex-start"}}>
            <div className='ugo-icon-button-row' style={{ flexDirection: isMobile? "column" : "row"}}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition ={{
                        duration: 2,
                        ease: "backOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeatDelay: 1
                    }}
                    variants={{
                        animate: { 
                            opacity: 1,
                            scale: [1, 2, 2, 1.5, 1],
                            rotate: [0, 360],
                            borderRadius: ["0%", "50%", "0%"]
                        },
                    }}
                >
                    <div>
                        <IconButton iconPath={mouseIcon} type={StyleTypes.Primary} link="" iconSize={6}/>
                    </div>
                </motion.div>
                <h1 className='ugo-icon-button-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Primary</h1>
            </div>
            <div className='ugo-icon-button-row' style={{ flexDirection: isMobile? "column" : "row"}}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition ={{
                        duration: 2,
                        ease: "backOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeatDelay: 1
                    }}
                    variants={{
                        animate: { 
                            opacity: 1,
                            scale: [1, 2, 2, 1.5, 1],
                            rotate: [0, 360],
                            borderRadius: ["0%", "50%", "0%"]
                        },
                    }}
                >
                    <div>
                        <IconButton iconPath={mouseIcon} type={StyleTypes.Secondary} link="" iconSize={6}/>
                    </div>
                </motion.div>
                <h1 className='ugo-icon-button-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Secondary</h1>
            </div>
            <div className='ugo-icon-button-row' style={{ flexDirection: isMobile? "column" : "row"}}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition ={{
                        duration: 2,
                        ease: "backOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeatDelay: 1
                    }}
                    variants={{
                        animate: { 
                            opacity: 1,
                            scale: [1, 2, 2, 1.5, 1],
                            rotate: [0, 360],
                            borderRadius: ["0%", "50%", "0%"]
                        },
                    }}
                >
                    <div>
                        <IconButton iconPath={mouseIcon} type={StyleTypes.Tertiary} link="" iconSize={6}/>
                    </div>
                </motion.div>
                <h1 className='ugo-icon-button-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Tertiary</h1>
            </div>
        </div>
    )

}

export default UgoIconButtonDemo;