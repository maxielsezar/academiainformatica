import CursoLayout from "@/app/components/CursoLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operador de Bases de Datos para Oficina - Módulo 2",
  description:
    "Módulo 2 - Análisis y diseño del sistema. Curso Operador de Bases de Datos para Oficina.",
  icons: {
    icon: "/logo.png",
  },
};

const temas = [
  {
    titulo: "Análisis del sistema",
    slug: "analisis-sistema",
  },
  {
    titulo: "Análisis estructurado",
    slug: "analisis-estructurado",
  },
  {
    titulo: "Objetivos del sistema",
    slug: "objetivos-sistema",
  },
  {
    titulo: "Requerimientos del sistema",
    slug: "requerimientos",
  },
  {
    titulo: "Diagrama de entidad-relación",
    slug: "diagrama-entidad-relacion",
  },
  {
    titulo: "Planificación del proyecto",
    slug: "planificacion-proyecto",
  },
];

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CursoLayout
      tituloCurso="Operador de Bases de Datos para Oficina"
      cursoPath="/cursos/bases-de-datos"
      tituloModulo="Módulo 2 - Análisis y diseño del sistema"
      basePath="/cursos/bases-de-datos/modulo-2"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}