"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { featuredMotorcycles } from "./data";

export default function FeaturedMotorcycles() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo =
      direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

  return (
    <section className="relative bg-white py-12 px-4 md:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Motos em destaque
        </h2>
        <Link
          href="/products"
          className="flex items-center text-red-600 hover:text-red-700 transition-colors"
        >
          Todos os modelos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 7.39 13.28"
            className="ml-2"
          >
            <path
              d="M1 1l5 5.64L1 12"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 rounded-full p-3 z-10"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 rounded-full p-3 z-10"
      >
        <FaChevronRight className="text-gray-700" />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {featuredMotorcycles.map((moto, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-start w-[280px] md:w-[340px] h-[340px] bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all"
          >
            {moto.last ? (
              <Link
                href={moto.link}
                className="flex items-center justify-center w-full h-full border-2 border-dashed border-gray-300 text-gray-700 text-lg font-semibold hover:text-red-600 transition-colors"
              >
                {moto.name}
              </Link>
            ) : (
              <Link href={moto.link}>
                <div className="relative w-full h-[220px] flex items-center justify-center bg-gray-100">
                  <Image
                    src={moto.image || ""}
                    alt={moto.name}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 80vw, 360px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {moto.name}
                  </h3>
                  {moto.price && (
                    <p className="text-sm text-gray-600 mt-1">{moto.price}</p>
                  )}
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
