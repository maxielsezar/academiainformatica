import CursoLayout from "@/app/components/CursoLayout";

const temas = [
  {
    slug: "introduccion",
    titulo: "Introducción a las presentaciones digitales",
  },
  {
    slug: "interfaz",
    titulo: "Interfaz y herramientas del editor",
  },/*
  {
    slug: "diseno-diapositivas",
    titulo: "Diseño y estructura de diapositivas",
  },
  {
    slug: "textos-imagenes-graficos",
    titulo: "Textos, imágenes y gráficos",
  },
  {
    slug: "animaciones-transiciones",
    titulo: "Animaciones y transiciones",
  },
  {
    slug: "sonido-video",
    titulo: "Sonido y video",
  },
  {
    slug: "herramientas-graficas",
    titulo: "Herramientas de dibujo y recursos gráficos",
  },
  {
    slug: "presentacion-distribucion",
    titulo: "Presentación y distribución del trabajo",
  },
  {
    slug: "practicas",
    titulo: "Prácticas integradoras",
  },
  {
    slug: "actividad-integradora",
    titulo: "Actividad integradora",
  },
  {
    slug: "quiz",
    titulo: "Cuestionario del Módulo 6",
  },*/
];

export default function Modulo6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CursoLayout
      tituloCurso="Operador de Informática para Administración y Gestión"
      cursoPath="/cursos/administracion"
      tituloModulo="Módulo 6"
      basePath="/cursos/administracion/modulo-6"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}