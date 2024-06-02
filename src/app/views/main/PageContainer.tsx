import "./PageContainer.css";

import { FC } from "react";
import { useGlobalState } from "../../../GlobalStateProvider";
import { navigationBar } from '../../models/constants/text-content';

import TopBarNavigation from "../../components/ugo-nav-bar/ugo-nav-bar";
import HomeContent from "../contents/HomeContent/HomeContent";
import ComponentPage from "../pages/ComponentPage/ComponentPage";

interface PageContainerProps {}

const PageContainer: FC<PageContainerProps> = () => {

  const { activePage } = useGlobalState();

  interface PageHandlerProps {}

  const PageHandler: FC<PageHandlerProps> = () => {
    switch (activePage){
      case 1:
        return (
          <ComponentPage />
      )
      case 2:
        return (
          <ComponentPage />
      )
      default:
        return (
          <HomeContent />
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

export default PageContainer;
