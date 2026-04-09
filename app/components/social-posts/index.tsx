"use client";

import Image from "next/image";

const mockPosts = [
  {
    id: "1",
    image: "/images/thumbnail/post-insta.jpg",
    description:
      "Mira quien está de vuelta! 🤩💙 KAVAK, 150CC 2026⚡️☄️ Recién llegada al Perú 🇵🇪Adquiere la tuya con un súper descuento comentando, KAVAK 💥📬",
    url: "https://www.instagram.com/p/DUo_P4bEYAu/",
  },
  {
    id: "2",
    image: "/images/thumbnail/post-face.jpg",
    description:
      "SBR 150 💜 en modo ciudad: ligera, ágil y con toda la actitud. ¿Te atreves a rodar diferente? ⚡️☄️ . . . #berasbr150 #motourbana #150cc #beraperu...",
    url: "https://www.facebook.com/share/r/17WVTtUwSo/",
  },
  {
    id: "3",
    image: "/images/thumbnail/post-tiktok.jpg",
    description:
      "DSi te gusta cómo se ve… espera a manejarla! Kavak 150 ⚡️💜 📍Av. Universidad 6441, Comas #kavak150 #motokavak #motosperu #beramotorcyclescomas #bikersperu",
    url: "https://vt.tiktok.com/ZSHuBTNfr/",
  },
];

type SocialPost = {
  id: string;
  image: string;
  description: string;
  url: string;
  platform?: "instagram" | "facebook" | "tiktok";
};

type SocialPostsProps = {
  posts: SocialPost[];
};

export default function SocialPosts() {
  const posts = mockPosts;
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-black font-bold text-center mb-12">
          Últimas publicações
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
            >
              {/* Preview da imagem */}
              <div className="relative aspect-[4/5]">
                <Image
                  src={post.image}
                  alt="Post"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.description}
                </p>

                <span className="text-red-600 font-semibold mt-4 inline-block">
                  Ver postagem →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
