import "./homeContent.css";

import { FC } from "react";
import { explorePage } from "../../constants";
import IconButton from "../../components/IconButton/IconButton";

import mouseWhiteSolid from "../../assets/icons/Mouse_Icon_White_Solid.png";
import MotionWrapper from "../../components/MotionWrapper/motionWrapper";

interface HomeContentProps {
    isMobile: boolean;
}

const HomeContent: FC<HomeContentProps> = ({ isMobile }) => {

    return (
        <div className={`home-page-container ${isMobile ? 'mobile-view' : ''}`}>
            <p className="sub-header">{explorePage.subHeader}</p>
            <h1 className="main-header">{explorePage.header}</h1>
            <div className="footer-container" style={{
                justifyContent: `${isMobile? 'center': 'flex-start'}`
            }}>
                <div className="scroll-action-container">
                    <div className="button-container">
                        <MotionWrapper
                            scaleArr={[1,2,2,1.5,1]}
                            rotateArr={[0, 360, 0]}
                            borderRadiusArr={["0%", "0%", "50%", "50%", "0%"]}
                            transitionDurTimes={2}
                            transitionEase="backOut"
                            transitionTimesArr={[0, 0.2, 0.5, 0.8, 1]}
                            transitionDelay={1}
                            childComponent={
                                <IconButton link="" iconPath={mouseWhiteSolid} iconSize={3} />
                            }
                        />
                    </div>
                    <p >Scroll down for more</p>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
