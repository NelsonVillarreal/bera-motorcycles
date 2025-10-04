import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Header } from "./components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bera Motorcycles Peru</title>
        <meta name="description" content="Página inicial inspirada na Bera Motorcycles" />
      </Head>

      <Header />

      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Bera Motorcycles</h1>
          <h2 className="text-2xl md:text-3xl mb-6">Land • Water • Beyond</h2>
          <p className="text-lg md:text-xl mb-8">
            Heritage. Inovação. Potência.
          </p>
          <Link
            href="/produtos"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Conheça nossos produtos
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Categorias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Land", href: "/land", image: "/images/land.jpg" },
              { name: "Water", href: "/water", image: "/images/water.jpg" },
              { name: "Beyond", href: "/beyond", image: "/images/beyond.jpg" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="relative group h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h3 className="text-3xl text-white font-bold">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      <footer className="bg-black text-gray-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">Bera Motorcycles</h4>
            <p className="text-sm">
              Potência, inovação e emoção em cada jornada.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaInstagram className="text-white" />
                <Link href="https://www.instagram.com/bera.peru/?igsh=czN6OTM5YW55Nnhr#" target="_blank">Instagram</Link>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-white" />
                <Link href="https://wa.me/51929690044" target="_blank">WhatsApp</Link>
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook className="text-white" />
                <Link href="/beyond">Facebook</Link>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-white" />
                <Link href="/contato">929 690 044</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Redes sociais</h4>
            <p>Siga a Bera Motorcycles no Instagram, YouTube e Facebook.</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600 mt-8">
          © {new Date().getFullYear()} Bera Motorcycles.
        </div>
      </footer>
    </>
  );
}
