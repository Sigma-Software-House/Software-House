import { useRef } from 'react';
import type { ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import './carousel.css';

interface CarouselProps {
    children: ReactNode;
    scrollAmount?: number;
    title?: string;
}

const Carousel = ({ children, scrollAmount = 324 }: CarouselProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="carousel-container" style={{ width: '100%', position: 'relative' }}>
            <div className="carousel-wrapper" ref={carouselRef}>
                {children}
            </div>
            <div className="contentButton">
                <div className="carouselButtons">
                    <button className="arrowButton" onClick={() => handleScroll('left')}>
                        <ChevronLeft size={24} />
                    </button>
                    <button className="arrowButton" onClick={() => handleScroll('right')}>
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Carousel;