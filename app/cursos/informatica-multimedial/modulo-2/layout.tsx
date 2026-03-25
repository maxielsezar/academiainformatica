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
  { titulo: "Introducción al procesador de texto", slug: "introduccion" },
  { titulo: "Interfaz del procesador de texto", slug: "interfaz" },
  { titulo: "Crear y guardar documentos", slug: "crear-guardar" },
  { titulo: "Edición de texto", slug: "edicion-texto" },
  { titulo: "Formato de texto", slug: "formato-texto" },
  { titulo: "Formato de párrafo", slug: "formato-parrafo" },
  { titulo: "Listas", slug: "listas" },
  { titulo: "Insertar imágenes", slug: "insertar-imagenes" },
  { titulo: "Insertar tablas", slug: "tablas" },
  { titulo: "Diseño de página", slug: "diseno-pagina" },
  { titulo: "Encabezado y Pie de pagina", slug: "encabezado-pie" },
  { titulo: "Guardar, exportar e imprimir documentos", slug: "guardar-imprimir" },
  { titulo: "Exportar PDF", slug: "exportar-pdf" },
  { titulo: "Titulos y tabla de contenido", slug: "titulos-tabla-contenido" },
  { titulo: "Normas APA", slug: "normas-apa" },
  { titulo: "Currículum Vitae", slug: "crear-cv" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Informática Multimedial"
      cursoPath="/cursos/informatica-multimedial"
      tituloModulo="Módulo 2"
      basePath="/cursos/informatica-multimedial/modulo-2"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}