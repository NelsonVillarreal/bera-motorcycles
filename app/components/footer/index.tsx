import Link from "next/link"
import { 
  FaFacebook, 
  FaInstagram, 
  FaMailBulk, 
  FaPhone, 
  FaTiktok, 
  FaWhatsapp 
} from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">

      <div className="max-w-7xl mx-auto px-6 
        grid grid-cols-1 md:grid-cols-2 
        gap-8 text-left md:text-center"
      >
        
        {/* Contato */}
        <div className="flex flex-col items-start md:items-center">
          <h4 className="text-white font-bold mb-4">Contacto</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaPhone className="text-white" />
              <span>+51 929 690 044</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMailBulk className="text-white" />
              <a href="mailto:by.beraperu@gmail.com" className="hover:text-white">
                by.beraperu@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Redes */}
        <div className="flex flex-col items-start md:items-center">
          <h4 className="text-white font-bold mb-4">Redes Sociales</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-white" />
              <Link href="https://wa.me/51933691818" target="_blank">WhatsApp</Link>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-white" />
              <Link href="https://www.instagram.com/bera_lima_comas?igsh=YTd6cjBsNDB4aHA2&utm_source=qr" target="_blank">Instagram</Link>
            </li>
            <li className="flex items-center gap-3">
              <FaFacebook className="text-white" />
              <Link href="https://www.facebook.com/profile.php?id=61582443207993&sk=reels_tab" target="_blank">Facebook</Link>
            </li>
            <li className="flex items-center gap-3">
              <FaTiktok className="text-white" />
              <Link href="https://www.tiktok.com/@beralimanorte" target="_blank">TikTok</Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="col-span-1 md:col-span-2 text-center text-sm text-gray-600 mt-6 md:mt-12">
          © {new Date().getFullYear()} Bera Motorcycles.
        </div>
      </div>
    </footer>
  )
}