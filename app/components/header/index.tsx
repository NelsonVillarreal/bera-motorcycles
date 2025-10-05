"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FiMenu, FiX } from "react-icons/fi"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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

        {/* Botão Hamburguer (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Abrir menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/">Inicio</Link>
          <Link href="/products">Productos</Link>
          <Link href="/beyond">Repuestos</Link>
          <Link href="/noticias">Nosotros</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link href="/products" onClick={() => setMenuOpen(false)}>Productos</Link>
            <Link href="/beyond" onClick={() => setMenuOpen(false)}>Repuestos</Link>
            <Link href="/noticias" onClick={() => setMenuOpen(false)}>Nosotros</Link>
            <Link href="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
