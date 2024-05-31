import "./App.css";

import { useEffect, useState } from 'react';
import { GlobalStateProvider } from "./GlobalStateProvider";
import PageContainer from "./app/views/main/PageContainer";
import MediaQueryListener from "./MediaQueryListener";

function App() {

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
      <MediaQueryListener />
      <div className="body" style={{
        minHeight: height + 300
      }}>
        <PageContainer/>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
