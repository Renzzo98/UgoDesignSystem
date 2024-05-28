import "./PageContainer.css";

import { FC } from "react";
import { useGlobalState } from "../../GlobalStateProvider";
import { navigationBar } from '../../constants/textContent';
import TopBarNavigation from "../../components/TopBarNavigation/topBarNavigation";
import ComponentPage from "../componentContent/componentContent";
import HomePage from "../homeContent/homeContent";

interface PageContainerProps {
  isMobile: boolean
}

const PageContainer: FC<PageContainerProps> = ({ isMobile }) => {

  const { activePage } = useGlobalState();

  interface PageHandlerProps {
    mobileView: boolean;
}

  const PageHandler: FC<PageHandlerProps> = ({ mobileView }) => {
    switch (activePage){
      case 1:
        return (
          <ComponentPage isMobile={mobileView} />
        )
      default:
        return (
          <HomePage isMobile={mobileView} />
        )
    }
};

  const scrollToContactSection = () => {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
      })
  };

  const scrollFunctions = [scrollToContactSection];

  return (
    <div>
      <TopBarNavigation title={navigationBar.title} navItems={navigationBar.navList} footer={navigationBar.footer} isMobile={isMobile} styleOnScroll={false} darkBG={true} scrollFuncList={scrollFunctions}/>
      <PageHandler mobileView={isMobile}/>
    </div>
  );
};

export default PageContainer;
