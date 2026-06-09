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
  { titulo: "Proyecto Multimedia", slug: "proyecto" },
  { titulo: "Canva", slug: "canva" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Informática Multimedial"
      cursoPath="/cursos/informatica-multimedial"
      tituloModulo="Módulo 8"
      basePath="/cursos/informatica-multimedial/modulo-8"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}