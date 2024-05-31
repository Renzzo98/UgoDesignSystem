import "./HomeContent.css";

import { FC, useRef, useEffect } from "react";
import { explorePage } from "../../constants";
import { motion, useAnimation, useInView } from 'framer-motion';
import { StyleTypes } from "../../constants/styleTypes";
import { useGlobalState } from "../../GlobalStateProvider";
import IconButton from "../../components/IconButton/IconButton";

import mouseWhiteSolid from "../../assets/icons/Mouse_Icon_White_Solid.png";

interface HomeContentProps {}

const HomeContent: FC<HomeContentProps> = () => {

    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref);

    const { isMobile } = useGlobalState();

    useEffect(() => {
        controls.start("animate");
    }, [isInView, controls]);

    return (
        <div className={`home-page-container ${isMobile ? 'mobile-view' : ''}`}>
            <p className="sub-header">{explorePage.subHeader}</p>
            <motion.div
                initial={{ opacity: 0, x: -200  }}
                viewport={{ once: true }}
                variants={{
                    animate: {
                        opacity: 1, 
                        x: 0
                    }
                }}
                animate={controls}
                transition={{ ease: "easeOut", duration: 1 }}
                >
                    <div>
                        <h1 className="main-header">{explorePage.header}</h1>
                    </div>
                </motion.div>
            <div className="footer-container" style={{
                justifyContent: `${isMobile? 'center': 'flex-start'}`
            }}>
                <div className="scroll-action-container">
                    <div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{
                                duration: 2,
                                ease: "backOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeatDelay: 1
                            }}
                            variants={{
                                animate: {
                                    opacity: 1,
                                    scale: [1, 2, 2, 1.5, 1],
                                    rotate: [0, 360, 0],
                                    borderRadius: ["0%", "50%", "0%"]
                                }
                            }}
                        >
                            <div>
                                <IconButton type={StyleTypes.Primary} link="" iconPath={mouseWhiteSolid} iconSize={3} />
                            </div>
                        </motion.div>
                    </div>
                    <p >Scroll down for more</p>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
