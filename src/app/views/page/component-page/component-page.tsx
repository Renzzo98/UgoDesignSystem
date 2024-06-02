import "./component-page.css";

import { FC } from 'react';
import { useGlobalState } from "../../../../GlobalStateProvider";
import { componentPage } from "../../../models/constants";
import Section from "../../../components/ugo-section/ugo-section";
import TopBarNavigation from "../../../components/ugo-nav-bar/ugo-nav-bar";
import CardDemo from "../../demos/ugo-card-demo/ugo-card-demo";
import CounterDemo from "../../demos/ugo-counter-demo/ugo-counter-demo";
import IconButtonDemo from "../../demos/ugo-icon-button-demo/ugo-icon-button-demo";
import ButtonDemo from "../../demos/ugo-button-demo/ugo-button-demo";


interface ComponentPageProps {}

const ComponentPage: FC<ComponentPageProps> = () => {

    const { cardRef, topBarNavRef, counterBoxRef, iconButtonRef, buttonRef } = useGlobalState();

    return (
        <div className="component-page-container">
            <Section header={componentPage.componentHeader.UgoCard} darkBackground={true} 
                childComponent={
                    <div ref={cardRef}>
                        <CardDemo/>
                    </div>
                } 
            />
            <Section header={componentPage.componentHeader.UgoNavBar} darkBackground={true} 
                childComponent={
                    <div ref={topBarNavRef} style={{ width: '100%' }}>
                        <TopBarNavigation title="Title" navItems={["Link 1", "Link 2"]} footer="Action Link" styleOnScroll={false} darkBG={true} />
                    </div>
                } 
            />
            <Section header={componentPage.componentHeader.UgoCounterBox} darkBackground={true} 
                childComponent={
                    <div ref={counterBoxRef}>
                        <CounterDemo/>
                    </div>
                } 
            />
            <Section header={componentPage.componentHeader.UgoIconButton} darkBackground={true} childComponent={
                    <div ref={iconButtonRef}>
                        <IconButtonDemo/>
                    </div>
                } 
            />
            <Section header={componentPage.componentHeader.UgoButton} darkBackground={true} 
                childComponent={
                    <div ref={buttonRef}>
                        <ButtonDemo/>
                    </div>
                }
            />
        </div>
    )
}

export default ComponentPage;