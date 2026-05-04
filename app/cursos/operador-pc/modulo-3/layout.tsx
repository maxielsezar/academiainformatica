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
  { titulo: "Fórmulas básicas", slug: "formulas-basicas" },
  { titulo: "Formato de Celdas", slug: "formato-celdas" },
  { titulo: "Funciones", slug: "funciones" },
  { titulo: "Diferenciación de Datos, Tipos, Formatos y Protección", slug: "dif-datos" },
  { titulo: "Edición de Planilla", slug: "edicion-planilla" },
  { titulo: "Impresión de Planillas", slug: "impresion" },
  { titulo: "Formato Condicional", slug: "formato-condicional" },
  { titulo: "Contar", slug: "contar" },
  { titulo: "Si", slug: "si" },
  { titulo: "Texto", slug: "texto" },
  { titulo: "Buscar", slug: "buscar" },
  { titulo: "Y / O", slug: "y-o" },
  { titulo: "No", slug: "no" },
  { titulo: "Texto Avanzado", slug: "funciones-textos" },
  { titulo: "Descargar Trabajos", slug: "trabajos-practicos" },
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