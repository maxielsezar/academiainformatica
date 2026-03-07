import CursoLayout from "@/app/components/CursoLayout";

const temas = [
  { titulo: "Introducción a la informática", slug: "introduccion" },
  { titulo: "Hardware y Software", slug: "hardware-software" },
  { titulo: "Dispositivos de entrada y salida", slug: "dispositivos" },
  { titulo: "Memoria RAM y almacenamiento", slug: "memoria" },
  { titulo: "Tipos de computadoras", slug: "tipos-computadoras" },
  { titulo: "Sistema operativo Windows", slug: "windows" },
  { titulo: "Buenas prácticas de uso de la PC", slug: "buenas-practicas" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursoLayout
      tituloModulo="Módulo 1"
      basePath="/cursos/informatica-multimedial/modulo-1"
      temas={temas}
    >
      {children}
    </CursoLayout>
  );
}