import "./ComponentContent.css";

import { FC } from 'react';
import Section from "../../components/Section/Section";
import TopBarNavigation from "../../components/TopBarNavigation/topBarNavigation";
import CardDemo from "../../demos/CardDemo/CardDemo";
import CounterDemo from "../../demos/CounterDemo/CounterDemo";
import IconButtonDemo from "../../demos/IconButtonDemo/IconButtonDemo";
import ButtonDemo from "../../demos/ButtonDemo/ButtonDemo";


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
                    <CardDemo isMobile={isMobile}/>
                } 
            />
            <Section header="Top Bar Navigation" darkBackground={true} 
                childComponent={
                    <div style={{ width: '100%' }}>
                        <TopBarNavigation title="Title" navItems={["Link 1", "Link 2"]} footer="Action Link" isMobile={isMobile} styleOnScroll={false} darkBG={true} scrollFuncList={scrollFunctions}/>
                    </div>
                } 
            />
            <Section header="CounterBox" darkBackground={true} 
                childComponent={
                    <div>
                        <CounterDemo isMobile={isMobile} />
                    </div>
                } 
            />
            <Section header="Icon Button" darkBackground={true} childComponent={
                    <IconButtonDemo isMobile={isMobile} />
                } 
            />
            <Section header="Button" darkBackground={true} 
                childComponent={
                    <ButtonDemo isMobile={isMobile} />
                } 
            />
        </div>
    )
}

export default ComponentContent;