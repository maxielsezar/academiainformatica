
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
    { titulo: "Conectar la Base de datos", slug: "jdbc" }, 
    { titulo: "Operaciones básicas", slug: "crud" }, 
    { titulo: "Creación de base de datos SQLite", slug: "sqlite" }, 
    { titulo: "Unión de tablas", slug: "join" },
    { titulo: "Funciones", slug: "funciones" }, 
    { titulo: "Transacciones ACID", slug: "acid" }, 
    { titulo: "Formas Normales y Normalización", slug: "normalizacion" },
  /*  { titulo: "Procedimientos almacenados", slug: "procedimientos" },
    { titulo: "Vistas", slug: "vistas" }, 
    { titulo: "Índices", slug: "indices" },*/
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