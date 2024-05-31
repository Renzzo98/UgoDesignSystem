import './ugo-button-demo.css';

import { FC } from 'react';
import { StyleTypes } from '../../../models/constants/styleTypes';
import { motion } from 'framer-motion';
import Button from '../../../components/ugo-button/ugo-button';
import { useGlobalState } from '../../../../GlobalStateProvider';

const UgoButtonDemo: FC = () => {

    const { isMobile } = useGlobalState();

    return(
        <div className='ugo-button-demo-container' style={{ alignItems: isMobile? "center" : "flex-start"}}>
            <div className='ugo-button-row' style={{ flexDirection: isMobile? "column" : "row"}}>
                <motion.div
                        initial={{ opacity: 1 }}
                        whileInView="animate"
                        viewport={{ once: true }}
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
                <h1 className='ugo-button-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Primary</h1>
            </div>
            <div className='ugo-button-row' style={{ flexDirection: isMobile? "column" : "row"}}>
            <motion.div
                        initial={{ opacity: 1 }}
                        whileInView="animate"
                        viewport={{ once: true }}
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
                <h1 className='ugo-button-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Secondary</h1>
            </div>
            <div className='ugo-button-row' style={{ flexDirection: isMobile? "column" : "row"}}>
            <motion.div
                        initial={{ opacity: 1 }}
                        whileInView="animate"
                        viewport={{ once: true }}
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
                <h1 className='ugo-button-title' style={{ paddingLeft: isMobile? "" : "4rem" }}>Tertiary</h1>
            </div>
        </div>
    )

}

export default UgoButtonDemo;