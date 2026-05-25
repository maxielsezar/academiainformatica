
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
    { titulo: "Git", slug: "git" }, 
    { titulo: "Branch", slug: "branch" }, 
    { titulo: "Desarrollo de Software", slug: "desarrollo" }, 
    { titulo: "Scrum", slug: "scrum" }, 
    { titulo: "Jira", slug: "jira" }, 
    { titulo: "Proyecto", slug: "proyecto" }, 
  ];
 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Programador"
      cursoPath="/cursos/programador"
      tituloModulo="Módulo 3"
      basePath="/cursos/programador/modulo-3"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}