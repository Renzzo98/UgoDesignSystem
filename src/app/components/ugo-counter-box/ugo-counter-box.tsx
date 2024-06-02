import './ugo-counter-box.css';

import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { StyleTypes } from '../../models/constants/style-types';
import ScrollTrigger from 'gsap/ScrollTrigger';


interface UgoCounterBoxProps {
    maxInt: number;
    subTitle: string;
    type: StyleTypes;
}

// Ensure GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger);

const UgoCounterBox: FC<UgoCounterBoxProps> = ({ maxInt, subTitle, type }) => {
    
    // Correctly type useRef with HTMLDivElement
    const numberRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure GSAP plugins are registered
        gsap.registerPlugin(ScrollTrigger);

        if (numberRef.current) {
        // Now TypeScript knows numberRef.current is an HTMLDivElement, not null
        // and getAttribute is a valid method call
        const target = maxInt; // Directly use targetNumber prop
        
        gsap.to(numberRef.current, {
            scrollTrigger: {
                trigger: numberRef.current,
                start: 'botom center', // Adjust based on your needs
                toggleActions: 'play none none none',
                // toggleActions: 'restart pause resume pause',
            },
            duration: 2,
            textContent: target,
            snap: { textContent: 1 },
            ease: "power1.out",
            // Optional: onComplete callback if needed
        });
        }
    }, [maxInt]); // Depend on targetNumber to re-run animation if it changes


    const renderCounterType = () => {
        switch (type) {
          case StyleTypes.Secondary:
            return (
                <div className={`ugo-counter-box secondary-box`}>
                    <div ref={numberRef} className={`counter-value secondary-text`} data-target={maxInt}>
                        0
                    </div>
                    <hr className={`counter-divider secondary`} /> 
                    <p className={`sub-title secondary-text`}>{subTitle}</p>
                </div>
            );
          case StyleTypes.Tertiary:
            return (
                <div className={`ugo-counter-box tertiary-box`}>
                    <div ref={numberRef} className={`counter-value`} data-target={maxInt}>
                        0
                    </div>
                    <hr className={`counter-divider`} /> 
                    <p className={`sub-title`}>{subTitle}</p>
                </div>
            );
          default:
            return (
                <div className={`ugo-counter-box`}>
                    <div ref={numberRef} className={`counter-value`} data-target={maxInt}>
                        0
                    </div>
                    <hr className={`counter-divider`} /> 
                    <p className={`sub-title`}>{subTitle}</p>
                </div>
            );
        }
      };

    return (
        <div className='ugo-counter-container'>
            {renderCounterType()}
        </div>
    );
};
export default UgoCounterBox;