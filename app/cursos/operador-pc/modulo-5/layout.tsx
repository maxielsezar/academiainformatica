import CursoLayout from "@/app/components/CursoLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso de Operador de PC",
  description: "Formación profesional en tecnología",
  icons: {
    icon: "/logo.png",
  },
};

const temas = [
  { titulo: "Introducción a las Presentaciones Digitales", slug: "introduccion" },
  { titulo: "Interfaz de Power Point", slug: "interfaz" },
  { titulo: "Creación y guardado de presentaciones.", slug: "guardado" },
  { titulo: "Diseño y organización de diapositivas.", slug: "diseño" },
  { titulo: "Temas y Plantillas en PowerPoint.", slug: "temas" },
  { titulo: "Formato de Texto e Imágenes", slug: "texto-imagen" },
  { titulo: "Inserción de Tablas y Gráficos", slug: "tablas-graficos" },
  { titulo: "Inserción de Audio y Video", slug: "audio-video" },
];
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Operador de PC"
      cursoPath="/cursos/operador-pc"
      tituloModulo="Módulo 5"
      basePath="/cursos/operador-pc/modulo-5"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}