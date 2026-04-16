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
  { titulo: "Texto Digital", slug: "texto-digital" },
  { titulo: "Descargar Tipografia", slug: "tipografia" },
  { titulo: "Hipertexto", slug: "hipertexto" },
  { titulo: "Estructura de la Información", slug: "estructura" },
//  { titulo: "Lectura en pantalla", slug: "lectura" },
//  { titulo: "Pagina web", slug: "pagina-web" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Informática Multimedial"
      cursoPath="/cursos/informatica-multimedial"
      tituloModulo="Módulo 5"
      basePath="/cursos/informatica-multimedial/modulo-5"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}