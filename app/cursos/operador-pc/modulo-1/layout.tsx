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
  { titulo: "Introducción a la informática", slug: "introduccion" },
  { titulo: "Hardware y Software", slug: "hardware-software" },
  { titulo: "Dispositivos de entrada y salida", slug: "dispositivos" },
  { titulo: "Memoria RAM y almacenamiento", slug: "memoria" },
  { titulo: "GPU", slug: "gpu" },
  { titulo: "Tipos de computadoras", slug: "tipos-computadoras" },
  { titulo: "Sistema operativo Windows", slug: "windows" },
  { titulo: "Buenas prácticas de uso de la PC", slug: "buenas-practicas" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloModulo="Módulo 1"
      basePath="/cursos/operador-pc/modulo-1"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}