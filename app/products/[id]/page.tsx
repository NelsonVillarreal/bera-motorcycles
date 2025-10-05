'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { mockProducts } from '../page'

export default function ProductDetail() {
    const { id } = useParams()
    const router = useRouter()

    const product = mockProducts.find(
        (p) => p.id === Number(id)
    )

    if (!product) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6">
                    Produto não encontrado
                </h1>
                <button
                    onClick={() => router.push('/products')}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Voltar
                </button>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-gray-100 py-16 px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden mt-25">
                <div className="grid md:grid-cols-2">
                    <div className="relative w-full h-96 md:h-auto">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="p-8 flex flex-col justify-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-red-600 font-bold text-2xl mb-6">
                            {product.price}
                        </p>

                        <p className="text-gray-600 mb-6">
                            Este modelo combina desempenho, conforto e estilo — perfeito
                            para quem busca aventura e praticidade no dia a dia.
                            Possui motor de alta eficiência e design moderno.
                        </p>

                        <div className="flex space-x-4">
                            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                                Comprar
                            </button>
                            <Link
                                href="/products"
                                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
                            >
                                Voltar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
