import "./ugo-side-nav.css";

import { FC } from 'react';
import { useGlobalState } from "../../../GlobalStateProvider";

interface UgoSideNavProps {
    navItems: string[];
    header?: string;
    childComponent?: React.ReactNode;
}

const UgoSideNav: FC<UgoSideNavProps> = ({ header, navItems, childComponent }) => {

    const { isMobile, scrollRefFunction } = useGlobalState();

    const handleScrollFunction = (scrollFunc: () => void) => {
        scrollFunc();
        setTimeout(() => {
            const currentScrollPosition = window.scrollY;
            const offsetPosition = currentScrollPosition - 250;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 600); // The timeout duration might need adjustment
    }
    
    return (
        <div className={`side-nav-container ${isMobile ? 'mobile' : ''}`}>
            <div className={`side-nav ${isMobile ? 'mobile' : ''}`}>
                <h1>{header}</h1>
                {navItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <p onClick={() => handleScrollFunction(scrollRefFunction[index])}>{item}</p>
                        </div>
                    )
                })}
            </div>
            <div className={`vertical-break ${isMobile ? 'mobile' : ''}`} />
            <div className="content">
                {childComponent}
            </div>
        </div>
    )
}

export default UgoSideNav;