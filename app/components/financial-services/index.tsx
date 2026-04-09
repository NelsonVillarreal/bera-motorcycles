"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import ServiceImg from '../../assets/financial_services/servicos-financeiros.jpg';
import PostvendaImg from '../../assets/financial_services/posvenda-image.jpeg';

type ServiceCard = {
  title: string;
  description: string;
  message: string;
  imageSrc: string;
  imageAlt?: string;
};

type ServicesHeroGridProps = {
  id?: string;
  items?: ServiceCard[];
  className?: string;
};

const WHATSAPP_NUMBER = "51929690044";

const defaultItems: ServiceCard[] = [
  {
    title: "Servicios Financieros",
    description:
      "Tenemos todo lo que necesitas para hacer realidad tu sueño. Ya sea a través de un plan de ahorro o financiamiento, BERA garantiza calidad y confianza.",
    message: "Quero financiar um veículo",
    imageSrc: ServiceImg.src,
    imageAlt: "Financial Services",
  },
  {
    title: "Pós-venda",
    description:
      "Asegura un viaje tranquilo y seguro con los servicios de posventa de BERA — mantenimiento, repuestos originales y soporte completo al cliente.",
    message: "Agora que comprei a moto, estou com a seguinte dúvida",
    imageSrc: PostvendaImg.src,
    imageAlt: "After-Sales",
  },
];

export default function ServicesHeroGrid({
  id = "services",
  items = defaultItems,
  className = "",
}: ServicesHeroGridProps) {

  const getWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  console.log('posvenda image src:', PostvendaImg.src);
  return (
    <section id={id} className={`py-10 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative h-80 group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Imagem */}
            <Image
              src={item.imageSrc}
              alt={item.imageAlt || item.title}
              fill
              priority={index === 0}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

            {/* Conteúdo */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm mb-3 max-w-md">{item.description}</p>

              <a
                href={getWhatsAppLink(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-4 py-2 rounded hover:bg-green-500 hover:text-white transition"
              >
                <FaWhatsapp />
                Saber más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}