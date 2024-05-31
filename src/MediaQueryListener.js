// MediaQueryListener.js
import { useEffect } from 'react';
import { useGlobalState } from './GlobalStateProvider';

const MediaQueryListener = () => {
    const { setIsMobile } = useGlobalState();

    useEffect(() => {
        const mediaQueryList = window.matchMedia('(max-width: 1253px)');

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Set initial value based on current media query
        setIsMobile(mediaQueryList.matches);

        // On change of the window size, update the mobile value if it's fits the condition
        mediaQueryList.onchange = (e) => handleMediaQueryChange(e);
    }, [setIsMobile]);

    return null; // This component doesn't render anything
};

export default MediaQueryListener;