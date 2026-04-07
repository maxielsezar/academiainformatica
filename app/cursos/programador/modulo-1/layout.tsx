
import CursoLayout from "@/app/components/CursoLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso de Programador",
  description: "Formación profesional en tecnología",
  icons: {
    icon: "/logo.png",
  },
};

  const temas = [
    { titulo: "Introducción al Algoritmo", slug: "introduccion-algoritmo" },
    { titulo: "Sintaxis", slug: "sintaxis" },
    { titulo: "Variables y Constantes", slug: "variables" },
    { titulo: "Operadores", slug: "operadores" },
    { titulo: "Estructura Condicional", slug: "condicional" },
    { titulo: "Estructura Iterativa", slug: "iterativa" },
    { titulo: "Funciones", slug: "funciones" },
    { titulo: "Arreglos", slug: "arreglos" },
    { titulo: "Listas", slug: "listas" },
    { titulo: "Arreglos vs Listas", slug: "array-lista" },
    { titulo: "Pilas y Colas", slug: "pilas-colas" },
    { titulo: "Actividades Practicas", slug: "actividades" },
    { titulo: "Algoritmo de busqueda", slug: "algoritmo-busqueda" },
    { titulo: "Algoritmo de ordenamiento", slug: "algoritmo-ordenamiento" },
    { titulo: "Complejidad de Algoritmos", slug: "complejidad-algoritmos" },
    { titulo: "Recursividad", slug: "recursividad" },
    { titulo: "Algoritmo de ordenamiento Recursivo", slug: "ordenamiento-recursivo" },
    { titulo: "Divide y venceras", slug: "divide-venceras" },
    { titulo: "Listas Enlazadas", slug: "lista-enlazada" },
    { titulo: "Practicas Listas Enlazadas", slug: "actividad-lista-enlaza" },
    { titulo: "Arboles", slug: "arboles" },
    { titulo: "Arboles AVL", slug: "avl" },
    { titulo: "Practicas Arboles", slug: "actividad-arbol" },
    { titulo: "Grafos", slug: "grafos" },
    { titulo: "Recorrido de Grafos", slug: "recorrido-grafo" },
    { titulo: "Algoritmo Dijkstra", slug: "dijkstra" },
    { titulo: "Algoritmo Bellman-Ford", slug: "bellmanford" },
    { titulo: "Requerimientos", slug: "requerimientos" },
    { titulo: "Sintaxis Básica de Java", slug: "java" }, 
    { titulo: "JavaFX", slug: "fx" },   
    { titulo: "Controller", slug: "controller" },
    { titulo: "CSS", slug: "css" },
  ];



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloCurso="Programador"
      cursoPath="/cursos/programador"
      tituloModulo="Módulo 1"
      basePath="/cursos/programador/modulo-1"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}