"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface Modulo {
  id: number;
  titulo: string;
  descripcion: string;
}

interface Props {
  modulos: Modulo[];
  slug: string;
}

export default function ModuleAccordion({ modulos, slug }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {modulos.map((modulo, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={modulo.id}
            className="border border-gray-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center gap-4 px-6 py-4 text-left"
            >
              <span className="font-semibold">
                {modulo.id}. {modulo.titulo}
              </span>

              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6">
                <p className=" mb-4">
                  {modulo.descripcion}
                </p>

                <Link
                  href={`/cursos/${slug}/modulo-${modulo.id}`}
                  className="text-blue-700 font-medium hover:underline"
                >
                  Ver módulo completo →
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}