import Link from "next/link";
import { ReactNode } from "react";

const temas = [
  {
    slug: "introduccion",
    titulo: "Introducción a Internet",
  },
  {
    slug: "navegadores",
    titulo: "Navegadores de Internet",
  },
  {
    slug: "funciones-navegador",
    titulo: "Funciones y herramientas del navegador",
  },
  {
    slug: "filtros",
    titulo: "Filtros y búsqueda",
  },
  {
    slug: "direcciones-internet",
    titulo: "Direcciones de Internet",
  },/*
  {
    slug: "motores-busqueda",
    titulo: "Motores de búsqueda",
  },
  {
    slug: "metabuscadores",
    titulo: "Metabuscadores",
  },
  {
    slug: "busquedas-eficientes",
    titulo: "Búsquedas eficientes",
  },
  {
    slug: "catalogar-resultados",
    titulo: "Catalogar y discriminar resultados",
  },
  {
    slug: "guardar-paginas",
    titulo: "Guardar páginas web",
  },
  {
    slug: "servicios-internet",
    titulo: "Servicios de Internet",
  },
  {
    slug: "intercambio-archivos",
    titulo: "Intercambio de archivos",
  },
  {
    slug: "correo-electronico",
    titulo: "Correo electrónico",
  },
  {
    slug: "seguridad-internet",
    titulo: "Seguridad en Internet",
  },
  {
    slug: "conexiones-seguras",
    titulo: "Conexiones seguras",
  },
  {
    slug: "firewalls",
    titulo: "Firewalls",
  },
  {
    slug: "autenticacion-mensajes",
    titulo: "Autenticación de mensajes",
  },
  {
    slug: "archivos-ejecutables",
    titulo: "Archivos ejecutables",
  },
  {
    slug: "buenas-practicas-seguridad",
    titulo: "Buenas prácticas de seguridad",
  },
  {
    slug: "actividad-integradora",
    titulo: "Actividad integradora",
  },
  {
    slug: "quiz",
    titulo: "Cuestionario del Módulo 4",
  },*/
];

import CursoLayout from "@/app/components/CursoLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administración de agendas y herramientas de apoyo",
  description: "Módulo 3 - Operador de Informática para Administración y Gestión",
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
      tituloModulo="Módulo 4"
      basePath="/cursos/administracion/modulo-4"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}