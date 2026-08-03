import CursoLayout from "@/app/components/CursoLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operador de Informática para Administración y Gestión - Módulo 1",
  description:
    "Módulo 1 - Entorno de la PC. Curso Operador de Informática para Administración y Gestión.",
  icons: {
    icon: "/logo.png",
  },
};

const temas = [
  { titulo: "Introducción a la PC", slug: "introduccion" },
  { titulo: "Hardware de la computadora", slug: "hardware" },
  { titulo: "Software y sistema operativo", slug: "software" },
  { titulo: "Componentes internos de la PC", slug: "componentes" },
  { titulo: "Escritorio de Windows", slug: "escritorio-windows" },
  { titulo: "Explorador de archivos", slug: "explorador-archivos" },
  { titulo: "Panel de control y configuración", slug: "panel-control" },
  { titulo: "Instalación y desinstalación de programas", slug: "instalacion-programas" },
  { titulo: "Organización de archivos y carpetas", slug: "archivos-carpetas" },
  { titulo: "Dispositivos de almacenamiento", slug: "almacenamiento" },
  /*{ titulo: "Copias de seguridad (Backup)", slug: "backup" },
  { titulo: "Mantenimiento y limpieza de la PC", slug: "mantenimiento" },
  { titulo: "Virus y antivirus", slug: "virus-antivirus" },*/
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
      tituloModulo="Módulo 1 - Entorno de la PC"
      basePath="/cursos/administracion/modulo-1"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}