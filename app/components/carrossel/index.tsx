'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gbrRojo, kavakNegra, sbrRoja } from '@/app/assets/carrossel';

export default function Carousel() {
    const slides = [
        {
            id: 1,
            image: gbrRojo,
            alt: 'gbr rojo',
        },
        {
            id: 2,
            image: kavakNegra,
            alt: 'Slide 2',
        },
        {
            id: 3,
            image: sbrRoja,
            alt: 'sbr roja',
        },
    ];

    const autoplayInterval = 6000;
    const showArrows = true;
    const showDots = true;

    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(Boolean(autoplayInterval));
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const slidesCount = slides.length;

    useEffect(() => {
        if (!isPlaying || slidesCount <= 1) return;
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % slidesCount);
        }, autoplayInterval);
        return () => clearInterval(id);
    }, [isPlaying, slidesCount, autoplayInterval]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const goTo = (i: number) =>
        setIndex(((i % slidesCount) + slidesCount) % slidesCount);
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const onTouchEnd = () => {
        const delta = touchStartX.current - touchEndX.current;
        const threshold = 50;
        if (delta > threshold) next();
        else if (delta < -threshold) prev();
    };

    if (slidesCount === 0) return null;

    return (
        <div
            className="relative overflow-hidden w-full bg-gray-900 top-25"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(Boolean(autoplayInterval))}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            aria-roledescription="carousel"
        >
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((s, i) => (
                    <div key={s.id} className="min-w-full flex items-center justify-center bg-black h-[50vh]">
                        <div className="relative w-[500px] h-[50vh]">
                            <Image
                                src={s.image}
                                alt={s.alt}
                                fill
                                priority={i === 0}
                                quality={90}
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                        </div>
                    </div>

                ))}
            </div>
            {showArrows && slidesCount > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition"
                        aria-label="Anterior"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-white rotate-180"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 16.293a1 1 0 010-1.414L15.586 11H5a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition"
                        aria-label="Próximo"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 16.293a1 1 0 010-1.414L15.586 11H5a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </>
            )}
            {showDots && slidesCount > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-white scale-110' : 'bg-white/40'
                                }`}
                            aria-label={`Ir para slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
