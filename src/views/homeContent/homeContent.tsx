import "./homeContent.css";

import { FC } from "react";
import { explorePage } from "../../constants";
import IconButton from "../../components/IconButton/IconButton";

import mouseWhiteSolid from "../../assets/icons/Mouse_Icon_White_Solid.png";
import { motion } from 'framer-motion';

interface HomeContentProps {
    isMobile: boolean;
}

const HomeContent: FC<HomeContentProps> = ({ isMobile }) => {

    return (
        <div className={`home-page-container ${isMobile ? 'mobile-view' : ''}`}>
            <p className="sub-header">{explorePage.subHeader}</p>
            <motion.div
                initial={{ opacity: 0, x: -200  }}
                animate={{ opacity: 1, x: 0 }}
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
                    <div className="button-container">
                        <motion.div
                            animate={{
                                scale: [1, 2, 2, 1.5, 1],
                                rotate: [0, 360],
                                borderRadius: ["0%", "50%", "0%"]
                            }}
                            transition={{
                                duration: 2,
                                ease: "backOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeatDelay: 1
                            }}
                        >
                            <div>
                                <IconButton link="" iconPath={mouseWhiteSolid} iconSize={3} />
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
