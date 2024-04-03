import React, { useEffect, useRef } from 'react';
import ArrowLeft from '../AllButtons/Arrows/ArrowLeft';
import ArrowRight from '../AllButtons/Arrows/ArrowLRight';
import './CarrouselGeneral.css';

const CarrouselGeneral = ({ items, titleCarrousel="Carrousel" }) => {
    const carrouselRef = useRef(null);

    useEffect(() => {
        const target = carrouselRef.current;
        let isAnimating = false;
        let cardOutterWidth;
        let maxCarrouselScroll;

        const scrollLeftAnimate = (elem, unit) => {
            if (!elem || isAnimating) {
                return;
            }

            const time = 300;
            const from = elem.scrollLeft;
            const aframe = 10;

            isAnimating = true;

            const start = new Date().getTime();
            const timer = setInterval(() => {
                const step = Math.min(1, (new Date().getTime() - start) / time);
                elem.scrollLeft = step * unit + from;
                if (step === 1) {
                    clearInterval(timer);
                    isAnimating = false;
                }
            }, aframe);
        };

        const updateCarrouselInfo = () => {
            cardOutterWidth = target.querySelector('.va-card').offsetWidth;
            maxCarrouselScroll = (target.querySelectorAll('.va-card').length * cardOutterWidth) - target.clientWidth;
        };

        const handleScrollLeft = () => {
            updateCarrouselInfo();
            if (target.scrollLeft > 0) {
                scrollLeftAnimate(target, -cardOutterWidth * 2);
            }
        };

        const handleScrollRight = () => {
            updateCarrouselInfo();
            if (target.scrollLeft < maxCarrouselScroll) {
                scrollLeftAnimate(target, cardOutterWidth * 2);
            }
        };

        const leftButton = target.parentNode.querySelector('.deals-scroll-left');
        const rightButton = target.parentNode.querySelector('.deals-scroll-right');

        leftButton.addEventListener('click', handleScrollLeft);
        rightButton.addEventListener('click', handleScrollRight);

        return () => {
            leftButton.removeEventListener('click', handleScrollLeft);
            rightButton.removeEventListener('click', handleScrollRight);
        };
    }, []);

    return (
        <div className="va-carrousel-section">
            <div className="va-whitewrap">
                <div className="div-content-text-buttons-carrousel">
                    <h2 className="va-carrousel-title">{titleCarrousel}</h2>
                    <div className='conent-buttons-carrousel'>
                        <button className="deals-scroll-left deals-paddle">
                            <ArrowLeft></ArrowLeft>
                        </button>
                        <button className="deals-scroll-right deals-paddle">
                            <ArrowRight></ArrowRight>
                        </button>
                    </div>
                </div>
                <div ref={carrouselRef} className="va-carrousel-flexbox">
                    {items.map((item, index) => (
                        <div key={index} className="va-card">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarrouselGeneral;
