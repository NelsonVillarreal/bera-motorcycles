import gbrRojo  from '../../../public/assets/images/motos_sem_fondo/gbr_200_sem_fundo/gbr_vermelho_200.png'
import kavakNegra  from '../../../public/assets/images/motos_sem_fondo/kavak_150_sem_fundo/kavak_preta_150.png'
import sbrRoja  from '../../../public/assets/images/motos_sem_fondo/milan_150_sem_fondo/milan_azul.png'

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