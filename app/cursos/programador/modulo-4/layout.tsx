
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
    { titulo: "Testing", slug: "testing" }, 
    { titulo: "Casos de Prueba", slug: "casos-prueba" }, 
    { titulo: "Prueba Unitaria", slug: "prueba-unitaria" }, 
    { titulo: "Verificación", slug: "verificacion" }, 
    { titulo: "Depuración", slug: "depuracion" }, 
    { titulo: "Mejora Continua", slug: "mejora" }, 
  ];
 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Programador"
      cursoPath="/cursos/programador"
      tituloModulo="Módulo 4"
      basePath="/cursos/programador/modulo-4"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}