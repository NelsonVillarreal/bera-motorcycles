import gbrRojo  from '../../assets/dt-rojo.png'
import kavakNegra  from '../../assets/kavak-negra.png'
import sbrRoja  from '../../assets/sbr-roja.png'

interface Product {
    id: number
    name: string
    price: string
    image: string
}

export const mockProducts: Product[] = [
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
]