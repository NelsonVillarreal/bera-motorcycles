import Link from "next/link";
import Carousel from "./components/carousel";
import FeaturedMotorcycles from "./components/featured-motorcycles";

export default function Home() {
  return (
    <>
      <Carousel />
      <FeaturedMotorcycles />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Há décadas, a Bera Motorcycles transforma tecnologia em emoção sobre duas
            rodas, sobre a água e além. Nossa missão é entregar potência,
            inovação e experiências inesquecíveis em cada jornada.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Notícias</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/news-${i}.jpg')` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Título da notícia {i}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Pequena descrição da notícia {i}, trazendo novidades sobre a
                    Bera Motorcycles.
                  </p>
                  <Link href="/noticias" className="text-red-600 font-semibold">
                    Ler mais →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
