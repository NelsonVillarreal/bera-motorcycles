'use client';

import Image from 'next/image';
import { gbrRojo, kavakNegra, sbrRoja } from '../assets';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

const mockProducts: Product[] = [
    {
        id: 1,
        name: 'Bera BR 150 GTS',
        price: 'R$ 12.990,00',
        image: gbrRojo.src,
    },
    {
        id: 2,
        name: 'Bera BR 200 Sport',
        price: 'R$ 14.990,00',
        image: kavakNegra.src,
    },
    {
        id: 3,
        name: 'Bera BR 250 Touring',
        price: 'R$ 17.990,00',
        image: sbrRoja.src,
    },
];

export default function Products() {
    return (
        <main className="min-h-screen bg-gray-100 py-16 px-6">
            <div className='mt-25'>
                <h1 className="text-gray-800 mb-10">
                    Todos los modelos
                </h1>

                <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {mockProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
                        >
                            <div className="relative w-full h-56">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                />
                            </div>

                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {product.name}
                                </h2>
                                <p className="text-red-600 font-bold text-xl mt-2">{product.price}</p>
                                <button className="mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                                    Ver detalhes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
