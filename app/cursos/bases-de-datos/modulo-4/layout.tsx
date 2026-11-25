import CursoLayout from "@/app/components/CursoLayout";

const temas = [
  {
    slug: "introduccion-programacion",
    titulo: "Introducción a la programación",
  },
  {
    slug: "algoritmos",
    titulo: "Algoritmos y resolución de problemas",
  },
  {
    slug: "variables-constantes",
    titulo: "Variables, constantes y tipos de datos",
  },
  {
    slug: "estructuras-condicionales",
    titulo: "Estructuras de control y decisiones",
  },
  {
    slug: "estructuras-repetitivas",
    titulo: "Estructuras repetitivas",
  },
  {
    slug: "procedimientos-funciones",
    titulo: "Procedimientos y funciones",
  },
  {
    slug: "macros",
    titulo: "Introducción a las macros en Access",
  },
  {
    slug: "consultas-qbe",
    titulo: "Consultas mediante QBE",
  },/*
  {
    slug: "introduccion-sql",
    titulo: "Introducción al lenguaje SQL",
  },
  {
    slug: "sql-select",
    titulo: "Consultas SQL de selección",
  },
  {
    slug: "sql-accion",
    titulo: "Consultas SQL de acción",
  },
  {
    slug: "sql-agrupaciones-relaciones",
    titulo: "Consultas SQL con agrupaciones y relaciones",
  },
  {
    slug: "integracion-programacion",
    titulo: "Integración de programación en Access",
  },
  {
    slug: "examen",
    titulo: "Examen integrador",
  },*/
];

export default function Modulo4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CursoLayout
      tituloCurso="Operador de Bases de Datos para Oficina"
      cursoPath="/cursos/bases-de-datos"
      tituloModulo="Módulo 4: Programación"
      basePath="/cursos/bases-de-datos/modulo-4"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}