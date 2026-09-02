import CursoLayout from "@/app/components/CursoLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administración de agendas y herramientas de apoyo",
  description: "Módulo 3 - Operador de Informática para Administración y Gestión",
  icons: {
    icon: "/logo.png",
  },
};

const temas = [
  {
    titulo: "Introducción a la administración de agendas",
    slug: "introduccion",
  },/*
  {
    titulo: "Búsqueda de información en Internet",
    slug: "busqueda-internet",
  },*/
  {
    titulo: "Correo electrónico",
    slug: "email",
  },
  {
    titulo: "Listas de destinatarios",
    slug: "listas-destinatarios",
  },  
  {
    titulo: "Google Drive y almacenamiento en la nube",
    slug: "google-drive-almacenamiento",
  },
  {
    titulo: "Google Calendar y administración de agendas",
    slug: "google-calendar-agendas",
  }
  

  
  /*
  {
    titulo: "Buscadores web",
    slug: "buscadores",
  },
  {
    titulo: "Catalogación y discriminación de búsquedas",
    slug: "catalogacion-busquedas",
  },
  {
    titulo: "Guardar páginas para referencia",
    slug: "guardar-paginas",
  },
  
  {
    titulo: "Enviar, recibir y responder mensajes",
    slug: "mensajes",
  },
  {
    titulo: "Archivos adjuntos",
    slug: "archivos-adjuntos",
  },
  {
    titulo: "Organización de la correspondencia",
    slug: "organizacion-correspondencia",
  },
  
  {
    titulo: "Comunicación grupal",
    slug: "comunicacion-grupal",
  },
  {
    titulo: "Prácticas integradoras",
    slug: "practicas",
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
      tituloModulo="Módulo 3"
      basePath="/cursos/administracion/modulo-3"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}