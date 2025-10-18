"use client";
import Image from "next/image";
import Link from "next/link";
import { featuredMotorcycles } from "./data";


export default function FeaturedMotorcycles() {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      {/* Título */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Motos em destaque
        </h2>
        <Link
          href="/motos/modelos"
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

      {/* Carrossel / Grid */}
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x scrollbar-hide">
        {featuredMotorcycles.map((moto, i) =>
          moto.last ? (
            <Link
              key={i}
              href={moto.link}
              className="flex items-center justify-center min-w-[280px] md:min-w-[340px] h-[320px] border-2 border-dashed border-gray-300 rounded-2xl text-gray-700 text-lg font-semibold hover:text-red-600 transition-colors snap-start"
            >
              {moto.name}
            </Link>
          ) : (
            <Link
              key={i}
              href={moto.link}
              className="flex-shrink-0 min-w-[280px] md:min-w-[340px] bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all snap-start"
            >
              <div className="flex flex-col">
                <div className="relative w-full h-[240px]">
                  <Image
                    src={moto.image || ""}
                    alt={moto.name}
                    fill
                    className="object-cover"
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
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
