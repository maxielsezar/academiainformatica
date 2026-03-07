
import CursoLayout from "@/app/components/CursoLayout";

  const temas = [
    { titulo: "Introducción al Algoritmo", slug: "algoritmo" },
    { titulo: "Sintaxis", slug: "sintaxis" },
    { titulo: "Variables y Constantes", slug: "variables" },
    { titulo: "Operadores", slug: "operadores" },
    { titulo: "Estructura Condicional", slug: "condicional" },
    { titulo: "Estructura Iterativa", slug: "iterativa" },
    { titulo: "Funciones", slug: "funciones" },
    { titulo: "Arreglos", slug: "arreglos" },
  ];



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloModulo="Módulo 1"
      basePath="/cursos/programador/modulo-1"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}