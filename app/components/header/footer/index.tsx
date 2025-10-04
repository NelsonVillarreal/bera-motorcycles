import Link from "next/link"
import {
    FaFacebook,
    FaInstagram,
    FaMailBulk,
    FaMailchimp,
    FaPhone,
    FaWhatsapp
} from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12 mt-20 text-xs md:text-sm">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">

                <div>
                    <h4 className="text-white font-bold mb-4">Mapa de la página</h4>
                    <ul className="space-y-2">
                        <li><Link href="/">Productos</Link></li>
                        <li><Link href="/">Repuestos</Link></li>
                        <li><Link href="/">Servicios</Link></li>
                        <li><Link href="/">Contacto</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Institucional</h4>
                    <ul className="space-y-2">
                        <li><Link href="/">Nuestra Historia</Link></li>
                        <li><Link href="/">Ética y Normas</Link></li>
                        <li><Link href="/">Políticas y Condiciones</Link></li>
                        <li><Link href="/">Aviso de Privacidad</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Ayuda</h4>
                    <ul className="space-y-2">
                        <li><Link href="/">Términos de Uso</Link></li>
                        <li><Link href="/">Preguntas Frecuentes</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Atención al Cliente</h4>
                    <ul className="space-y-2">
                        <li><Link href="/">Soporte</Link></li>
                        <li><Link href="/">Servicios Financieros</Link></li>
                        <li><Link href="/">Preguntas Frecuentes</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Contacto</h4>
                    <ul className="space-y-3 flex-shrink-0">
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-white" />
                            <span>+51 929 690 044</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaWhatsapp className="text-white" />
                            <Link href="https://wa.me/51929690044" target="_blank">WhatsApp</Link>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaInstagram className="text-white" />
                            <Link href="https://www.instagram.com/bera.peru/" target="_blank">Instagram</Link>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaFacebook className="text-white" />
                            <Link href="/" target="_blank">Facebook</Link>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaMailBulk className="text-white" />
                            <Link className="break-all" href="/" target="_blank">by.beraperu@gmail.com</Link>
                        </li>
                    </ul>
                </div>

                <div className="text-center text-sm text-gray-600 mt-6 md:col-span-6 md:mt-12">
                    © {new Date().getFullYear()} Bera Motorcycle.
                </div>
            </div>
        </footer>
    )
}
