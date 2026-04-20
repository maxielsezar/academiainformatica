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
  { titulo: "Introducción a la Planillas de Cálculo", slug: "introduccion" },
  { titulo: "Interfaz de la planilla de cálculo.", slug: "interfaz" },
  { titulo: "Ingreso de datos", slug: "ingreso-datos" },
 // { titulo: "Fórmulas básicas", slug: "formulas-basicas" },
 // { titulo: "Funciones", slug: "funciones" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Operador de PC"
      cursoPath="/cursos/operador-pc"
      tituloModulo="Módulo 3"
      basePath="/cursos/operador-pc/modulo-3"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}