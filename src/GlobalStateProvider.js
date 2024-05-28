import { createContext, useContext, useState } from "react";

// Create a Context
const GlobalStateContext = createContext();

// Provider Component
export const GlobalStateProvider = ({ children }) => {
  const [sideBarHidden, setSideBarHidden] = useState(false);
  const [activePage, setActivePage] = useState(0);

  return (
    <GlobalStateContext.Provider
      value={{ sideBarHidden, setSideBarHidden, activePage, setActivePage }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for using the global state
export const useGlobalState = () => useContext(GlobalStateContext);
