import './motionWrapper.css';

import { FC } from "react";
import { motion } from "framer-motion";


interface MotionWrapperProps {
    scaleArr: number[];
    rotateArr: number[];
    borderRadiusArr: string[];
    transitionDurTimes: number;
    transitionEase: string;
    transitionTimesArr: number[];
    transitionDelay: number;
    childComponent: React.ReactNode;
}

const MotionWrapper: FC<MotionWrapperProps> = ({ scaleArr, rotateArr, borderRadiusArr, transitionTimesArr, transitionEase, transitionDurTimes, transitionDelay, childComponent }) => {
    return (
        <motion.div
            animate={{
                scale: scaleArr,
                rotate: rotateArr,
                borderRadius: borderRadiusArr,
            }}
            transition={{
                duration: transitionTimesArr,
                ease: transitionEase,
                times: transitionDurTimes,
                repeatDelay: transitionDelay
            }}
        >
            {childComponent}
        </motion.div>
    );
};

export default MotionWrapper;