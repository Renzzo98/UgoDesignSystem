import { createContext, useContext, useState, useRef } from "react";

// Create a Context
const GlobalStateContext = createContext();

// Provider Component
export const GlobalStateProvider = ({ children }) => {

  const [activePage, setActivePage] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1253px)').matches);

  const [cardRef] = useState(useRef(null));
  const [topBarNavRef] = useState(useRef(null));
  const [counterBoxRef] = useState(useRef(null));
  const [iconButtonRef] = useState(useRef(null));
  const [buttonRef] = useState(useRef(null));

  const scrollToCardSection = () => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTopBarNavSection = () => {
    if (topBarNavRef.current) {
      topBarNavRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCounterBoxSection = () => {
    if (counterBoxRef.current) {
      counterBoxRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToIconButtonSection = () => {
    if (iconButtonRef.current) {
      iconButtonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToButtonSection = () => {
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [scrollRefFunction] = useState(
    [
      scrollToCardSection,
      scrollToTopBarNavSection, 
      scrollToCounterBoxSection,
      scrollToIconButtonSection,
      scrollToButtonSection
    ]
  );


  return (
    <GlobalStateContext.Provider
      value={
        { 
          activePage, 
          setActivePage,
          hasAnimated,
          setHasAnimated,
          isMobile, 
          setIsMobile, 
          cardRef, 
          topBarNavRef,
          counterBoxRef,
          iconButtonRef,
          buttonRef,
          scrollRefFunction 
        }
      }
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for using the global state
export const useGlobalState = () => useContext(GlobalStateContext);
