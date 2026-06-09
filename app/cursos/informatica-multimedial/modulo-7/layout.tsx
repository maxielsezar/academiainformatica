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
  { titulo: "Interfaz de Audacity", slug: "interfaz" },
  { titulo: "Herramientas", slug: "audacity" },
  { titulo: "Edición de Pistas", slug: "pistas" },
  { titulo: "Grabación", slug: "grabar" },
  { titulo: "Narración", slug: "narracion" },
  { titulo: "Grabación de Imagen", slug: "imagen" },
  { titulo: "Producción Audivisual", slug: "produccion-audiovisual" },
  { titulo: "Cuestionario", slug: "cuestionario" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Informática Multimedial"
      cursoPath="/cursos/informatica-multimedial"
      tituloModulo="Módulo 7"
      basePath="/cursos/informatica-multimedial/modulo-7"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}