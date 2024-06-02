import "./main-app.css";

import { FC } from "react";
import { useGlobalState } from "../GlobalStateProvider";
import { componentPage, navigationBar } from './models/constants/text-content';
import TopBarNavigation from "./components/ugo-nav-bar/ugo-nav-bar";
import UgoSideNav from "./layouts/ugo-side-nav/ugo-side-nav";
import LayoutPage from "./views/page/layout-page/layout-page";
import HomePage from "./views/page/home-page/home-page";
import ComponentPage from "./views/page/component-page/component-page";

interface MainAppProps {}

const MainApp: FC<MainAppProps> = () => {

  const { activePage } = useGlobalState();

  interface PageHandlerProps {}

  const PageHandler: FC<PageHandlerProps> = () => {
    switch (activePage){
      case 1:
        return (
          <LayoutPage />
      )
      case 2:
        return (
          <UgoSideNav 
            navItems={componentPage.navList} 
            childComponent={<ComponentPage />}
          />
      )
      default:
        return (
          <HomePage />
      )
    }
  };


  return (
    <div>
      <TopBarNavigation title={navigationBar.title} navItems={navigationBar.navList} footer={navigationBar.footer} styleOnScroll={false} darkBG={true}/>
      <PageHandler />
    </div>
  );
};

export default MainApp;
