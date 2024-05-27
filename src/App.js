import "./App.css";

import { useEffect, useState } from 'react';
import { GlobalStateProvider } from "./GlobalStateProvider";
import { useMediaQuery } from 'react-responsive';
import PageContainer from "./views/PageContainer/PageContainer";

function App() {

  const MobileView = useMediaQuery({ maxWidth: 1253 });

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Update height when the window is resized
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <GlobalStateProvider>
      <div className="body" style={{
        minHeight: height
      }}>
        <PageContainer isMobile={MobileView} />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
