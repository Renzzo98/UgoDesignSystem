import './topBarNavigation.css';

import { FC, useEffect, useState } from 'react';
import { navigationBar } from '../../constants/textContent';
import { useGlobalState } from '../../GlobalStateProvider';
import IconButton from '../IconButton/IconButton';

import arrowWhite from '../../assets/icons/Arrow_Icon_White.png';


interface topBarNavigationProps {
    isMobile: boolean;
    scrollFuncList: (() => void)[];
    darkBG: boolean;
}

const TopBarNavigation: FC<topBarNavigationProps> = ({ isMobile, scrollFuncList, darkBG })  => {

    const { activePage, setActivePage } = useGlobalState();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuRendered, setIsMenuRendered] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const handlePage = (newPageID: number) => {
        setActivePage(newPageID);
        console.log('New Page is ' + activePage);
    };


    const toggleMenu = () => {
        if (isMenuOpen) {
            // Start the hide animation
            setIsMenuOpen(false);
            
            // Wait for the animation to finish before removing the menu from the DOM
            setTimeout(() => {
            setIsMenuRendered(false);
            }, 250); // 500ms is the duration of your CSS transition
        } else {
            // Render the menu and then start the show animation
            setIsMenuRendered(true);
            // Use a timeout to ensure the element is in the DOM before starting the animation
            setTimeout(() => {
                setIsMenuOpen(true);
            }, 10);
        }
    };

    const handleScrollFunction = (scrollFunc: () => void) => {
        scrollFunc();
        toggleMenu();
        setTimeout(() => {
            const currentScrollPosition = window.scrollY;
            const offsetPosition = currentScrollPosition - 250;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 600); // The timeout duration might need adjustment
    }

    
    const stackedTopBar = () => {
        return (
            <div className={`topBarNav ${scrolled ? 'scrolled' : ''}`}>
                <h2 className='nav-item' style={{ color: `${darkBG ? 'white' : 'black'}`}}>{navigationBar.title}</h2>
                <div className="navbar">
                    <div className={`menu-button ${scrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
                        <span className={`menu-icon ${isMenuOpen ? 'hide' : 'show'}`} style={{ color: `${darkBG ? 'white' : 'black'}`}}>☰</span>
                        <span className={`menu-icon ${isMenuOpen ? 'show' : 'hide'}`} style={{ color: `${darkBG ? 'white' : 'black'}`}}>✕</span>
                    </div>
                </div>
                {isMenuRendered && (
                    <div className={`top-nav-menu-container ${isMenuOpen ? 'show' : 'hide'}`}>
                        <ul className={`menu-list ${scrolled ? 'scrolled' : ''}`}>
                            {navigationBar.navList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <li className='menu-item' style={{ color: `${darkBG ? 'white' : 'black'}`}} onClick={() => handlePage(index)}>{item}</li>
                                    </div>
                                )
                            })}
                            {/* <a className={`resume-bar ${scrolled ? 'scrolled' : ''}`} href={`${process.env.PUBLIC_URL}/${fileName}`} download="HugoRenzzoResume.pdf">
                                <img className='resume-download-icon' src={scrolled? 'orangeDownloadIcon' : 'DownloadIcon'} alt="Download resume" />
                                <p className='resume-text'>DOWNLOAD RESUME</p>
                            </a> */}
    
                        </ul>
                    </div>
                )}
            </div>
        )
    }


    const listTopBar = () => {
        return (
            <div className={`topBarListNav ${scrolled ? 'scrolled' : ''}`}>
                <div className='nav-title-container'>
                    <h2 className='nav-item' style={{ color: `${darkBG ? 'white' : 'black'}`}}>{navigationBar.title}</h2>
                </div>
                <div className='nav-item-container'>
                    {navigationBar.navList.map((item, index) => {
                        return (
                            <span key={index} className='nav-item' style={{ color: `${darkBG ? 'white' : 'black'}`, fontWeight: `${activePage === index ? '600': '200' }`}} onClick={() => handlePage(index)}>{item}</span>
                        )
                    })}
                </div>
                <div className='nav-footer-container'>
                    <IconButton sideText={navigationBar.footer} textOnDarkBG={true} iconPath={arrowWhite} iconSize={1} link='' />
                </div>
            </div>
        )
    }

    return (
        isMobile ? stackedTopBar() : listTopBar()
    )

}

export default TopBarNavigation;