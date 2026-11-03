
import CursoLayout from "@/app/components/CursoLayout";

const temas = [
  {
    slug: "introduccion",
    titulo: "Introducción a las publicaciones gráficas",
  },
  {
    slug: "herramientas-diseno",
    titulo: "Herramientas y aplicaciones de diseño gráfico",
  },
  {
    slug: "configuracion-pagina",
    titulo: "Configuración de página y composición",
  },
  {
    slug: "textos-tipografias",
    titulo: "Textos y tipografías",
  },
  {
    slug: "imagenes-elementos-graficos",
    titulo: "Imágenes y elementos gráficos",
  },
  {
    slug: "folletos-volantes",
    titulo: "Diseño de folletos y volantes",
  },
  {
    slug: "afiches-carteles",
    titulo: "Diseño de afiches y carteles publicitarios",
  },
  {
    slug: "publicaciones-informes",
    titulo: "Publicaciones para informes institucionales",
  },
  {
    slug: "preparacion-impresion",
    titulo: "Preparación e impresión de publicaciones",
  },
  {
    slug: "cuestionario",
    titulo: "Cuestionario del Módulo 7",
  },
  /*
  {
    slug: "practicas",
    titulo: "Prácticas integradoras",
  },
  {
    slug: "actividad-integradora",
    titulo: "Actividad integradora",
  },
  */
];

export default function Modulo7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CursoLayout
      tituloCurso="Operador de Informática para Administración y Gestión"
      cursoPath="/cursos/administracion"
      tituloModulo="Módulo 7"
      basePath="/cursos/administracion/modulo-7"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}
