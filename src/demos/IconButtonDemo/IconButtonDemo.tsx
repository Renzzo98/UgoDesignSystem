import './IconButtonDemo.css';

import { FC } from 'react';
import { StyleTypes } from '../../constants/styleTypes';
import { motion } from 'framer-motion';
import IconButton from '../../components/IconButton/IconButton';

import mouseIcon from "../../assets/icons/Mouse_Icon_White.png";


interface IconButtonDemoProps {
    isMobile: boolean;
}

const IconButtonDemo: FC<IconButtonDemoProps> = ({ isMobile }) => {


    return(
        <div className='iconButtonDemoContainer' style={{ alignItems: isMobile? "center" : "flex-start"}}>
            <div className='iconButtonRow' style={{ flexDirection: isMobile? "column" : "row"}}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView="animate"
                    transition ={{
                        delay: 1,
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
                <h1 className='iconButtonTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Primary</h1>
            </div>
            <div className='iconButtonRow' style={{ flexDirection: isMobile? "column" : "row"}}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView="animate"
                    transition ={{
                        delay: 1,
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
                <h1 className='iconButtonTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Secondary</h1>
            </div>
            <div className='iconButtonRow' style={{ flexDirection: isMobile? "column" : "row"}}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView="animate"
                    transition ={{
                        delay: 1,
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
                <h1 className='iconButtonTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Tertiary</h1>
            </div>
        </div>
    )

}

export default IconButtonDemo;