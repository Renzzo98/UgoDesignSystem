import './topBarNavigation.css';

import { FC, useEffect, useState } from 'react';
import { useGlobalState } from '../../GlobalStateProvider';
import IconButton from '../IconButton/IconButton';

import arrowWhite from '../../assets/icons/Arrow_Icon_White.png';
import { StyleTypes } from '../../constants/styleTypes';
import { number } from 'prop-types';


interface topBarNavigationProps {
    title: string;
    navItems: string[];
    footer: string;
    styleOnScroll: boolean;
    scrollFuncList?: (() => void)[];
    darkBG: boolean;
}

const TopBarNavigation: FC<topBarNavigationProps> = ({ title, navItems, footer, scrollFuncList, styleOnScroll, darkBG })  => {

    const { activePage, setActivePage } = useGlobalState();
    const { isMobile } = useGlobalState();

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

    const handlePage = (newPageID: number) => {
        setActivePage(newPageID);
        console.log('New Page is ' + activePage);
    };
    
    const stackedTopBar = () => {
        return (
            <div className={`topBarNav ${styleOnScroll ? scrolled ? 'scrolled' : '': ''}`}>
                <h2 className='nav-item' style={{ color: `${darkBG ? 'white' : 'black'}`}}>{title}</h2>
                <div className="navbar">
                    <div className={`menu-button ${styleOnScroll ? scrolled ? 'scrolled' : '': ''}`} onClick={toggleMenu}>
                        <span className={`menu-icon ${isMenuOpen ? 'hide' : 'show'}`} style={{ color: `${darkBG ? 'white' : 'black'}`}}>☰</span>
                        <span className={`menu-icon ${isMenuOpen ? 'show' : 'hide'}`} style={{ color: `${darkBG ? 'white' : 'black'}`}}>✕</span>
                    </div>
                </div>
                {isMenuRendered && (
                    <div className={`top-nav-menu-container ${isMenuOpen ? 'show' : 'hide'}`}>
                        <ul className={`menu-list ${scrolled ? 'scrolled' : ''}`}>
                            {navItems.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <li className='menu-item' style={{ color: `${darkBG ? 'white' : 'black'}`}} onClick={() => handlePage(index)}>{item}</li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        )
    }


    const unstackedTopBar = () => {
        return (
            <div className={`topBarListNav ${scrolled ? 'scrolled' : ''}`}>
                <div className='nav-title-container'>
                    <h2 className='nav-item' style={{ color: `${darkBG ? 'white' : 'black'}`}}>{title}</h2>
                </div>
                <div className='nav-item-container'>
                    {navItems.map((item, index) => {
                        return (
                            <span key={index} className='nav-item' style={{ color: `${darkBG ? 'white' : 'black'}`, fontWeight: `${activePage === index ? '600': '200' }`}} onClick={() => handlePage(index)}>{item}</span>
                        )
                    })}
                </div>
                <div className='nav-footer-container'>
                    <IconButton type={StyleTypes.Tertiary} sideText={footer} iconPath={arrowWhite} iconSize={1} link='' />
                </div>
            </div>
        )
    }

    return (
        isMobile ? stackedTopBar() : unstackedTopBar()
    )

}

export default TopBarNavigation;