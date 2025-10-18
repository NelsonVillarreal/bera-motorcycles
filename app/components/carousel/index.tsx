'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { slidesCarousel } from './data';

export default function Carousel() {
  const autoplayInterval = 6000;
  const showArrows = true;
  const showDots = true;

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoplayInterval));
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const slidesCount = slidesCarousel.length;

  const goTo = (i: number) =>
    setIndex(((i % slidesCount) + slidesCount) % slidesCount);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

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
      className="relative overflow-hidden w-full bg-gray-900"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(Boolean(autoplayInterval))}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slidesCarousel.map((s, i) => (
          <div
            key={s.id}
            className="relative min-w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] bg-black pointer-events-none"
          >
            <Image
              src={s.image}
              alt={s.alt || `Slide ${i + 1}`}
              fill
              priority={i === 0}
              quality={90}
              sizes="100vw"
              className="object-cover pointer-events-auto"
            />
          </div>
        ))}
      </div>

      {/* Botões de seta */}
      {showArrows && slidesCount > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition"
            aria-label="Anterior"
          >
            <FaChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition"
            aria-label="Próximo"
          >
            <FaChevronRight className="w-5 h-5 text-white" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && slidesCount > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slidesCarousel.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? 'bg-white scale-110' : 'bg-white/40'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
