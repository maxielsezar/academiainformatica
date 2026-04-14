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
  { titulo: "Presentación conceptual de Multimedia", slug: "presentacion" },
  { titulo: "Multimedia como  medio de Comunicación", slug: "comunicacion" },
  { titulo: "Comunicación Audiovisual", slug: "audiovisual" },
  { titulo: "Aplicaciones de la Multimedia", slug: "aplicacion" },
  { titulo: "Interactividad", slug: "interactividad" },
  { titulo: "Elementos Visuales", slug: "elementos" },
  { titulo: "Folleto", slug: "folleto" },
  { titulo: "Flyer", slug: "flyer" },
 // { titulo: "Cuestionario", slug: "cuestionario" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Informática Multimedial"
      cursoPath="/cursos/informatica-multimedial"
      tituloModulo="Módulo 4"
      basePath="/cursos/informatica-multimedial/modulo-4"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}