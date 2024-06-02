import "./PageContainer.css";

import { FC } from "react";
import { useGlobalState } from "../../GlobalStateProvider";
import { navigationBar } from '../../constants/textContent';

import TopBarNavigation from "../../components/TopBarNavigation/topBarNavigation";
import HomeContent from "../HomeContent/HomeContent";
import ComponentPage from "../ComponentPage/ComponentPage";

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
