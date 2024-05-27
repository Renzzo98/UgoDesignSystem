import "./componentContent.css";

import IconButton from "../../components/IconButton/IconButton";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";

import mouseIcon from "../../assets/icons/Mouse_Icon_White.png";

import { FC } from 'react';
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import MotionWrapper from "../../components/MotionWrapper/motionWrapper";

interface ComponentContentProps {
    isMobile: boolean;
}

const ComponentContent: FC<ComponentContentProps> = () => {
    return (
        <div className="component-page-container">
            <Section header="Card" darkBackground={true} childComponent={
                <Card iconPath={mouseIcon} title="Test" subTitle="This is an testing to try out the card compomonent." iconSize={8} darkBackground={true}/>
            } />
            <Section header="Icon Button" darkBackground={true} childComponent={
                <MotionWrapper
                    scaleArr={[1,2,2,1.5,1]}
                    rotateArr={[0, 360]}
                    borderRadiusArr={["0%", "0%", "50%", "50%", "0%"]}
                    transitionDurTimes={2}
                    transitionEase="backOut"
                    transitionTimesArr={[0, 0.2, 0.5, 0.8, 1]}
                    transitionDelay={1}
                    childComponent={
                        <IconButton iconPath={mouseIcon} link="" iconSize={10}/>
                    }
                />
            } />
            <Section header="Bar Graph" darkBackground={true} childComponent={
                <ScrollBar title="Test" percentage={30}/>
            } />
        </div>
    )
}

export default ComponentContent;