"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú cuando se hace click en link
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white dark:bg-black shadow-md py-4" : "bg-transparent py-6"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Academia de Informática"
            width={40}
            height={40}
            className={`transition-all duration-300`}
          />
          <span
            className={`font-semibold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-blue-900 dark:text-white" : "text-white "
            }`}
          >
            Cursos de Informática CFP 655
          </span>
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex gap-10 text-sm font-medium transition-colors duration-300 ${
            scrolled ? "text-blue-900 dark:text-white" : "text-white"
          }`}
        >
          <a href="#" className="hover:text-blue-600 transition">Inicio</a>
          <a href="#cursos" className="hover:text-blue-600 transition">Cursos</a>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled && "bg-blue-900" 
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-blue-900" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-blue-900" : "bg-white"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          ${scrolled ? "bg-white text-blue-900" : "bg-blue-900 text-white"}
        `}
      >
        <div className="flex flex-col items-center py-6 gap-6 text-sm font-medium">
          <a href="#" onClick={handleLinkClick}>Inicio</a>
          <a href="#cursos" onClick={handleLinkClick}>Cursos</a>
        </div>
      </div>
    </header>
  );
}