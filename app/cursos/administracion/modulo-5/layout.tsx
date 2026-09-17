import Link from "next/link";
import { ReactNode } from "react";

const temas = [
  {
    slug: "introduccion",
    titulo: "Introducción a las planillas de cálculo",
  },
  {
    slug: "interfaz",
    titulo: "Interfaz y herramientas",
  },
  {
    slug: "libros-hojas",
    titulo: "Libros y hojas de cálculo",
  },/*
  {
    slug: "datos",
    titulo: "Tipos de datos",
  },
  {
    slug: "formato-celdas",
    titulo: "Formato de celdas",
  },
  {
    slug: "formulas",
    titulo: "Fórmulas",
  },
  {
    slug: "operaciones",
    titulo: "Operaciones y cálculos",
  },
  {
    slug: "referencias",
    titulo: "Referencias de celdas",
  },
  {
    slug: "funciones",
    titulo: "Funciones",
  },
  {
    slug: "funciones-matematicas",
    titulo: "Funciones matemáticas",
  },
  {
    slug: "funciones-logicas",
    titulo: "Funciones lógicas",
  },
  {
    slug: "ordenar-datos",
    titulo: "Ordenar datos",
  },
  {
    slug: "filtros",
    titulo: "Filtros",
  },
  {
    slug: "tablas",
    titulo: "Tablas y gestión de datos",
  },
  {
    slug: "graficos",
    titulo: "Gráficos",
  },
  {
    slug: "impresion",
    titulo: "Impresión y presentación",
  },
  {
    slug: "practicas",
    titulo: "Prácticas integradoras",
  },
  {
    slug: "actividad-integradora",
    titulo: "Actividad integradora",
  },
  {
    slug: "quiz",
    titulo: "Cuestionario del Módulo 5",
  },*/
];

import CursoLayout from "@/app/components/CursoLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planillas de Cálculo y Gestión de Datos - Módulo 5",
  description:
    "Módulo 5 - Operador de Informática para Administración y Gestión",
  icons: {
    icon: "/logo.png",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CursoLayout
      tituloCurso="Operador de Informática para Administración y Gestión"
      cursoPath="/cursos/administracion"
      tituloModulo="Módulo 5"
      basePath="/cursos/administracion/modulo-5"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}