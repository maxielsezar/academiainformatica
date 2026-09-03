import CursoLayout from "@/app/components/CursoLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso de Programador",
  description: "Formación profesional en tecnología",
  icons: {
    icon: "/logo.png",
  },
};

const temas = [
  {
    titulo: "Introducción",
    slug: "introduccion",
  },
  {
    titulo: "Especificación de Requerimientos",
    slug: "requerimientos",
  },
  {
    titulo: "Requisitos Funcionales y No Funcionales",
    slug: "requisitos",
  },
  {
    titulo: "Diseño del Modelo de Datos",
    slug: "modelo-datos",
  },
  {
    titulo: "Arquitectura del Sistema",
    slug: "arquitectura",
  },
  {
    titulo: "Diagramas de Casos de Uso",
    slug: "casos-uso",
  },
  {
    titulo: "Diagramas de Contexto",
    slug: "diagramas-contexto",
  },
  {
    titulo: "Especificación de Procedimientos",
    slug: "procedimientos",
  },
  {
    titulo: "Diagramas de Secuencia",
    slug: "diagramas-secuencias",
  },
  {
    titulo: "Diagramas de Actividad",
    slug: "diagramas-actividad",
  },
  
  {
    titulo: "Procedimientos de Instalación",
    slug: "instalacion",
  },
  {
    titulo: "Documentación técnica",
    slug: "documentacion-tecnica",
  },
   {
    titulo: "Documentación de Usuario",
    slug: "documentacion-usuario",
  },
  
  /*
  {
    titulo: "Procedimientos de Prueba",
    slug: "pruebas",
  },
  {
    titulo: "Documentación Técnica",
    slug: "documentacion-tecnica",
  },
  {
    titulo: "Documentación de Usuario",
    slug: "documentacion-usuario",
  },
  {
    titulo: "Actividad Integradora",
    slug: "actividad",
  },*/
];

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CursoLayout
      tituloCurso="Programador"
      cursoPath="/cursos/programador"
      tituloModulo="Módulo 6"
      basePath="/cursos/programador/modulo-6"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}