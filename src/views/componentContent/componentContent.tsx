import "./ComponentContent.css";

import { FC } from 'react';
import { useGlobalState } from "../../GlobalStateProvider";
import Section from "../../components/Section/Section";
import TopBarNavigation from "../../components/TopBarNavigation/topBarNavigation";
import CardDemo from "../../demos/CardDemo/CardDemo";
import CounterDemo from "../../demos/CounterDemo/CounterDemo";
import IconButtonDemo from "../../demos/IconButtonDemo/IconButtonDemo";
import ButtonDemo from "../../demos/ButtonDemo/ButtonDemo";


interface ComponentContentProps {}

const ComponentContent: FC<ComponentContentProps> = () => {

    const { cardRef, topBarNavRef, counterBoxRef, iconButtonRef, buttonRef } = useGlobalState();

    return (
        <div className="component-page-container">
            <Section header="Card" darkBackground={true} 
                childComponent={
                    <div ref={cardRef}>
                        <CardDemo/>
                    </div>
                } 
            />
            <Section header="Top Bar Navigation" darkBackground={true} 
                childComponent={
                    <div ref={topBarNavRef} style={{ width: '100%' }}>
                        <TopBarNavigation title="Title" navItems={["Link 1", "Link 2"]} footer="Action Link" styleOnScroll={false} darkBG={true} />
                    </div>
                } 
            />
            <Section header="CounterBox" darkBackground={true} 
                childComponent={
                    <div ref={counterBoxRef}>
                        <CounterDemo/>
                    </div>
                } 
            />
            <Section header="Icon Button" darkBackground={true} childComponent={
                    <div ref={iconButtonRef}>
                        <IconButtonDemo/>
                    </div>
                } 
            />
            <Section header="Button" darkBackground={true} 
                childComponent={
                    <div ref={buttonRef}>
                        <ButtonDemo/>
                    </div>
                }
            />
        </div>
    )
}

export default ComponentContent;