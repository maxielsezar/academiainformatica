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
  { titulo: "Interfaz de Photoshop", slug: "interfaz" },
  { titulo: "Herramientas de Selección ", slug: "seleccion" },
  { titulo: "Edición de Imagen en Photoshop", slug: "imagen" },
  { titulo: "Capas en Photoshop", slug: "capas" },
  { titulo: "Guardar Imágenes en Photoshop", slug: "guardar" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Informática Multimedial"
      cursoPath="/cursos/informatica-multimedial"
      tituloModulo="Módulo 6"
      basePath="/cursos/informatica-multimedial/modulo-6"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}