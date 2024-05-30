import './ButtonDemo.css';

import { FC } from 'react';
import { StyleTypes } from '../../constants/styleTypes';
import { motion } from 'framer-motion';
import Button from '../../components/Button/Button';


interface ButtonDemoProps {
    isMobile: boolean;
}

const ButtonDemo: FC<ButtonDemoProps> = ({ isMobile }) => {

    return(
        <div className='buttonDemoContainer' style={{ alignItems: isMobile? "center" : "flex-start"}}>
            <div className='buttonRow' style={{ flexDirection: isMobile? "column" : "row"}}>
                <motion.div
                        initial={{ opacity: 1 }}
                        whileInView="animate"
                        transition ={{
                            type: "spring",
                            bounce: 0.5,
                            duration: 0.8,
                            ease: "backInOut",
                            repeat: 1,
                            repeatType: "reverse",
                        }}
                        variants={{
                            animate: { 
                                opacity: 1,
                                scale: [1, 1.5, 2],
                            },
                        }}
                >
                    <div>
                        <Button type={StyleTypes.Primary} contentText='Test' />
                    </div>
                </motion.div>
                <h1 className='buttonTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Primary</h1>
            </div>
            <div className='buttonRow' style={{ flexDirection: isMobile? "column" : "row"}}>
            <motion.div
                        initial={{ opacity: 1 }}
                        whileInView="animate"
                        transition ={{
                            type: "spring",
                            bounce: 0.5,
                            duration: 0.8,
                            ease: "backInOut",
                            repeat: 1,
                            repeatType: "reverse",
                        }}
                        variants={{
                            animate: { 
                                opacity: 1,
                                scale: [1, 1.5, 2],
                            },
                        }}
                >
                    <div>
                        <Button type={StyleTypes.Secondary} contentText='Test' />
                    </div>
                </motion.div>
                <h1 className='buttonTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Secondary</h1>
            </div>
            <div className='buttonRow' style={{ flexDirection: isMobile? "column" : "row"}}>
            <motion.div
                        initial={{ opacity: 1 }}
                        whileInView="animate"
                        transition ={{
                            type: "spring",
                            bounce: 0.5,
                            duration: 0.8,
                            ease: "backInOut",
                            repeat: 1,
                            repeatType: "reverse",
                        }}
                        variants={{
                            animate: { 
                                opacity: 1,
                                scale: [1, 1.5, 2],
                            },
                        }}
                >
                    <div>
                        <Button type={StyleTypes.Tertiary} contentText='Test' />
                    </div>
                </motion.div>
                <h1 className='buttonTitle' style={{ paddingLeft: isMobile? "" : "4rem" }}>Tertiary</h1>
            </div>
        </div>
    )

}

export default ButtonDemo;