import CursoLayout from "@/app/components/CursoLayout";

export default function Modulo3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const temas = [
    {
      titulo: "Introducción a la interfaz con el usuario",
      slug: "introduccion-interfaz",
    },
    {
      titulo: "Concepto y utilidad de los formularios",
      slug: "concepto-formularios",
    },
    {
      titulo: "Creación de formularios",
      slug: "creacion-formularios",
    },
    {
      titulo: "Controles de formularios",
      slug: "controles-formularios",
    },/*
    {
      titulo: "Diseño y formato de formularios",
      slug: "diseno-formularios",
    },
    {
      titulo: "Formularios para tareas administrativas",
      slug: "formularios-administrativos",
    },
    {
      titulo: "Validación y navegación de registros",
      slug: "validacion-navegacion",
    },
    {
      titulo: "Concepto y utilidad de los informes",
      slug: "concepto-informes",
    },
    {
      titulo: "Creación de informes",
      slug: "creacion-informes",
    },
    {
      titulo: "Diseño y formato de informes",
      slug: "diseno-informes",
    },
    {
      titulo: "Agrupación, ordenamiento y totales",
      slug: "agrupacion-ordenamiento-totales",
    },
    {
      titulo: "Informes para la gestión administrativa",
      slug: "informes-administrativos",
    },
    {
      titulo: "Vista previa, impresión y exportación",
      slug: "impresion-exportacion",
    },
    {
      titulo: "Actividades prácticas",
      slug: "actividades-practicas",
    },
    {
      titulo: "Actividad integradora",
      slug: "actividad-integradora",
    },*/
  ];

  return (
    <CursoLayout
      tituloCurso="Operador de Bases de Datos para Oficina"
      cursoPath="/cursos/bases-de-datos"
      tituloModulo="Módulo 3: Interfaz con el usuario"
      basePath="/cursos/bases-de-datos/modulo-3"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}