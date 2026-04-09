
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
    { titulo: "Sintaxis Básica de Java", slug: "java" }, 
    { titulo: "JavaFX", slug: "fx" },   
    { titulo: "Controller", slug: "controller" },
    { titulo: "CSS", slug: "css" },
    { titulo: "MVC", slug: "mvc" },
    { titulo: "El modelo computacional de objetos", slug: "modelo" },
    { titulo: "Clases y Objetos", slug: "clases-objetos" },
    { titulo: "Atributos y Metodos", slug: "atributos-metodos" },
    { titulo: "Estado y Comportamiento", slug: "estado-comportamiento" },
    { titulo: "Encapsulamiento", slug: "encapsulamiento" },
    { titulo: "Niveles de Acceso", slug: "acceso" },
   // { titulo: "Tiempo de vida de los objetos", slug: "tiempo-vida" },

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