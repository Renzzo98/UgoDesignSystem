import "./componentContent.css";

import { FC } from 'react';
import { motion } from "framer-motion";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import IconButton from "../../components/IconButton/IconButton";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import TopBarNavigation from "../../components/TopBarNavigation/topBarNavigation";

import mouseIcon from "../../assets/icons/Mouse_Icon_White.png";


interface ComponentContentProps {
    isMobile: boolean;
}

const ComponentContent: FC<ComponentContentProps> = ({ isMobile }) => {

    const scrollToContactSection = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    };
  
    const scrollFunctions = [scrollToContactSection];

    return (
        <div className="component-page-container">
            <Section header="Card" darkBackground={true} 
                childComponent={
                    <Card iconPath={mouseIcon} title="Test" subTitle="This is an testing to try out the card compomonent. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah." iconSize={6} darkBackground={true}/>
                } 
            />
            <Section header="Top Bar Navigation" darkBackground={true} 
                childComponent={
                    <div style={{ width: '100%' }}>
                        <TopBarNavigation title="Title" navItems={["Link 1", "Link 2"]} footer="Action Link" isMobile={isMobile} styleOnScroll={false} darkBG={true} scrollFuncList={scrollFunctions}/>
                    </div>
                } 
            />
            <Section header="Icon Button" darkBackground={true} childComponent={
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
                        <IconButton iconPath={mouseIcon} link="" iconSize={10}/>
                    </div>
                </motion.div>} 
            />
        </div>
    )
}

export default ComponentContent;