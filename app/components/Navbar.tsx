"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  main: boolean;
};

export default function Navbar({
  main,
}: Props) {
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
   const sections = [
    
    { name: "Inicio", href: "/" },
    { name: "Cursos", href: "#cursos" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Resultados", href: "#resultados" },
    { name: "Enfoque formativo", href: "#enfoque" },
    { name: "Certificación", href: "#certificacion" },
    { name: "Contenido", href: "#contenido" }
  ];

  return (
   <header
      className={`
        fixed top-0 left-0 w-full z-50
        ${main 
          ? `transition-all duration-300 ${
              scrolled 
                ? "bg-white dark:bg-black shadow-md py-4" 
                : "bg-transparent py-6"
            }`
          : "bg-white dark:bg-black py-4 shadow-md"
        }
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
            className={`font-semibold tracking-wide transition-colors duration-300
              ${scrolled || !main ? "text-blue-900" : "text-white"}
              dark:text-white
            `}
          >
            Cursos de Informática CFP 655
          </span>
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex gap-10 text-sm font-medium transition-colors duration-300 ${
            scrolled ? "text-blue-900 dark:text-white" : main ? "text-white" : "text-blue-900"
          }`}
        >
             {sections.map((section, index) => (
            <a
              key={index}
              href={section.href}
              className="hover:text-blue-600 transition"
            >
              {section.name}
            </a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              !main || scrolled
                ? "bg-blue-900 dark:bg-white"
                : "bg-white"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              !main || scrolled
                ? "bg-blue-900 dark:bg-white"
                : "bg-white"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              !main || scrolled
                ? "bg-blue-900 dark:bg-white"
                : "bg-white"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          
          ${
            main && !scrolled
              ? "bg-blue-900 text-white"
              : "bg-white text-blue-700 dark:bg-black dark:text-white"
          }
        `}
      >
      <div className="flex flex-col items-center py-6 gap-6 text-sm font-medium">
           {sections.map((section, index) => (
            <a
              key={index}
              href={section.href}
              onClick={handleLinkClick}
            >
              {section.name}
            </a>
          ))}
      </div>
    </div>
    </header>
  );
}