
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
    { titulo: "El modelo computacional de objetos", slug: "modelo" },
    { titulo: "Clases y Objetos", slug: "clases-objetos" },
    { titulo: "Atributos y Metodos", slug: "atributos-metodos" },
    { titulo: "Estado y Comportamiento", slug: "estado-comportamiento" },
  ];



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Programador"
      cursoPath="/cursos/programador"
      tituloModulo="Módulo 2"
      basePath="/cursos/programador/modulo-2"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}