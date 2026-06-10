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
  { titulo: "Internet y la Web", slug: "internet" },
  { titulo: "Navegadores web y motores de búsqueda.", slug: "navegador" },
  { titulo: "Búsquedas eficientes de información.", slug: "busqueda" },
  { titulo: "Correo electrónico.", slug: "correo" },
  { titulo: "Adjuntar y descargar archivos.", slug: "archivos" },
  { titulo: "Almacenamiento en la nube.", slug: "almacenamiento" },
  { titulo: "Trabajo Colaborativo.", slug: "trabajo-colaborativo" },
  { titulo: "Formularios.", slug: "formularios" },
  { titulo: "Contactos.", slug: "contactos" },
  { titulo: "Plug-in.", slug: "plugin" },
];
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Operador de PC"
      cursoPath="/cursos/operador-pc"
      tituloModulo="Módulo 4"
      basePath="/cursos/operador-pc/modulo-4"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}