import CursoLayout from "@/app/components/CursoLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso de Informática Multimedial",
  description: "Formación profesional en tecnología",
  icons: {
    icon: "/logo.png",
  },
};

const temas = [
  { titulo: "Búsqueda en Internet", slug: "busqueda" },
  { titulo: "Evaluación de la Información", slug: "evaluacion" },
  { titulo: "Organización de la Información", slug: "organizacion" },
  { titulo: "Uso Responsable de la Información", slug: "uso" },
  { titulo: "Trabajo Practico", slug: "trabajo-practico" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Informática Multimedial"
      cursoPath="/cursos/informatica-multimedial"
      tituloModulo="Módulo 3"
      basePath="/cursos/informatica-multimedial/modulo-3"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}