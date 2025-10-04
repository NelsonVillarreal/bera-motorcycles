import Image from "next/image"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Bera Motorcycles Logo"
              width={130}
              height={40}
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link href="/">Inicio</Link>
            <Link href="/products">Productos</Link>
            <Link href="/beyond">Repuestos</Link>
            <Link href="/noticias">Nosotros</Link>
            <Link href="/contato">Contato</Link>
          </nav>
        </div>
      </header>
    )
}