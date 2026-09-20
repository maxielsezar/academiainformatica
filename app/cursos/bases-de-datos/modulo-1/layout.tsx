import CursoLayout from "@/app/components/CursoLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operador de Bases de Datos para Oficina - Módulo 1",
  description:
    "Módulo 1 - Bases de datos. Curso Operador de Bases de Datos para Oficina.",
  icons: {
    icon: "/logo.png",
  },
};

const temas = [
  { titulo: "Introducción a las bases de datos", slug: "introduccion" },/*
  { titulo: "Tablas, campos y propiedades", slug: "tablas-campos" },
  { titulo: "Claves principales y secundarias", slug: "claves" },
  { titulo: "Relaciones entre tablas", slug: "relaciones" },
  { titulo: "Normalización de bases de datos", slug: "normalizacion" },
  { titulo: "Integridad referencial", slug: "integridad-referencial" },*/
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
      tituloModulo="Módulo 1 - Bases de datos"
      basePath="/cursos/bases-de-datos/modulo-1"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}