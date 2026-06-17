
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
    { titulo: "Introducción", slug: "introduccion" }, 
    { titulo: "Diagramas Entidad-Relación", slug: "entidad-relacion" }, 
    { titulo: "Claves Primarias y Foráneas", slug: "claves" }, 
    { titulo: "JDBC", slug: "jdbc" }, 
    { titulo: "CRUD", slug: "crud" }, 
    { titulo: "SQLite", slug: "sqlite" }, 
  ];
 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Programador"
      cursoPath="/cursos/programador"
      tituloModulo="Módulo 5"
      basePath="/cursos/programador/modulo-5"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}