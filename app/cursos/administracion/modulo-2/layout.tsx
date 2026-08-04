import CursoLayout from "@/app/components/CursoLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso de Operador de PC - Módulo 2",
  description:
    "Módulo 2 del Curso de Operador de Informática para Administración y Gestión. Procesador de textos y elaboración de documentos administrativos.",
  icons: {
    icon: "/logo.png",
  },
};

const temas = [
  {
    titulo: "Introducción al procesador de textos",
    slug: "introduccion",
  },/*
  {
    titulo: "Interfaz y herramientas",
    slug: "interfaz-herramientas",
  },
  {
    titulo: "Crear, abrir y guardar documentos",
    slug: "crear-abrir-guardar",
  },
  {
    titulo: "Edición y formato de texto",
    slug: "edicion-formato",
  },
  {
    titulo: "Párrafos y alineación",
    slug: "parrafos-alineacion",
  },
  {
    titulo: "Listas y viñetas",
    slug: "listas-vinetas",
  },
  {
    titulo: "Tablas",
    slug: "tablas",
  },
  {
    titulo: "Imágenes y elementos gráficos",
    slug: "imagenes",
  },
  {
    titulo: "Encabezados y pies de página",
    slug: "encabezados-pies",
  },
  {
    titulo: "Configuración de página",
    slug: "configuracion-pagina",
  },
  {
    titulo: "Documentos administrativos",
    slug: "documentos-administrativos",
  },
  {
    titulo: "Cartas y notas formales",
    slug: "cartas-notas",
  },
  {
    titulo: "Revisión y corrección de documentos",
    slug: "revision-correccion",
  },
  {
    titulo: "Impresión y exportación de documentos",
    slug: "impresion-exportacion",
  },*/
];

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CursoLayout
      tituloCurso="Operador de Informática para Administración y Gestión"
      cursoPath="/cursos/administracion"
      tituloModulo="Módulo 2 - Procesador de Textos"
      basePath="/cursos/administracion/modulo-2"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}